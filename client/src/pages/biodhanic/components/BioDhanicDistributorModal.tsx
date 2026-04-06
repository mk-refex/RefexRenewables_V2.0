import { useEffect } from 'react';

const DISTRIBUTORS = [
  {
    dealer: 'Balaji Sheti Seva Kendra Yewati',
    district: 'Kolhapur',
    address:
      'Yevati, Milkat No. 13, Post: Yevati, Tal: Karveer, Kolhapur, Maharashtra - 416001',
    officer: 'Ranjit Yashwant Sawant',
    contact: '9623152048',
  },
  {
    dealer: 'Shetkri Krishi Seva Kendra Karita',
    district: 'Kolhapur',
    address:
      'Post: Aare, Tal: Karveer, Dist: Kolhapur, India - 416001',
    officer: 'Ranjit Yashwant Sawant',
    contact: '9623152048',
  },
  {
    dealer: 'Kai Devappa Jadhav Vikas Seva Sanstha',
    district: 'Kolhapur',
    address: '706, Bachani, Kolhapur, 416001',
    officer: 'Ranjit Yashwant Sawant',
    contact: '9623152048',
  },
  {
    dealer: 'Shri Swami Samarth Krushi Udyog',
    district: 'Satara',
    address:
      'Ground Floor, Umbraj, Milkat No. 730/6, Gala No. 4, Near Varadraj Mangal Karyalay, A/P Umbraj, Taluka Karad, Umbraj, Satara, Maharashtra - 415109',
    officer: 'Vishwatej Tanaji Pawar',
    contact: '9359327242',
  },
  {
    dealer: 'Samruddhi Agro Services',
    district: 'Satara',
    address: 'Post: Shere, Tal: Karad, Dist: Satara - 415108',
    officer: 'Vishwatej Tanaji Pawar',
    contact: '9359327242',
  },
  {
    dealer: 'Sampada Krushi Seva Kendra',
    district: 'Kolhapur',
    address:
      'Shinnoli Kh, Belgaum-Vengurla Road, Chandgad, Kolhapur, Maharashtra - 416507',
    officer: 'Ranjit Yashwant Sawant',
    contact: '9623152048',
  },
  {
    dealer: 'Saibel Krushi Seva Kendra',
    district: 'Satara',
    address:
      'Navarasta, Patan, Satara, Maharashtra, India - 415207',
    officer: 'Vishwatej Tanaji Pawar',
    contact: '9359327242',
  },
  {
    dealer: 'KRUSHNAI KRUSHI SEVA KENDRA',
    district: 'Sangli',
    address: 'No. 321/1, Sakharale, Sangli, Maharashtra - 415414',
    officer: 'Vishwatej Tanaji Pawar',
    contact: '9359327242',
  },
  {
    dealer: 'Sri Siddhivinayak Agri Corporation',
    district: 'Kolhapur',
    address:
      'House No. 857, Near Vidyamandir Korochi, Korochi, Tal: Hatkanangale, Kolhapur, Maharashtra - 416109',
    officer: 'Ranjit Yashwant Sawant',
    contact: '9623152048',
  },
] as const;

const PRODUCT_LINKS = [
  'https://www.amazon.in/dp/B0GKPCWYW1',
  'https://www.amazon.in/dp/B0GKPN4Z4T',
  'https://www.kisaantrade.com/product/biodhanic',
] as const;

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function BioDhanicDistributorModal({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 p-3 backdrop-blur-sm sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="biodhanic-distributor-title"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[min(92dvh,900px)] w-full max-w-5xl flex-col overflow-hidden rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
          aria-label="Close"
        >
          <i className="ri-close-line text-2xl" />
        </button>

        <div className="overflow-y-auto overscroll-contain px-4 pb-6 pt-14 sm:px-6 sm:pt-12">
          <h2
            id="biodhanic-distributor-title"
            className="mb-4 pr-10 text-xl font-bold text-gray-900 sm:text-2xl"
          >
            Distributor Details
          </h2>

          <div className="mb-8 overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-[#16a34a]/10">
                  <th className="whitespace-nowrap px-3 py-3 font-semibold text-gray-900">
                    S. no
                  </th>
                  <th className="px-3 py-3 font-semibold text-gray-900">
                    Dealer
                  </th>
                  <th className="whitespace-nowrap px-3 py-3 font-semibold text-gray-900">
                    District
                  </th>
                  <th className="min-w-[200px] px-3 py-3 font-semibold text-gray-900">
                    Address
                  </th>
                  <th className="px-3 py-3 font-semibold text-gray-900">
                    Sales Officer
                  </th>
                  <th className="whitespace-nowrap px-3 py-3 font-semibold text-gray-900">
                    Sales Officer&apos;s Contact
                  </th>
                </tr>
              </thead>
              <tbody>
                {DISTRIBUTORS.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-100 odd:bg-white even:bg-gray-50/80"
                  >
                    <td className="align-top px-3 py-3 font-medium text-gray-800">
                      {i + 1}
                    </td>
                    <td className="align-top px-3 py-3 text-gray-800">
                      {row.dealer}
                    </td>
                    <td className="align-top px-3 py-3 text-gray-800">
                      {row.district}
                    </td>
                    <td className="align-top px-3 py-3 text-gray-700 leading-relaxed">
                      {row.address}
                    </td>
                    <td className="align-top px-3 py-3 text-gray-800">
                      {row.officer}
                    </td>
                    <td className="align-top px-3 py-3">
                      <a
                        href={`tel:+91${row.contact}`}
                        className="font-medium text-[#16a34a] underline-offset-2 hover:underline"
                      >
                        {row.contact}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* <h3 className="mb-3 text-lg font-bold text-gray-900">Product Link</h3>
          <ul className="mb-8 space-y-2 text-sm">
            {PRODUCT_LINKS.map((href) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-[#16a34a] underline-offset-2 hover:underline"
                >
                  {href}
                </a>
              </li>
            ))}
          </ul> */}

          <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-green-50/80 to-emerald-50/50 p-5">
            <h3 className="mb-3 text-lg font-bold text-gray-900">
              Sales / Marketing Contact
            </h3>
            <p className="font-semibold text-gray-900">Sharath Kumar B</p>
            <p className="text-gray-700">Marketing Head BioDhanic</p>
            <p className="mt-2">
              <a
                href="tel:+918754444250"
                className="font-medium text-[#16a34a] hover:underline"
              >
                +91 87544 44250
              </a>
            </p>
            <p className="mt-1">
              <a
                href="mailto:sharathkumar.b@refex.co.in"
                className="font-medium text-[#16a34a] hover:underline"
              >
                sharathkumar.b@refex.co.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
