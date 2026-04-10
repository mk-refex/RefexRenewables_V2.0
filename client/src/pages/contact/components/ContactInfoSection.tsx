import SectionHeading from '../../../components/common/SectionHeading';

export default function ContactInfoSection() {
  const contacts = [
    {
      title: 'Corporate Office',
      name: 'Refex Renewables & Infrastructure Limited',
      cin: 'CIN: L40100TN1994PLC028263',
      address: 'Refex Building, 67, Bazullah Road,\nParthasarathy Puram, T Nagar,\nChennai – 600 017, Tamil Nadu',
      phone: '+91-44 – 4340 5950',
      email: 'cs@refexrenewables.com',
      color: 'text-emerald-600'
    },
    {
      title: 'Registered Office',
      name: 'Refex Renewables & Infrastructure Limited',
      cin: 'CIN: L40100TN1994PLC028263',
      address: '2nd Floor, Refex Towers, Sterling Road Signal\n313, Valluvar Kottam High Road, Nungambakkam,\nChennai – 600 034, Tamil Nadu',
      phone: 'Tel: +91-44 – 4340 5950',
      email: 'cs@refexrenewables.com',
      color: 'text-emerald-600'
    },
    {
      title: 'Investor Relations',
      name: 'Mr. Vinay Aggarwal',
      designation: 'Company Secretary & Compliance Officer',
      company: 'Refex Renewables & Infrastructure Limited',
      address: 'Second Floor, Refex Towers, Sterling Road Signal,\n313, Valluvar Kottam High Road, Nungambakkam,\nChennai –600 034, Tamil Nadu',
      phone: '+91-44 – 4340 5950',
      email: 'cs@refexrenewables.com',
      color: 'text-emerald-600'
    },
    {
      title: 'Registrar and Share Transfer Agent',
      name: 'Mr. Krishna Kumar N',
      designation: 'Director & Compliance Officer',
      company: 'GNSA Infotech Private Limited',
      address: '4th and 5th Floors,\nF-Block, Nelson Chambers\nNo.115, Nelson Manickam Road,\nAminjikarai, Chennai-600030, Tamil Nadu',
      phone: '+91-44 – 42962025',
      email: 'sta@gnsaindia.com',
      color: 'text-emerald-600'
    }
  ];

  return (
    <section className="bg-white py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* <div className="mb-12 flex flex-col items-center text-center">
          <SectionHeading
            badgeText="CONTACT"
            text="Information"
            className="justify-center"
            watermarkAlign="center"
          />
        </div> */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7 lg:gap-8">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-6 sm:pb-7 lg:pb-8"
            >
              <SectionHeading
                badgeText={contact.title}
                showWatermark={false}
                className="mb-2 sm:mb-3"
              />
              <h4 className="mb-2 text-lg font-bold text-gray-900 sm:text-xl">
                {contact.name}
              </h4>
              {contact.cin && (
                <p className="mb-2 text-xs text-gray-600 sm:mb-3 sm:text-sm">
                  {contact.cin}
                </p>
              )}
              {contact.designation && (
                <p className="mb-1 text-xs text-gray-600 sm:text-sm">
                  {contact.designation}
                </p>
              )}
              {contact.company && contact.company !== contact.name && (
                <p className="mb-2 text-sm font-semibold text-gray-900 sm:mb-3 sm:text-base">
                  {contact.company}
                </p>
              )}
              <p className="mb-3 whitespace-pre-line text-xs leading-relaxed text-gray-700 sm:text-sm">
                {contact.address}
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-xs text-gray-700 sm:items-center sm:text-sm">
                  <i
                    className="ri-phone-line mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-gray-600 sm:mt-0"
                    aria-hidden
                  />
                  <span className="min-w-0 break-words">{contact.phone}</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-gray-700 sm:items-center sm:text-sm">
                  <i
                    className="ri-mail-line mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-gray-600 sm:mt-0"
                    aria-hidden
                  />
                  <span className="min-w-0 break-all">{contact.email}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
