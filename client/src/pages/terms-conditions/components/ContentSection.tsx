import { memo } from 'react';

const linkClass =
  'text-[#16a34a] underline underline-offset-2 hover:text-[#15803d]';

const ContentSection = memo(() => {
  return (
    <section className="bg-white py-10 sm:py-14 lg:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 font-sans text-sm leading-relaxed text-gray-700 sm:space-y-10 sm:text-base lg:space-y-12">
          {/* Title + intro */}
          <div>
            <h2 className="mb-4 text-2xl font-bold text-[#16a34a] sm:mb-5 sm:text-3xl lg:mb-6">
              TERMS OF USE
            </h2>
            <p>
              These Terms of Use (&quot;Terms&quot;) govern your use of our
              website{' '}
              <a
                href="https://www.refexrenewables.com"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                www.refexrenewables.com
              </a>{' '}
              and any content, features, or services offered by Refex
              Renewables &amp; Infrastructure Limited (&quot;RRIL&quot;) through
              the website (collectively referred to as &quot;Website&quot;). By
              accessing or using the Website, you agree to be bound by these
              Terms. If you do not agree with these Terms, you must not access or
              use our Website.
            </p>
          </div>

          {/* 1 */}
          <div>
            <h2 className="mb-4 text-xl font-bold text-[#16a34a] sm:mb-5 sm:text-2xl md:text-3xl lg:mb-6">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the Website, you acknowledge that you have
              read, understood, and agree to be bound by these Terms, as well as
              our Privacy Policy (available at{' '}
              <a
                href="https://refexrenewables.com/privacy-policy"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                https://refexrenewables.com/privacy-policy
              </a>
              ), which governs how we collect and use your data. If you are using
              the Website on behalf of an organization, you represent and
              warrant that you have the authority to bind that organization to
              these Terms. All capitalized terms herein shall have the same
              meaning ascribed to them in the Privacy Policy.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="mb-4 text-xl font-bold text-[#16a34a] sm:mb-5 sm:text-2xl md:text-3xl lg:mb-6">
              2. Website Access and Use
            </h2>

            <h3 className="mb-3 text-base font-semibold text-gray-900 sm:mb-4 sm:text-lg">
              2.1 Use of the Website
            </h3>
            <p className="mb-3">
              You may use the Website solely for lawful purposes and in
              accordance with these Terms. You agree not to use the Website:
            </p>
            <ul className="mb-8 list-none space-y-3">
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 font-bold text-[#16a34a]">
                  a.
                </span>
                <span>
                  In any way that violates any applicable laws or regulations.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 font-bold text-[#16a34a]">
                  b.
                </span>
                <span>
                  To transmit harmful or illegal content, including but not
                  limited to viruses, malware, or other harmful code.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 font-bold text-[#16a34a]">
                  c.
                </span>
                <span>
                  To attempt to interfere with or disrupt the functionality of the
                  Website.
                </span>
              </li>
            </ul>

            <h3 className="mb-3 text-base font-semibold text-gray-900 sm:mb-4 sm:text-lg">
              2.2 Restrictions on Use
            </h3>
            <p className="mb-3">You shall not:</p>
            <ul className="list-none space-y-3">
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 font-bold text-[#16a34a]">
                  a.
                </span>
                <span>
                  Use the Website for any commercial purpose without explicit
                  permission from RRIL.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 font-bold text-[#16a34a]">
                  b.
                </span>
                <span>
                  Reproduce, duplicate, copy, sell, resell, or exploit any
                  portion of the Website without prior written permission from
                  RRIL.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 font-bold text-[#16a34a]">
                  c.
                </span>
                <span>
                  Engage in any activity that could damage, disable, or impair
                  the Website or interfere with other users&apos; enjoyment of
                  the Website.
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-bold text-[#16a34a] sm:mb-5 sm:text-2xl md:text-3xl lg:mb-6">
              Accuracy of information
            </h2>
            <p>
              Occasionally there may be information on the Website that
              contains typographical errors, inaccuracies or omissions that may
              relate to promotions and offers. We reserve the right to correct any
              errors, inaccuracies or omissions, and to change or update
              information or cancel orders if any information on the Website is
              inaccurate at any time without prior notice (including after you
              have submitted your order) to you. We undertake no obligation to
              update, amend or clarify information on the Website including,
              without limitation, pricing information, except as required by
              law. No specified update or fresh date applied on the Website
              should be taken to indicate that all information on the Website
              has been modified or updated.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-bold text-[#16a34a] sm:mb-5 sm:text-2xl md:text-3xl lg:mb-6">
              Links to other websites
            </h2>
            <p>
              Although this Website may be linked to other websites, we are not,
              directly or indirectly, implying any approval, association,
              sponsorship, endorsement, or affiliation with any linked website,
              unless specifically stated herein. We are not responsible for
              examining or evaluating, and we do not warrant the offerings of,
              any businesses or individuals or the content of their websites. We
              do not assume any responsibility or liability for the actions,
              products, services and content of any other third parties. You
              should carefully review the legal statements and other conditions
              of use of any website which you access through a link from our
              Website. Your linking to any other off-site websites is at your own
              risk.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-bold text-[#16a34a] sm:mb-5 sm:text-2xl md:text-3xl lg:mb-6">
              Prohibited uses
            </h2>
            <p className="mb-3">
              In addition to this Terms, you are prohibited from using our
              Website or its content for the following purposes:
            </p>
            <ul className="list-none space-y-3">
              {[
                'for any unlawful purpose;',
                'to solicit others to perform or participate in any unlawful acts;',
                'to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances;',
                'to infringe upon or violate our intellectual property rights or the intellectual property rights of others;',
                'to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability;',
                'to submit false or misleading information;',
                'to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Website or of any related website, other websites, or the Internet;',
                'to collect or track the personal information of others;',
                'to spam, phish, pharm, pretext, spider, crawl, or scrape;',
                'for any obscene or immoral purpose; or',
                'to interfere with or circumvent the security features of the Website or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Website or any related website for violating any of the prohibited uses.',
              ].map((text, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-0.5 shrink-0 font-bold text-[#16a34a]">
                    {String.fromCharCode(97 + i)}.
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-bold text-[#16a34a] sm:mb-5 sm:text-2xl md:text-3xl lg:mb-6">
              Intellectual property rights
            </h2>
            <p className="mb-4">
              The Website and its contents are owned by RRIL and are protected by
              intellectual property laws. This includes all trademarks, service
              marks, graphics, logos, and other proprietary content. This section
              does not transfer any intellectual property rights from RRIL to
              you, and all rights, titles, and interests in such intellectual
              property will remain solely with RRIL.
            </p>
            <p>
              All trademarks, service marks, graphics, and logos used in
              connection with our Website are trademarks or registered trademarks
              of RRIL. Other trademarks, service marks, graphics, and logos used
              on the Website may be trademarks of third parties. Your use of the
              Website grants you no right or license to reproduce, distribute, or
              otherwise use any of RRIL&apos;s or third-party trademarks without
              explicit permission.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-bold text-[#16a34a] sm:mb-5 sm:text-2xl md:text-3xl lg:mb-6">
              Disclaimer of warranty
            </h2>
            <p className="mb-4">
              Your use of the Website is solely at your own risk. The Website is
              provided on an &quot;as is&quot; and &quot;as available&quot; basis.
              RRIL expressly disclaims all warranties of any kind, whether
              express or implied, including but not limited to the implied
              warranties of merchantability, fitness for a particular purpose,
              and non-infringement.
            </p>
            <p className="mb-4">
              We make no warranty that the Website will meet your requirements,
              or that it will be uninterrupted, timely, secure, or error-free;
              nor do we make any warranty regarding the results that may be
              obtained from using the Website, the accuracy or reliability of any
              information obtained through the Website, or that defects will be
              corrected.
            </p>
            <p className="mb-4">
              You understand and agree that any material and/or data downloaded
              or otherwise obtained through the use of the Website is done at
              your own discretion and risk, and that you will be solely
              responsible for any damage to your computer system or loss of data
              resulting from downloading such material and/or data.
            </p>
            <p className="mb-4">
              We make no warranty regarding any goods or services purchased or
              obtained through the Website or any transactions entered into
              through the Website. No advice or information, whether oral or
              written, obtained by you from us or through the Website shall create
              any warranty not expressly made herein.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-bold text-[#16a34a] sm:mb-5 sm:text-2xl md:text-3xl lg:mb-6">
              Limitation of liability
            </h2>
            <p>
              To the fullest extent permitted by applicable law, in no event will
              RRIL, its affiliates, officers, directors, employees, agents,
              suppliers or licensors be liable to any person for (a): any indirect,
              incidental, special, punitive, cover or consequential damages
              (including, without limitation, damages for lost profits, revenue,
              sales, goodwill, use or content, impact on business, business
              interruption, loss of anticipated savings, loss of business
              opportunity) however caused, under any theory of liability,
              including, without limitation, contract, tort, warranty, breach of
              statutory duty, negligence or otherwise, even if RRIL has been
              advised as to the possibility of such damages or could have
              foreseen such damages.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-bold text-[#16a34a] sm:mb-5 sm:text-2xl md:text-3xl lg:mb-6">
              Indemnification
            </h2>
            <p>
              You agree to indemnify and hold RRIL and its affiliates,
              directors, officers, employees, and agents harmless from and
              against any liabilities, losses, damages or costs, including
              reasonable attorneys&apos; fees, incurred in connection with or
              arising from any third-party allegations, claims, actions,
              disputes, or demands asserted against any of them as a result of or
              relating to your content, your use of our Website or any willful
              misconduct on your part.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-bold text-[#16a34a] sm:mb-5 sm:text-2xl md:text-3xl lg:mb-6">
              Severability
            </h2>
            <p>
              All rights and restrictions contained in this Terms may be
              exercised and shall be applicable and binding only to the extent
              that they do not violate any applicable laws and are intended to be
              limited to the extent necessary so that they will not render this
              Terms illegal, invalid or unenforceable. If any provision or
              portion of any provision of this Terms shall be held to be illegal,
              invalid or unenforceable by a court of competent jurisdiction, it
              is the intention of the parties that the remaining provisions or
              portions thereof shall constitute their agreement with respect to
              the subject matter hereof, and all such remaining provisions or
              portions thereof shall remain in full force and effect.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-bold text-[#16a34a] sm:mb-5 sm:text-2xl md:text-3xl lg:mb-6">
              Dispute resolution
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of India. The courts in Chennai shall have exclusive
              jurisdiction to resolve any disputes arising from or relating to
              these Terms.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-bold text-[#16a34a] sm:mb-5 sm:text-2xl md:text-3xl lg:mb-6">
              Changes and amendments
            </h2>
            <p>
              We reserve the right to modify this Terms and the Privacy Policy
              Terms relating to our Website at any time, effective upon posting of
              an updated version of this Terms on the Website. When this happens,
              we will post a notification on the main page of our Website.
              Continued use of the Website after any such changes shall constitute
              your consent to such changes.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-bold text-[#16a34a] sm:mb-5 sm:text-2xl md:text-3xl lg:mb-6">
              Acceptance of these terms
            </h2>
            <p>
              By using our Website, you acknowledge that you have read,
              understood, and agree to all the terms and conditions outlined. If
              you do not agree to abide by these terms, you are not authorized to
              use or access the Website.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-bold text-[#16a34a] sm:mb-5 sm:text-2xl md:text-3xl lg:mb-6">
              Contacting Us
            </h2>
            <p>
              If you have any questions about this Terms, please contact us at{' '}
              <a
                href="mailto:cs@refexrenewables.com"
                className={linkClass}
              >
                cs@refexrenewables.com
              </a>
              .
            </p>
            <p className="mt-4 text-xs text-gray-600 sm:mt-6 sm:text-sm">
              This document was last updated on 02 April, 2026.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

ContentSection.displayName = 'ContentSection';

export default ContentSection;
