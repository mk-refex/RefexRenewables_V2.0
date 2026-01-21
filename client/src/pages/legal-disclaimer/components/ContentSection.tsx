export default function ContentSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-8">
            The information contained in this website is for general information purposes only. The information is provided by Refex Renewables & Infrastructure Limited and while we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            Through this website you are able to link to other websites which are not under the control of Refex Renewables & Infrastructure Limited. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            Every effort is made to keep the website up and running smoothly. However, Refex Renewables & Infrastructure Limited takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
          </p>

          <div className="mt-12 p-8 bg-emerald-50 rounded-lg border-l-4 border-emerald-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h3>
            <p className="text-gray-700 mb-3">
              If you have any questions about this Legal Disclaimer, please contact us:
            </p>
            <div className="space-y-2">
              <p className="text-gray-700">
                <strong className="text-emerald-600">Email:</strong>{' '}
                <a href="mailto:cs@refexrenewables.com" className="text-emerald-600 hover:text-emerald-700 no-underline">
                  cs@refexrenewables.com
                </a>
              </p>
              <p className="text-gray-700">
                <strong className="text-emerald-600">Phone:</strong>{' '}
                <a href="tel:18001020765" className="text-emerald-600 hover:text-emerald-700 no-underline">
                  1800 102 0765
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
