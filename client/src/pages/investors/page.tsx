import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import HeroSection from './components/HeroSection';
import StockQuoteSection from './components/StockQuoteSection';
import StockChartSection from './components/StockChartSection';
import HistoricalStockSection from './components/HistoricalStockSection';
import RelatedLinksSection from './components/RelatedLinksSection';

// Stock Analysis temporarily hidden until stock APIs are updated.
const SHOW_STOCK_ANALYSIS = false;

type InvestorsTab = 'related-links' | 'stock-analysis';

const getTabFromSearch = (search: string): InvestorsTab => {
  if (!SHOW_STOCK_ANALYSIS) return 'related-links';
  const tab = new URLSearchParams(search).get('tab');
  return tab === 'stock-analysis' ? 'stock-analysis' : 'related-links';
};

export default function InvestorsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<InvestorsTab>(() =>
    getTabFromSearch(location.search),
  );

  useEffect(() => {
    setActiveTab(getTabFromSearch(location.search));
  }, [location.search]);

  const handleTabChange = (tab: InvestorsTab) => {
    if (!SHOW_STOCK_ANALYSIS && tab === 'stock-analysis') return;
    setActiveTab(tab);
    navigate(
      {
        pathname: location.pathname,
        search: `?tab=${tab}`,
      },
      { replace: false },
    );
  };

  return (
    <Layout>
      <HeroSection />
      {SHOW_STOCK_ANALYSIS && (
        <section className="bg-white pb-2 pt-6 sm:pt-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-[110px]">
            <div className="flex justify-center">
              <div
                className="inline-flex w-full max-w-xl rounded-xl border border-gray-200 bg-gray-50 p-1"
                role="tablist"
                aria-label="Investors content tabs"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'related-links'}
                  onClick={() => handleTabChange('related-links')}
                  className={`flex-1 rounded-lg px-3 py-2 text-sm font-semibold transition-all duration-200 sm:px-4 sm:text-base ${
                    activeTab === 'related-links'
                      ? 'bg-[#16a34a] text-white shadow-sm'
                      : 'text-gray-700 hover:bg-white hover:text-gray-900'
                  }`}
                >
                  Related&nbsp;Links
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'stock-analysis'}
                  onClick={() => handleTabChange('stock-analysis')}
                  className={`flex-1 rounded-lg px-3 py-2 text-sm font-semibold transition-all duration-200 sm:px-4 sm:text-base ${
                    activeTab === 'stock-analysis'
                      ? 'bg-[#16a34a] text-white shadow-sm'
                      : 'text-gray-700 hover:bg-white hover:text-gray-900'
                  }`}
                >
                  Stock&nbsp;Analysis
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {!SHOW_STOCK_ANALYSIS || activeTab === 'related-links' ? (
        <RelatedLinksSection />
      ) : (
        <>
          <StockQuoteSection />
          <StockChartSection />
          <HistoricalStockSection />
        </>
      )}
    </Layout>
  );
}
