export default function ContactInfoSection() {
  const contacts = [
    {
      title: 'CORPORATE OFFICE',
      name: 'Refex Renewables & Infrastructure Limited',
      cin: 'CIN: L40101TN1989PLC028263',
      address: 'Refex Building, G7, Besullah Road,\nParthasarathy Puram, T Nagar,\nChennai – 600 017, Tamil Nadu',
      phone: '+91-44 – 4340 5950',
      email: 'cs@refexrenewables.com',
      color: 'text-emerald-600'
    },
    {
      title: 'REGISTERED OFFICE',
      name: 'Refex Renewables & Infrastructure Limited',
      cin: 'CIN: L40101TN1989PLC028263',
      address: '2nd Floor, Refex Towers, Sterling Road Signal\n313, Valluvar Kottam High Road, Nungambakkam,\nChennai – 600 034, Tamil Nadu',
      phone: 'Tel: +91-44 – 4340 5950',
      email: 'cs@refexrenewables.com',
      color: 'text-emerald-600'
    },
    {
      title: 'INVESTOR RELATIONS',
      name: 'Mr. Vinay Aggarwal',
      designation: 'Company Secretary & Compliance Officer',
      company: 'Refex Renewables & Infrastructure Limited',
      address: 'Second Floor, Refex Towers, Sterling Road Signal,\n313, Valluvar Kottam High Road, Nungambakkam,\nChennai –600 034, Tamil Nadu',
      phone: '+91-44 – 4340 5950',
      email: 'cs@refexrenewables.com',
      color: 'text-emerald-600'
    },
    {
      title: 'REGISTRAR AND SHARE TRANSFER AGENT',
      name: 'Mr. Krishna Kumar N',
      designation: 'Director & Compliance Officer',
      company: 'GNSA Infotech Private Limited',
      address: 'Nelson Chambers, 2/A Second Floor,\nNo. 115, Nelson Manickam Road, Aminjikarai,\nChennai – 600029, Tamil Nadu',
      phone: '+91-44 – 42962025',
      email: 'sta@gnsaindia.com',
      color: 'text-emerald-600'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contacts.map((contact, index) => (
            <div key={index} className="border-b border-gray-200 pb-8">
              <h3 className={`text-sm font-semibold ${contact.color} mb-3 uppercase tracking-wide`}>
                {contact.title}
              </h3>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                {contact.name}
              </h4>
              {contact.cin && (
                <p className="text-sm text-gray-600 mb-3">{contact.cin}</p>
              )}
              {contact.designation && (
                <p className="text-sm text-gray-600 mb-1">{contact.designation}</p>
              )}
              {contact.company && contact.company !== contact.name && (
                <p className="text-base font-semibold text-gray-900 mb-3">{contact.company}</p>
              )}
              <p className="text-sm text-gray-700 mb-3 whitespace-pre-line leading-relaxed">
                {contact.address}
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-700">
                  <i className="ri-phone-line w-5 h-5 flex items-center justify-center mr-2 text-gray-600"></i>
                  <span>{contact.phone}</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <i className="ri-mail-line w-5 h-5 flex items-center justify-center mr-2 text-gray-600"></i>
                  <span>{contact.email}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
