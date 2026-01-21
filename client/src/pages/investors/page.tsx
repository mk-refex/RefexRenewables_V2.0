import Layout from '../../components/layout/Layout';
import HeroSection from './components/HeroSection';
import StockQuoteSection from './components/StockQuoteSection';
import StockChartSection from './components/StockChartSection';
import HistoricalStockSection from './components/HistoricalStockSection';
import RelatedLinksSection from './components/RelatedLinksSection';

export default function InvestorsPage() {
  return (
    <Layout>
      <HeroSection />
      <StockQuoteSection />
      <StockChartSection />
      <HistoricalStockSection />
      {/* <RelatedLinksSection /> */}
    </Layout>
  );
}
