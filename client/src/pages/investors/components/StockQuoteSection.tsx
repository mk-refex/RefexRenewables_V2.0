import { useState, useEffect, useRef } from "react";
import { investorsCmsApi, stockApi } from "../../../services/api";

interface StockQuoteSettings {
  title?: string;
  currency?: string;
  columnCurrency?: string;
  columnPrice?: string;
  columnBid?: string;
  columnOffer?: string;
  columnChange?: string;
  columnVolume?: string;
  columnTodayOpen?: string;
  columnPreviousClose?: string;
  columnIntradayHigh?: string;
  columnIntradayLow?: string;
  columnWeekHigh52?: string;
  columnWeekLow52?: string;
  footerText?: string;
  isActive?: boolean;
}

interface StockQuoteAPIResponse {
  price?: string | number;
  bid?: string | number;
  offer?: string | number;
  change?: string | number;
  volume?: string | number;
  today_open?: string | number;
  previous_close?: string | number;
  intraday_high?: string | number;
  intraday_low?: string | number;
  week_high_52?: string | number;
  week_low_52?: string | number;
  currency?: string;
  [key: string]: any;
}

export default function StockQuote() {
  const [loading, setLoading] = useState(true);
  const [settings, setSettings] = useState<StockQuoteSettings | null>(null);
  const [bseData, setBseData] = useState<StockQuoteAPIResponse | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>("");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Default settings as fallback
  const defaultSettings: StockQuoteSettings = {
    title: "STOCK QUOTE",
    currency: "Rupees",
    columnCurrency: "CURRENCY",
    columnPrice: "PRICE",
    columnBid: "BID",
    columnOffer: "OFFER",
    columnChange: "CHANGE IN (%)",
    columnVolume: "VOLUME",
    columnTodayOpen: "TODAY'S OPEN",
    columnPreviousClose: "PREVIOUS CLOSE",
    columnIntradayHigh: "INTRADAY HIGH",
    columnIntradayLow: "INTRADAY LOW",
    columnWeekHigh52: "52 WEEK HIGH",
    columnWeekLow52: "52 WEEK LOW",
    footerText: "Pricing delayed by 5 minutes",
    isActive: true,
  };

  useEffect(() => {
    loadSettings();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (settings?.isActive) {
      fetchStockData();
      // Fetch stock data every 30 seconds
      intervalRef.current = setInterval(() => {
        fetchStockData();
      }, 30000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [settings?.isActive]);

  const loadSettings = async () => {
    try {
      const data = await investorsCmsApi.getStockQuote();
      if (data && data.isActive) {
        setSettings(data);
      } else {
        setSettings(defaultSettings);
      }
    } catch (err) {
      setSettings(defaultSettings);
    } finally {
      setLoading(false);
    }
  };

  const fetchStockData = async () => {
    try {
      // Fetch BSE data
      const bseResponse = await stockApi.getStockQuoteValue("REFEXRENEW.BO");
      console.log(
        "=== BSE API Response (Raw) ===",
        JSON.stringify(bseResponse, null, 2),
      );

      if (bseResponse) {
        // Handle new API response format: { status: true, data: {...} }
        let bseData = bseResponse;

        // Check for new API format: { status: true, data: {...} }
        if (
          bseResponse.status === true &&
          bseResponse.data &&
          typeof bseResponse.data === "object"
        ) {
          bseData = bseResponse.data;
        }
        // Check for nested structure like { data: {...} } (fallback)
        else if (
          bseResponse.data &&
          typeof bseResponse.data === "object" &&
          !bseResponse.status
        ) {
          bseData = bseResponse.data;
        }
        // Check for old format: { bse_data: {...} }
        else if (
          bseResponse.bse_data &&
          typeof bseResponse.bse_data === "object"
        ) {
          bseData = bseResponse.bse_data;
        }

        console.log("BSE Data extracted:", JSON.stringify(bseData, null, 2));
        console.log("BSE fiftyTwoWeekHigh:", bseData.fiftyTwoWeekHigh);
        console.log("BSE fiftyTwoWeekLow:", bseData.fiftyTwoWeekLow);
        console.log("BSE All Keys:", Object.keys(bseData || {}));

        // Set data if we have any valid fields
        if (
          bseData &&
          typeof bseData === "object" &&
          bseData.current_price !== undefined
        ) {
          setBseData(bseData);
        }
      }

      // Update last updated timestamp
      const now = new Date();
      setLastUpdated(
        `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${String(now.getMinutes()).padStart(2, "0")} ${now.getHours() >= 12 ? "PM" : "AM"}`,
      );
    } catch (err) {
      console.error("Failed to fetch stock quote data:", err);
    }
  };

  const formatValue = (value: string | number | undefined): string => {
    if (value === undefined || value === null) return "-";
    if (typeof value === "number") {
      return value.toFixed(2);
    }
    return String(value);
  };

  const getChangeValue = (change: string | number | undefined): string => {
    if (change === undefined || change === null) return "-";
    const changeStr = String(change);
    // If it doesn't start with + or -, add + for positive values
    if (!changeStr.startsWith("+") && !changeStr.startsWith("-")) {
      const num = parseFloat(changeStr);
      return num >= 0 ? `+${changeStr}` : changeStr;
    }
    return changeStr;
  };

  const isPositiveChange = (change: string | number | undefined): boolean => {
    if (change === undefined || change === null) return false;
    const changeStr = String(change);
    return (
      changeStr.startsWith("+") ||
      (!changeStr.startsWith("-") && parseFloat(changeStr) > 0)
    );
  };

  // Helper to get value from API response with multiple possible field names
  const getFieldValue = (
    data: StockQuoteAPIResponse | null,
    fieldNames: string[],
  ): string | number | undefined => {
    if (!data) return undefined;
    for (const fieldName of fieldNames) {
      if (data[fieldName] !== undefined && data[fieldName] !== null) {
        return data[fieldName];
      }
    }
    return undefined;
  };

  const currentSettings = settings || defaultSettings;
  const currentData = bseData;

  if (loading) {
    return (
      <section className="bg-white py-10 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-[110px]">
          <div className="flex items-center justify-center py-8 sm:py-12">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#7cd244]"></div>
              <p className="mt-4 text-gray-600">Loading stock quote...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!currentSettings.isActive) {
    return null;
  }

  return (
    <section className="bg-white py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-[110px]">
        <div className="mb-6 sm:mb-10 lg:mb-12">
          <h2 className="text-center text-xl font-bold uppercase tracking-wider text-black sm:text-2xl lg:text-3xl">
            {currentSettings.title}
          </h2>
          <div className="mt-3 text-center sm:mt-4">
            <span className="inline-block rounded-md bg-[#7cd244] px-3 py-1.5 text-xs font-semibold text-white sm:px-4 sm:py-2 sm:text-sm">
              BSE
            </span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="border border-gray-300 px-2 py-2 text-left text-xs font-semibold sm:px-3 sm:py-2.5 sm:text-sm lg:px-4 lg:py-3">
                  {currentSettings.columnCurrency}
                </th>
                <th className="border border-gray-300 px-2 py-2 text-left text-xs font-semibold sm:px-3 sm:py-2.5 sm:text-sm lg:px-4 lg:py-3">
                  {currentSettings.columnPrice}
                </th>
                <th className="border border-gray-300 px-2 py-2 text-left text-xs font-semibold sm:px-3 sm:py-2.5 sm:text-sm lg:px-4 lg:py-3">
                  {currentSettings.columnBid}
                </th>
                <th className="border border-gray-300 px-2 py-2 text-left text-xs font-semibold sm:px-3 sm:py-2.5 sm:text-sm lg:px-4 lg:py-3">
                  {currentSettings.columnOffer}
                </th>
                <th className="border border-gray-300 px-2 py-2 text-left text-xs font-semibold sm:px-3 sm:py-2.5 sm:text-sm lg:px-4 lg:py-3">
                  {currentSettings.columnChange}
                </th>
                <th className="border border-gray-300 px-2 py-2 text-left text-xs font-semibold sm:px-3 sm:py-2.5 sm:text-sm lg:px-4 lg:py-3">
                  {currentSettings.columnVolume}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 px-2 py-2 text-xs sm:px-3 sm:py-2.5 sm:text-sm lg:px-4 lg:py-3">
                  {currentSettings.currency}
                </td>
                <td className="border border-gray-300 px-2 py-2 text-xs font-semibold sm:px-3 sm:py-2.5 sm:text-sm lg:px-4 lg:py-3">
                  {formatValue(
                    getFieldValue(currentData, [
                      "price",
                      "Price",
                      "PRICE",
                      "current_price",
                      "last_price",
                    ]),
                  )}
                </td>
                <td className="border border-gray-300 px-2 py-2 text-xs sm:px-3 sm:py-2.5 sm:text-sm lg:px-4 lg:py-3">
                  {formatValue(
                    getFieldValue(currentData, [
                      "bid",
                      "Bid",
                      "BID",
                      "bid_price",
                    ]),
                  )}
                </td>
                <td className="border border-gray-300 px-2 py-2 text-xs sm:px-3 sm:py-2.5 sm:text-sm lg:px-4 lg:py-3">
                  {formatValue(
                    getFieldValue(currentData, [
                      "offer",
                      "Offer",
                      "OFFER",
                      "ask",
                      "Ask",
                      "ASK",
                      "ask_price",
                    ]),
                  )}
                </td>
                <td
                  className={`border border-gray-300 px-2 py-2 text-xs font-semibold sm:px-3 sm:py-2.5 sm:text-sm lg:px-4 lg:py-3 ${isPositiveChange(getFieldValue(currentData, ["change", "Change", "CHANGE", "change_percent", "change_percentage"])) ? "text-green-600" : "text-red-600"}`}
                >
                  {getChangeValue(
                    getFieldValue(currentData, [
                      "change",
                      "Change",
                      "CHANGE",
                      "change_percent",
                      "change_percentage",
                    ]),
                  )}
                </td>
                <td className="border border-gray-300 px-2 py-2 text-xs sm:px-3 sm:py-2.5 sm:text-sm lg:px-4 lg:py-3">
                  {formatValue(
                    getFieldValue(currentData, [
                      "volume",
                      "Volume",
                      "VOLUME",
                      "trading_volume",
                    ]),
                  )}
                </td>
              </tr>
            </tbody>
          </table>

          <table className="w-full border-collapse border border-gray-300 mt-4">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="border border-gray-300 px-2 py-2 text-left text-xs font-semibold sm:px-3 sm:py-2.5 sm:text-sm lg:px-4 lg:py-3">
                  {currentSettings.columnTodayOpen}
                </th>
                <th className="border border-gray-300 px-2 py-2 text-left text-xs font-semibold sm:px-3 sm:py-2.5 sm:text-sm lg:px-4 lg:py-3">
                  {currentSettings.columnPreviousClose}
                </th>
                <th className="border border-gray-300 px-2 py-2 text-left text-xs font-semibold sm:px-3 sm:py-2.5 sm:text-sm lg:px-4 lg:py-3">
                  {currentSettings.columnIntradayHigh}
                </th>
                <th className="border border-gray-300 px-2 py-2 text-left text-xs font-semibold sm:px-3 sm:py-2.5 sm:text-sm lg:px-4 lg:py-3">
                  {currentSettings.columnIntradayLow}
                </th>
                <th className="border border-gray-300 px-2 py-2 text-left text-xs font-semibold sm:px-3 sm:py-2.5 sm:text-sm lg:px-4 lg:py-3">
                  {currentSettings.columnWeekHigh52}
                </th>
                <th className="border border-gray-300 px-2 py-2 text-left text-xs font-semibold sm:px-3 sm:py-2.5 sm:text-sm lg:px-4 lg:py-3">
                  {currentSettings.columnWeekLow52}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 px-2 py-2 text-xs sm:px-3 sm:py-2.5 sm:text-sm lg:px-4 lg:py-3">
                  {formatValue(
                    getFieldValue(currentData, [
                      "today_open",
                      "todayOpen",
                      "open",
                      "Open",
                      "OPEN",
                      "opening_price",
                    ]),
                  )}
                </td>
                <td className="border border-gray-300 px-2 py-2 text-xs sm:px-3 sm:py-2.5 sm:text-sm lg:px-4 lg:py-3">
                  {formatValue(
                    getFieldValue(currentData, [
                      "previous_close",
                      "previousClose",
                      "prev_close",
                      "PrevClose",
                      "close",
                      "Close",
                      "CLOSE",
                      "closing_price",
                    ]),
                  )}
                </td>
                <td className="border border-gray-300 px-2 py-2 text-xs sm:px-3 sm:py-2.5 sm:text-sm lg:px-4 lg:py-3">
                  {formatValue(
                    getFieldValue(currentData, [
                      "intraday_high",
                      "intradayHigh",
                      "high",
                      "High",
                      "HIGH",
                      "day_high",
                      "dayHigh",
                    ]),
                  )}
                </td>
                <td className="border border-gray-300 px-2 py-2 text-xs sm:px-3 sm:py-2.5 sm:text-sm lg:px-4 lg:py-3">
                  {formatValue(
                    getFieldValue(currentData, [
                      "intraday_low",
                      "intradayLow",
                      "low",
                      "Low",
                      "LOW",
                      "day_low",
                      "dayLow",
                    ]),
                  )}
                </td>
                <td className="border border-gray-300 px-2 py-2 text-xs sm:px-3 sm:py-2.5 sm:text-sm lg:px-4 lg:py-3">
                  {formatValue(
                    getFieldValue(currentData, [
                      "fiftyTwoWeekHigh",
                      "FiftyTwoWeekHigh",
                      "FIFTY_TWO_WEEK_HIGH",
                      "week_high_52",
                      "weekHigh52",
                      "52_week_high",
                      "52WeekHigh",
                      "year_high",
                      "yearHigh",
                    ]),
                  )}
                </td>
                <td className="border border-gray-300 px-2 py-2 text-xs sm:px-3 sm:py-2.5 sm:text-sm lg:px-4 lg:py-3">
                  {formatValue(
                    getFieldValue(currentData, [
                      "fiftyTwoWeekLow",
                      "FiftyTwoWeekLow",
                      "FIFTY_TWO_WEEK_LOW",
                      "week_low_52",
                      "weekLow52",
                      "52_week_low",
                      "52WeekLow",
                      "year_low",
                      "yearLow",
                    ]),
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 text-right text-xs text-gray-600 sm:mt-6 sm:text-sm">
          <p>{currentSettings.footerText}</p>
          {lastUpdated && <p>Last Updated {lastUpdated}</p>}
        </div>
      </div>
    </section>
  );
}
