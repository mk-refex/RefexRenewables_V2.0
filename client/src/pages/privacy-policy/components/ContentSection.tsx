import { memo } from 'react';

const linkClass =
  'text-[#16a34a] underline underline-offset-2 hover:text-[#15803d]';

const ContentSection = memo(() => {
  return (
    <section className="bg-white py-10 sm:py-14 lg:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 font-sans text-sm leading-relaxed text-gray-700 sm:space-y-10 sm:text-base lg:space-y-12">
          {/* PRIVACY POLICY + Introduction + Objective */}
          <div>
            <h2 className="mb-4 text-2xl font-bold text-[#16a34a] sm:mb-5 sm:text-3xl lg:mb-6">
            INTRODUCTION
            </h2>
            <p className="mb-4">
              The Privacy Policy (hereinafter referred to as the
              &quot;Policy&quot;) is issued by the Refex Renewables &amp;
              Infrastructure Limited which shall mean and include the holding
              company, subsidiaries, affiliates, its associate companies
              (hereinafter referred to as &quot;RRIL&quot; or &quot;Company&quot;
              or &quot;We&quot; or &quot;Our&quot; or &quot;Us&quot;).
            </p>
            <p className="mb-6">
              At RRIL, your privacy is of the utmost importance, and we are
              committed to protecting your personal information. This Privacy
              Policy explains how we collect, use, and protect the Personal Data
              you provide while using our website,{' '}
              <a
                href="https://www.refexrenewables.com"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                www.refexrenewables.com
              </a>{' '}
              (the &quot;Website&quot;).
            </p>
            <h2 className="mb-4 text-2xl font-bold text-[#16a34a] sm:mb-5 sm:text-3xl lg:mb-6">
            OBJECTIVE
            </h2>
            <p className="mb-4">
              By accessing and using the Website, you agree to the practices
              described in this Privacy Policy. This Policy applies exclusively to
              the Data collected through our Website and does not extend to
              information gathered offline or through third-party websites. The
              protection of your privacy and Personal Data is a top priority, and
              we take great care to address this concern throughout our business
              processes. We handle the Personal Data you voluntarily provide
              during your visits to our Website in strict accordance with the
              applicable laws of the country where our Website is hosted.
            </p>
            <p className="mb-4">
              Please note that this Website may include links to the ancillary
              websites of RRIL which shall include its subsidiaries, affiliates,
              and associate companies. Further, this Website may lead/include
              links of third parties whose privacy practices differ from those of
              RRIL. If you choose to provide your Personal Data to any of these
              third-party websites, your Data will be governed by their
              respective privacy policies or statements.
            </p>
            <p className="mb-4">
              The core objective of this Policy is to inform you about the nature
              of the Personal Data we collect, the purpose for which it is
              collected, how it is used, processed, and your rights regarding the
              Data you share with us. This Policy also outlines your rights in
              relation to the protection of your Personal Data. It describes the
              types of information RRIL collects through this Website, how that
              information is used, stored, shared, protected.
            </p>
            <p>
              We encourage you to read and understand this Policy in connection
              with the use of our Website.
            </p>
          </div>

          {/* 1. DEFINITIONS */}
          <div>
            <h2 className="mb-4 text-xl font-bold text-[#16a34a] sm:mb-5 sm:text-2xl md:text-3xl lg:mb-6">
              1. DEFINITIONS
            </h2>
            <p className="mb-4">
              In this Policy the following definitions are used:
            </p>
            <ol className="list-none space-y-4">
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 font-bold text-[#16a34a]">
                  1.
                </span>
                <span>
                  &quot;Data&quot; includes information that RRIL collects,
                  including your personal information, that you submit to RRIL via
                  the Website, as well as information accessed by RRIL pursuant
                  to your visit to the Website, except for your information that is
                  or will be in the public domain.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 font-bold text-[#16a34a]">
                  2.
                </span>
                <span>
                  &quot;Data Protection Laws&quot; refers to any applicable law
                  relating to the processing of Personal Data, including the
                  Information Technology Act, 2000, as amended or substituted and
                  other relevant laws and regulations in the applicable
                  jurisdiction;
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 font-bold text-[#16a34a]">
                  3.
                </span>
                <span>
                  &quot;User / You&quot; refers to any natural person who
                  accesses the Website.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 font-bold text-[#16a34a]">
                  4.
                </span>
                <span>
                  &quot;Website&quot; means the website that you are currently
                  using,{' '}
                  <a
                    href="https://www.refexrenewables.com"
                    className={linkClass}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.refexrenewables.com
                  </a>
                  , and any sub-domains of this site, unless excluded by their own
                  terms and conditions.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 font-bold text-[#16a34a]">
                  5.
                </span>
                <span>
                  &quot;Personal Data&quot; refers to any information that relates
                  to an identified or identifiable natural person, including but
                  not limited to name, contact information, IP address, location
                  Data, or any other information that can identify you.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 font-bold text-[#16a34a]">
                  6.
                </span>
                <span>
                  &quot;Cookies&quot; refers to small Data files that are stored
                  on your device when you visit the Website, used to enhance your
                  user experience by remembering preferences and tracking usage.
                </span>
              </li>
            </ol>
          </div>

          {/* 2. SCOPE */}
          <div>
            <h2 className="mb-4 text-xl font-bold text-[#16a34a] sm:mb-5 sm:text-2xl md:text-3xl lg:mb-6">
              2. SCOPE
            </h2>
            <p>
              RRIL may collect Personal Data directly from users, such as when
              you submit an inquiry, request, or proposal through our website or
              other communication channels. You may visit{' '}
              <a
                href="https://www.refexrenewables.com"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                www.refexrenewables.com
              </a>{' '}
              without disclosing any personal information. However, certain Data
              may be automatically collected during your interaction with the
              site, as described in our Privacy Policy. By submitting
              information to us, you consent to the collection and use of your
              Data as outlined herein.
            </p>
          </div>

          {/* 3. APPLICABILITY */}
          <div>
            <h2 className="mb-4 text-xl font-bold text-[#16a34a] sm:mb-5 sm:text-2xl md:text-3xl lg:mb-6">
              3. APPLICABILITY
            </h2>
            <p>
              The Website is designed for individuals who are interested in
              exploring information about RRIL and seeking opportunities,
              services, and knowledge related to RRIL. It is intended for use by
              all persons, without limitation, who wish to engage with or learn
              more about RRIL and its offerings.
            </p>
          </div>

          {/* 4. DATA COLLECTION */}
          <div>
            <h2 className="mb-4 text-xl font-bold text-[#16a34a] sm:mb-5 sm:text-2xl md:text-3xl lg:mb-6">
              4. DATA COLLECTION
            </h2>
            <div className="space-y-4">
              <div>
                <p className="mb-3 font-semibold text-gray-900">i.</p>
                <p className="mb-3">
                  RRIL collects Data that you voluntarily provide to us, including
                  but not limited to the following scenarios:
                </p>
                <ul className="list-none space-y-2 pl-0">
                  <li className="flex gap-3">
                    <span className="shrink-0 font-bold text-[#16a34a]">a.</span>
                    <span>
                      Information you voluntarily submit when expressing interest
                      in our services, including any requested details provided
                      through the Website.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="shrink-0 font-bold text-[#16a34a]">b.</span>
                    <span>Responses to surveys conducted by RRIL.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="shrink-0 font-bold text-[#16a34a]">c.</span>
                    <span>
                      Registration details for events hosted or advertised on our
                      Website.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="shrink-0 font-bold text-[#16a34a]">d.</span>
                    <span>
                      Requests for information about our products, services, or
                      customer support.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="shrink-0 font-bold text-[#16a34a]">e.</span>
                    <span>
                      We do not track, collect, or store any information
                      automatically, such as IP addresses, browser type, browser
                      Cookies, location, or device information.
                    </span>
                  </li>
                </ul>
              </div>
              <p>
                <span className="font-semibold text-gray-900">ii.</span> We may
                request relevant Data such as your name, address, zip code, phone
                number, email address, IP address, location Data, and device
                information. While much of this Data is collected directly from
                you, it may also be obtained from third parties, including your
                employer, other organizations you belong to, or through our retail
                network and preferred partners. RRIL collects Data when you
                interact with the Website or use any products or services
                provided therein.
              </p>
              <p>
                <span className="font-semibold text-gray-900">iii.</span> RRIL
                retains your Data only for as long as necessary to fulfil the
                purposes outlined in this Policy, unless a longer retention
                period is required by law.
              </p>
              <p>
                <span className="font-semibold text-gray-900">iv.</span> Data is
                collected only when voluntarily provided by you.
              </p>
              <p>
                <span className="font-semibold text-gray-900">v.</span> We do not
                automatically capture any specific personal information, such as
                your name, phone number, or email address, that would allow us to
                identify you individually. In cases where the Website requests
                personal information, you will be informed of the specific
                purposes for which the Data is collected, and appropriate security
                measures will be implemented to safeguard your information.
              </p>
              <p>
                <span className="font-semibold text-gray-900">vi.</span>{' '}
                Information that is publicly available shall not be covered by
                this Policy, and RRIL shall not be held liable for any disclosures
                of such information.
              </p>
              <p>
                <span className="font-semibold text-gray-900">vii.</span> By
                providing us with your Data or Data related to your relatives,
                friends, or any third parties, you give your voluntary and
                unambiguous consent for the processing of such Data in accordance
                with the terms of this Policy. Furthermore, you confirm and
                guarantee that you have obtained similar consent from the relevant
                individuals for the processing of their Data by RRIL.
              </p>
            </div>
          </div>

          {/* 5. DATA USAGE */}
          <div>
            <h2 className="mb-4 text-xl font-bold text-[#16a34a] sm:mb-5 sm:text-2xl md:text-3xl lg:mb-6">
              5. DATA USAGE
            </h2>
            <p className="mb-4">
              By providing your User Information, you acknowledge and consent to
              RRIL retaining and processing your Data. RRIL shall be entitled to
              use your Personal Data for the following purposes:
            </p>
            <ul className="list-none space-y-3">
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 font-bold text-[#16a34a]">
                  i.
                </span>
                <span>
                  To provide you with the requested services and to communicate
                  with you regarding any feedback, follow-up inquiries, or queries
                  submitted to us.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 font-bold text-[#16a34a]">
                  ii.
                </span>
                <span>
                  To fulfill your requests related to our services, including but
                  not limited to responding to your inquiries and communicating
                  with you about products or services that we believe may be of
                  interest to you.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 font-bold text-[#16a34a]">
                  iii.
                </span>
                <span>
                  To enforce the legal terms that govern your use of our
                  services, including but not limited to our policies and terms of
                  service, and to fulfill the purposes for which you provided your
                  information.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 font-bold text-[#16a34a]">
                  iv.
                </span>
                <span>
                  To prevent fraud or any potentially illegal activities
                  (including but not limited to copyright infringement) on or
                  through our Website or services.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 font-bold text-[#16a34a]">
                  v.
                </span>
                <span>
                  To enable RRIL to comply with any legal obligations imposed by
                  applicable laws or regulations.
                </span>
              </li>
            </ul>
          </div>

          {/* 6. DATA SHARING & DISCLOSURE */}
          <div>
            <h2 className="mb-4 text-xl font-bold text-[#16a34a] sm:mb-5 sm:text-2xl md:text-3xl lg:mb-6">
              6. DATA SHARING &amp; DISCLOSURE
            </h2>
            <p className="mb-4">
              RRIL may share your Personal Data with the following entities:
            </p>
            <ol className="mb-4 list-none space-y-3">
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 font-bold text-[#16a34a]">
                  1.
                </span>
                <span>
                  Affiliates and subsidiaries and other entities within the RRIL
                  group of companies, to assist them to reach out to you in
                  relation to their programs or campaigns (including marketing and
                  sales) and to process your query/requests;
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 font-bold text-[#16a34a]">
                  2.
                </span>
                <span>
                  Our employees, service providers, business partners, and
                  subcontractors, consultants/advisors working on our behalf for
                  the purposes described in this Policy; and
                </span>
              </li>
            </ol>
            <p className="mb-4">
              In general, we do not share your Personal Data collected through the
              Website with other third parties. However, such sharing may occur
              in the following circumstances:
            </p>
            <ol className="list-none space-y-3">
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 font-bold text-[#16a34a]">
                  1.
                </span>
                <span>
                  If you request or authorize us to share your Data with third
                  parties;
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 font-bold text-[#16a34a]">
                  2.
                </span>
                <span>
                  If required to comply with applicable laws, regulations, or
                  respond to valid legal processes (such as a subpoena, court
                  order, or government request).
                </span>
              </li>
            </ol>
          </div>

          {/* 7. DATA SAFETY */}
          <div>
            <h2 className="mb-4 text-xl font-bold text-[#16a34a] sm:mb-5 sm:text-2xl md:text-3xl lg:mb-6">
              7. DATA SAFETY
            </h2>
            <p>
              RRIL is committed to ensuring your privacy and security of your
              Personal Data. We have implemented appropriate technical and
              organizational security measures to attempt to safeguard and help
              prevent unauthorized access, maintain Data security and correctly
              use the information we collect online through the Website. However,
              you acknowledge and agree that no security system is entirely
              infallible and we cannot guarantee the absolute security of any Data
              transmitted or provided by you through the Website. As such, RRIL
              shall not be held liable for any unauthorized access, disclosure,
              or breach of security, despite our best efforts to safeguard your
              information.
            </p>
          </div>

          {/* 8. INTELLECTUAL PROPERTY RIGHTS */}
          <div>
            <h2 className="mb-4 text-xl font-bold text-[#16a34a] sm:mb-5 sm:text-2xl md:text-3xl lg:mb-6">
              8. INTELLECTUAL PROPERTY RIGHTS
            </h2>
            <p className="mb-4">
              This Policy does not transfer to you any intellectual property
              rights of RRIL or any third parties. All rights, titles, and
              interests in and to such intellectual property will remain solely
              with RRIL. All trademarks, service marks, graphics, and logos used
              in connection with our Website or services are the trademarks or
              registered trademarks of RRIL. Any other trademarks, service marks,
              graphics, and logos used on our Website may be the property of their
              respective third-party owners.
            </p>
            <p>
              Your use of our Website does not grant you any right or license to
              reproduce, distribute, or otherwise use any of RRIL&apos;s or
              third-party trademarks, without the prior written consent of the
              respective owner.
            </p>
          </div>

          {/* 9. POLICY CHANGES */}
          <div>
            <h2 className="mb-4 text-xl font-bold text-[#16a34a] sm:mb-5 sm:text-2xl md:text-3xl lg:mb-6">
              9. POLICY CHANGES
            </h2>
            <p className="mb-4">
              RRIL reserves the right to change this Policy. In the event of any
              changes, the updated version of the Policy will be posted on our
              group site. We encourage you to review this Policy periodically to
              stay informed about any updates to our privacy practices.
            </p>
            <p className="mb-3">
              Your continued use of the Website after any modifications to this
              Policy shall constitute your:
            </p>
            <ul className="list-none space-y-2">
              <li className="flex gap-3">
                <span className="shrink-0 font-bold text-[#16a34a]">a.</span>
                <span>acknowledgment of the updated Policy; and</span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 font-bold text-[#16a34a]">b.</span>
                <span>
                  agreement to abide by and be bound by the revised terms.
                </span>
              </li>
            </ul>
          </div>

          {/* 10. ACCEPTANCE OF THE POLICY */}
          <div>
            <h2 className="mb-4 text-xl font-bold text-[#16a34a] sm:mb-5 sm:text-2xl md:text-3xl lg:mb-6">
              10. ACCEPTANCE OF THE POLICY
            </h2>
            <p>
              By visiting our Website, signing up, logging into the Website, or
              uploading any information on the Website, you acknowledge and
              unconditionally accept the terms of this Policy. If you do not
              agree with the terms of this Policy, you are advised not to use our
              Website or services, nor to provide any Personal Data through the
              Website.
            </p>
          </div>

          {/* 11. RETENTION OF DATA */}
          <div>
            <h2 className="mb-4 text-xl font-bold text-[#16a34a] sm:mb-5 sm:text-2xl md:text-3xl lg:mb-6">
              11. RETENTION OF DATA
            </h2>
            <p className="mb-4">
              RRIL retains your Data for as long as necessary to provide access to
              and use of the Website, or for other essential purposes, including
              but not limited to complying with legal obligations, resolving
              disputes, and enforcing agreements. Retention periods may vary
              depending on the type of Data and the purpose for which it was
              collected.
            </p>
            <p>
              Even after your Data is deleted, it may persist in backup or
              archival media for purposes such as audit, legal, tax, or regulatory
              compliance.
            </p>
          </div>

          {/* 12. LINKS TO OTHER WEBSITES */}
          <div>
            <h2 className="mb-4 text-xl font-bold text-[#16a34a] sm:mb-5 sm:text-2xl md:text-3xl lg:mb-6">
              12. LINKS TO OTHER WEBSITES
            </h2>
            <p>
              This Website may, from time to time, provide links to other
              websites. We have no control over such websites and are not
              responsible for the content of these websites. This Policy does not
              extend to your use of such websites. You are advised to read the
              privacy policy or statements of other websites prior to using them.
            </p>
          </div>

          {/* 13. GENERAL */}
          <div>
            <h2 className="mb-4 text-xl font-bold text-[#16a34a] sm:mb-5 sm:text-2xl md:text-3xl lg:mb-6">
              13. GENERAL
            </h2>
            <p>
              If any court or competent authority finds that any provision of this
              Policy (or part of any provision) is invalid, illegal or
              unenforceable, that provision or part-provision will, to the extent
              required, be deemed to be deleted, and the validity and
              enforceability of the other provisions of this Policy will not be
              affected.
            </p>
          </div>

          {/* 14. COOKIES AND TRACKING TECHNOLOGIES */}
          <div>
            <h2 className="mb-4 text-xl font-bold text-[#16a34a] sm:mb-5 sm:text-2xl md:text-3xl lg:mb-6">
              14. COOKIES AND TRACKING TECHNOLOGIES
            </h2>
            <p>
              Our Website uses Cookies and similar tracking technologies to
              enhance the user experience, analyze trends, administer the site,
              track users&apos; movements around the site, and gather demographic
              information. You may choose to set your browser to refuse Cookies,
              or to alert you when Cookies are being sent. However, if you disable
              Cookies, some parts of the Website may not function properly.
            </p>
          </div>

          {/* 15. GOVERNING LAW AND JURISDICTION */}
          <div>
            <h2 className="mb-4 text-xl font-bold text-[#16a34a] sm:mb-5 sm:text-2xl md:text-3xl lg:mb-6">
              15. GOVERNING LAW AND JURISDICTION
            </h2>
            <p>
              The Policy shall be governed by the laws of India and the Courts in
              Chennai shall have the exclusive jurisdiction to try any dispute
              arising thereof.
            </p>
          </div>

          {/* 16. QUESTIONS / CONTACT */}
          <div>
            <h2 className="mb-4 text-xl font-bold text-[#16a34a] sm:mb-5 sm:text-2xl md:text-3xl lg:mb-6">
              16. QUESTIONS/ CONTACT INFORMATION
            </h2>
            <p>
              If you have questions or comments regarding this Policy, please
              contact us at:{' '}
              <a href="mailto:cs@refexrenewables.com" className={linkClass}>
                cs@refexrenewables.com
              </a>
            </p>
            <p className="mt-4 text-sm text-gray-600">
              Last update: 01 April 2024
            </p>
          </div>

          {/* Contact card */}
          <div className="rounded-xl border border-green-100 bg-gradient-to-r from-green-50 to-emerald-50 p-5 sm:rounded-2xl sm:p-6 lg:p-8">
            <h2 className="mb-4 text-2xl font-bold text-[#16a34a] sm:mb-5 sm:text-3xl lg:mb-6">
              Contact Us
            </h2>
            <p className="mb-3 leading-relaxed text-gray-700 sm:mb-4">
              If you have questions or comments regarding this Policy, please
              contact us.
            </p>
            <div className="flex items-center gap-3">
              <i className="ri-mail-line shrink-0 text-xl text-[#16a34a] sm:text-2xl" aria-hidden />
              <a
                href="mailto:cs@refexrenewables.com"
                className="break-all text-gray-800 transition-colors hover:text-[#16a34a]"
              >
                cs@refexrenewables.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

ContentSection.displayName = 'ContentSection';

export default ContentSection;
