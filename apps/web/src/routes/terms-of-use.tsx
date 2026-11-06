import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@pmi-south-asia/ui/components/breadcrumb";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms-of-use")({
  component: RouteComponent,
});

const linkClass = "underline underline-offset-2 hover:opacity-70";

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3" id={id}>
      <p className="font-aeonik font-bold text-pmi-text-primary">{title}</p>
      {children}
    </div>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-aeonik text-pmi-text-primary leading-7">{children}</p>
  );
}

function RouteComponent() {
  return (
    <main className="overflow-x-hidden" id="main-layout">
      {/* Hero */}
      <div className="w-full bg-pmi-surface-secondary">
        <div className="mx-auto max-w-screen-xl px-6 pt-6 lg:px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink render={<Link to="/" />}>Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Terms of Use</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="mx-auto max-w-screen-xl px-6 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:px-4">
          <h1 className="mb-6 font-aeonik font-bold text-header-md text-pmi-text-primary sm:text-header-xl">
            Terms of Use
          </h1>
        </div>
      </div>

      {/* Content card */}
      <div
        className="relative w-full overflow-hidden bg-pmi-surface-primary"
        style={{
          borderRadius: "var(--pmi-rounded-md) var(--pmi-rounded-md) 0 0",
          marginTop: "calc(-1 * var(--pmi-rounded-md))",
        }}
      >
        <div className="mx-auto max-w-screen-xl px-6 py-6 lg:px-4 lg:py-10">
          <div className="space-y-8">
            <Section id="section-1" title="1. SCOPE OF AGREEMENT">
              <P>
                This Terms of Use Agreement ("Agreement") by and between the
                Project Management Institute ("we", "us", "our" or "PMI") and
                you ("you", "your" or "User") governs your use of the{" "}
                <a
                  className={linkClass}
                  href="/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  PMI SA
                </a>{" "}
                web site ("Site") and/or Mobile App together with all
                information, content, products, materials and services made
                available to you through the same (collectively the "Services").
                By using or otherwise accessing the Services, you agree to be
                bound by and comply with the terms and conditions of this
                Agreement. If you do not agree to this Agreement, do not access
                or use the Services in any manner.
              </P>
              <P>
                These terms and conditions, together with our{" "}
                <Link className={linkClass} to="/privacy">
                  Privacy Policy
                </Link>
                , constitute the entire agreement between you and us,
                superseding any and all prior or inconsistent understandings or
                agreements regarding the Services.
              </P>
              <P>
                PMI reserves the right to modify the terms of this Agreement at
                any time and will post a notice of such changes. The changes
                become effective immediately upon posting. Your use of the
                Services after that date shall constitute your acceptance of
                such changes.
              </P>
            </Section>

            <Section id="section-2" title="2. DEFINITIONS">
              <div className="space-y-2 font-aeonik text-pmi-text-primary leading-7">
                <P>
                  <strong>2.1</strong> "Collaborative Content" refers to User
                  Content posted on the Interactive Services sections for the
                  purposes of collaboration with other Users.
                </P>
                <P>
                  <strong>2.2</strong> "Interactive Services" refers to message
                  boards, chat boards, blogs, virtual communities, and other
                  interactive media made available by PMI via the Site and/or
                  Mobile App.
                </P>
                <P>
                  <strong>2.3</strong> "PMI Intellectual Property" refers to all
                  text, graphics, images, trademarks, logos, programs, software
                  and other data, content, information and materials, and all
                  intellectual property rights therein, owned by PMI or licensed
                  to PMI by third parties.
                </P>
                <P>
                  <strong>2.4</strong> "PMI Trademark(s)" refers to all
                  trademarks and service marks owned by PMI, as defined by 15
                  U.S.C. § 1127.
                </P>
                <P>
                  <strong>2.5</strong> "PMI" refers to PROJECT MANAGEMENT
                  INSTITUTE, INC.
                </P>
                <P>
                  <strong>2.6</strong> "PMI Content" refers to copyrighted
                  content owned by PMI or other copyrighted content owned by
                  third-party partners of PMI.
                </P>
                <P>
                  <strong>2.7</strong> "Services" refers to all information,
                  content, products, materials and services made available to
                  you by PMI and/or affiliated third parties via the Site and
                  Mobile App.
                </P>
                <P>
                  <strong>2.8</strong> "Site" refers to the website{" "}
                  <a
                    className={linkClass}
                    href="/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    PMI SA
                  </a>
                  , owned and operated by Project Management Institute, Inc.
                </P>
                <P>
                  <strong>2.9</strong> "User Content" refers to all information,
                  data, text, software, music, sound, photographs, graphics,
                  video, messages, tags, or other materials posted on the
                  Interactive Services sections of the Site or Mobile App by
                  Users.
                </P>
                <P>
                  <strong>2.10</strong> "You", "your" and/or "user" refer to any
                  individuals and/or entities accessing the Site for any reason.
                </P>
                <P>
                  <strong>2.11</strong> "Mobile App" refers to the application
                  owned and operated by Project Management Institute, Inc.
                </P>
              </div>
            </Section>

            <Section
              id="section-3"
              title="3. OWNERSHIP AND USE OF PMI INTELLECTUAL PROPERTY"
            >
              <P>
                <strong>3.1 Ownership and Use.</strong> PMI Intellectual
                Property is owned by PMI or licensed to us by our third-party
                partners. You have no rights in or to such PMI Intellectual
                Property and you agree you will not copy, retransmit, reproduce,
                publish, create derivative works based upon or otherwise
                transmit any PMI Intellectual Property, except as specifically
                permitted under this Agreement.
              </P>
              <P>
                <strong>3.2 PMI Content.</strong> Unless otherwise specifically
                set forth on the Site and/or Mobile App, or we give you written
                permission, you may only access and download PMI Content for
                your personal use. You may not do or allow anyone else to do
                anything with the PMI Content which is not specifically
                permitted under this Agreement. All rights not expressly granted
                in this Agreement are reserved to PMI.
              </P>
              <P>
                <strong>3.3 Permission to Use PMI Content.</strong> You may
                request permission to reproduce PMI Content via the{" "}
                <Link className={linkClass} to="/permissions">
                  Permissions
                </Link>{" "}
                section of the Site. We reserve the sole discretion to determine
                whether, and upon what terms, PMI Content will be licensed.
              </P>
              <P>
                <strong>3.4 Trademarks.</strong> The PMI Trademarks appearing on
                this site and/or Mobile App may not be used in any advertising
                or publicity without PMI's prior express written permission. You
                agree to be bound by and to follow the terms of{" "}
                <span
                  className={linkClass}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  PMI's Trademark Usage Guidelines
                </span>
                .
              </P>
            </Section>

            <Section id="section-4" title="4. LINKS">
              <P>
                <strong>4.1 Links to Third Party Sites.</strong> As a courtesy
                to Users, we may provide links to other websites owned and
                operated by third parties. Because we have no control over such
                sites, you acknowledge and agree that we are not responsible for
                the availability of such external sites or resources, and do not
                endorse and are not responsible for any content, advertising,
                products or services made available via such sites.
              </P>
              <P>
                <strong>4.2 Linking to PMI.</strong> You may obtain permission
                to link to the Site by agreeing to adhere to the terms of the{" "}
                <Link className={linkClass} to="/linking">
                  Linking Agreement
                </Link>
                .
              </P>
            </Section>

            <Section
              id="section-5"
              title='5. MESSAGE BOARDS, CHAT BOARDS, BLOGS, VIRTUAL COMMUNITIES AND OTHER INTERACTIVE MEDIA ("INTERACTIVE SERVICES")'
            >
              <P>
                <strong>5.1</strong> If you participate in or use any
                Interactive Services, you are responsible for User Content you
                upload, post, link to or otherwise transmit and the consequences
                thereof. You agree that you own or have a license to post the
                User Content and do so solely for lawful purposes and in
                compliance with all applicable laws. We expressly have no
                responsibility for or control over the User Content you may
                transmit using these Interactive Services.
              </P>
              <P>
                Although we do not actively monitor your use of the Services, we
                reserve the unconditional right (but not the obligation) to
                remove, move or edit any User Content we consider in our sole
                discretion to be harmful, offensive, disruptive, or in violation
                of law or this Agreement.
              </P>
              <P>Additionally, you agree to:</P>
              <ul className="list-disc space-y-2 pl-6 font-aeonik text-pmi-text-primary leading-7">
                <li>
                  not post, email, upload, transmit or otherwise make available
                  any content that is unlawful, harmful, threatening, abusive,
                  harassing, defamatory, vulgar, obscene, libelous, invasive of
                  another's privacy, hateful, or racially, ethnically or
                  otherwise objectionable;
                </li>
                <li>not impersonate any person or entity;</li>
                <li>not post any content that harms minors in any way;</li>
                <li>
                  not forge headers or otherwise manipulate identifiers in order
                  to disguise the origin of any User Content;
                </li>
                <li>
                  not post any content that you do not have a right to make
                  available under any law or under contractual or fiduciary
                  relationships;
                </li>
                <li>
                  not post any content that infringes the intellectual property
                  rights of any party;
                </li>
                <li>
                  not post any unsolicited or unauthorized advertising,
                  promotional materials, "junk mail," "spam," "chain letters,"
                  or "pyramid schemes";
                </li>
                <li>
                  not post any material that contains software viruses or any
                  other computer code designed to interrupt, destroy or limit
                  the functionality of any computer software or hardware;
                </li>
                <li>
                  not interfere with or disrupt the Site, Mobile App or servers
                  or networks connected to the Site and/or Mobile App;
                </li>
                <li>
                  not intentionally or unintentionally violate any applicable
                  local, state, national or international law;
                </li>
                <li>not "stalk" or otherwise harass any person;</li>
                <li>not collect or store personal data about other users;</li>
                <li>
                  not advertise or solicit anyone to buy or sell products or to
                  make donations of any kind absent prior written approval from
                  PMI;
                </li>
                <li>
                  not make negative or disparaging references to PMI, its
                  services or its members or otherwise compare PMI unfavorably
                  to others.
                </li>
              </ul>
              <P>
                <strong>5.2 License to PMI.</strong> You hereby grant to PMI a
                non-exclusive, worldwide, royalty-free, irrevocable perpetual
                license (with right to sublicense) to reproduce, distribute,
                transmit, create derivative works of, publicly display and
                publicly perform any User Content you submit via the Interactive
                Services, solely for the purposes for which such User Content
                was submitted. You retain ownership of User Content you submit.
              </P>
              <P>
                <strong>5.3 Use of Content Posted by Other Users.</strong>{" "}
                Copyright in User Content posted shall remain with the User or
                third party who has posted or consented to posting the User
                Content on the Site and/or Mobile App. You have no rights in or
                to such User Content posted by other Users and agree you will
                not copy, reproduce, publish, create derivative works based upon
                or otherwise retransmit any User Content without the express
                written permission of the owner.
              </P>
              <P>
                Collaborative Content posted by Users for the purposes of
                collaboration may be modified, reproduced, distributed,
                transmitted or otherwise used by other Users and shall be
                considered in the public domain and freely available to be used,
                distributed or modified.
              </P>
            </Section>

            <Section
              id="section-6"
              title="6. COPYRIGHT COMPLIANCE AND COMPLAINTS"
            >
              <P>
                <strong>6.1</strong> PMI respects the intellectual property
                rights of others and may, under appropriate circumstances,
                disable and/or terminate access for users who are infringing the
                intellectual property rights of others. You agree to abide by
                the terms of the Digital Millennium Copyright Act (DMCA) and
                refrain from: (a) circumventing PMI's access control measures to
                copyrighted works; (b) posting circumvention technology; (c)
                posting links to online locations containing circumvention
                technology; or (d) engaging in other activities in violation of
                the DMCA.
              </P>
              <P>
                <strong>6.2</strong> A copyright owner who believes his/her work
                has been used on the Site and/or Mobile App in a manner that
                constitutes copyright infringement must notify PMI's designated
                agent by written notice including: (a) the owner's name,
                address, telephone number, email address, and an electronic or
                physical signature; (b) a description and copy of the work
                allegedly being infringed; (c) identification of the location of
                the infringing material; (d) a good faith belief statement; and
                (e) a statement under penalty of perjury that the information is
                accurate. Upon receiving proper notification, PMI will remove
                the allegedly infringed material.
              </P>
              <P>
                <strong>6.3</strong> PMI's copyright agent for notices of claims
                of copyright infringement is Clifford Weber, Esq., Intellectual
                Property Attorney, reachable at{" "}
                <a className={linkClass} href="mailto:dmca@pmi.org">
                  dmca@pmi.org
                </a>
                .
              </P>
            </Section>

            <Section id="section-7" title="7. COMPLIANCE WITH THE CAN-SPAM ACT">
              <P>
                <strong>7.1</strong> The User agrees to abide by the CAN-SPAM
                Act (15 U.S.C. §§7701-13) when utilizing the Site and/or Mobile
                App. The User may not use the Site and/or Mobile App to bombard
                individuals with uninvited commercial email or engage in other
                activities in violation of the CAN-SPAM Act.
              </P>
              <P>
                <strong>7.2</strong> PMI will not be liable for any damages
                resulting from users' failure to adhere to the CAN-SPAM Act. The
                User agrees to indemnify, defend, and hold harmless PMI, its
                affiliates, officers, directors, employees, consultants, and
                agents from any and all third party claims, liability, damages,
                and/or costs arising from the User's violation of the CAN-SPAM
                Act or any other applicable laws.
              </P>
            </Section>

            <Section
              id="section-8"
              title="8. REGISTERED USERS ACCOUNT, PASSWORD AND SECURITY"
            >
              <P>
                <strong>8.1</strong> In consideration of your use of the Site
                and/or Mobile App, you represent and warrant that you are of
                legal age to form a binding contract and are not a person barred
                from receiving services under the laws of the United States or
                other applicable jurisdiction. You also agree to provide true,
                accurate, current and complete information about yourself as
                prompted by the relevant portions of the Site and/or Mobile App
                and to maintain and promptly update such information.
              </P>
              <P>
                <strong>8.2</strong> You are solely responsible for maintaining
                the strict confidentiality of your User IDs and passwords and
                for any charges, damages, liabilities or losses incurred or
                suffered as a result of your failure to do so. You agree to
                immediately notify us if you become aware of any unauthorized
                use of your User IDs/passwords or other need to deactivate a
                User ID/password.
              </P>
            </Section>

            <Section
              id="section-9"
              title="9. PMI STORE (PMI MARKETPLACE) PURCHASES"
            >
              <P>
                The terms and conditions governing purchases made via the{" "}
                <a
                  className={linkClass}
                  href="/store"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  PMI Store (PMI Marketplace)
                </a>{" "}
                are set forth therein.
              </P>
            </Section>

            <Section id="section-10" title="10. DISCLAIMER OF WARRANTIES">
              <P>
                EXCEPT AS EXPRESSLY SET FORTH HEREIN, THE CONTENT ON THE SITE
                AND MOBILE APP IS PROVIDED "AS IS", WITHOUT WARRANTIES OF ANY
                KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO,
                WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
                PURPOSE. UNDER NO CIRCUMSTANCES WILL PMI BE LIABLE IN ANY WAY
                FOR ANY CONTENT, INCLUDING ANY ERRORS OR OMISSIONS IN ANY
                CONTENT, OR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT
                OF THE USE OF ANY CONTENT POSTED, E-MAILED, TRANSMITTED OR
                OTHERWISE MADE AVAILABLE VIA THE INTERACTIVE SERVICES. SOME
                JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES.
                ACCORDINGLY, SOME OF THE ABOVE EXCLUSIONS MAY NOT APPLY TO YOU.
              </P>
            </Section>

            <Section
              id="section-11"
              title="11. LIMITATION OF LIABILITY AND RELEASE"
            >
              <P>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, NEITHER PMI,
                ITS LICENSORS, SUPPLIERS, PARTNERS, AFFILIATES OR THIRD-PARTY
                SERVICE PROVIDERS SHALL BE LIABLE TO YOU OR ANY THIRD PARTY FOR
                ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE
                OR CONSEQUENTIAL DAMAGES IN ANY MANNER ARISING OUT OF OR IN
                CONNECTION WITH THIS AGREEMENT OR YOUR USE OF THE SITE AND/OR
                MOBILE APP AND SERVICES. SOME JURISDICTIONS DO NOT ALLOW THE
                LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR
                CONSEQUENTIAL DAMAGES. ACCORDINGLY, SOME OF THE ABOVE
                LIMITATIONS AND EXCLUSIONS MAY NOT APPLY TO YOU.
              </P>
              <P>
                IN THE EVENT YOU HAVE ANY DISPUTE WITH ONE OR MORE THIRD PARTIES
                AS A RESULT OF YOUR USE OF THE SITE, MOBILE APP OR SERVICES, YOU
                HEREBY RELEASE AND COVENANT NOT TO SUE OR OTHERWISE MAKE A
                CLAIM, DEMAND OR FILE ANY LEGAL ACTION AGAINST US, OUR
                AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS,
                REPRESENTATIVES AND SUPPLIERS FOR ANY CLAIMS, ACTIONS, DEMANDS
                OR DAMAGES OF WHATEVER KIND OR NATURE, KNOWN OR UNKNOWN,
                SUSPECTED OR UNSUSPECTED.
              </P>
            </Section>

            <Section id="section-12" title="12. INDEMNITY">
              <P>
                You agree to defend, indemnify and hold us harmless against any
                losses, expenses, costs or damages (including our reasonable
                attorneys' fees) arising from, incurred as a result of, or in
                any manner related to any claim or action based upon (a) your
                breach of the terms and conditions of this Agreement, (b) your
                use of the Services, and/or (c) the use of the Services by any
                other person using your IDs.
              </P>
            </Section>

            <Section
              id="section-13"
              title="13. RIGHT TO TERMINATE AND/OR TO BLOCK ACCESS"
            >
              <P>
                PMI reserves the right to terminate, block or restrict your
                access to or use of the Site and/or Mobile App for any breach or
                violation of any term of this Agreement. We may terminate this
                Agreement, restrict, suspend or terminate your access
                immediately and without notice or liability, with or without
                cause.
              </P>
            </Section>

            <Section
              id="section-14"
              title="14. GOVERNING LAW/JURISDICTION/DISPUTES"
            >
              <P>
                <strong>14.1</strong> This Agreement shall be governed in
                accordance with the laws of the Commonwealth of Pennsylvania.
                Additionally, the UN Convention on Contracts for the
                International Sales of Goods and the Uniform Computer
                Information Transactions Act (UCITA) will not apply to this
                Agreement.
              </P>
              <P>
                <strong>14.2</strong> All disputes under this Agreement shall be
                resolved by litigation in the federal or state courts of the
                Commonwealth of Pennsylvania, and the Parties all consent to the
                jurisdiction of such courts.
              </P>
            </Section>

            <Section id="section-15" title="15. ASSIGNABILITY">
              <P>
                This Agreement is personal to you, and you may not assign this
                Agreement or the rights and obligations hereunder to any third
                party without the prior express written approval of PMI.
              </P>
            </Section>

            <Section id="section-16" title="16. WAIVER">
              <P>
                No waiver by either party of any default shall be deemed as a
                waiver of prior or subsequent default of the same or other
                provisions of this Agreement.
              </P>
            </Section>

            <Section id="section-17" title="17. SEVERABILITY">
              <P>
                If any term, clause or provision hereof is held invalid or
                unenforceable by a court of competent jurisdiction, such
                invalidity shall not affect the validity or operation of any
                other term, clause or provision and such invalid term, clause or
                provision shall be deemed to be severed from the Agreement.
              </P>
            </Section>

            <Section id="section-18" title="18. SURVIVAL OF TERMS">
              <P>
                Any provision of this Agreement which by its nature must survive
                the termination of this Agreement shall survive such
                termination, including but not limited to the ownership,
                intellectual property rights and licensing provisions set forth
                in this Agreement.
              </P>
            </Section>

            <Section id="section-19" title="19. LIMITATION ON ACTIONS">
              <P>
                You agree that any claim or cause of action arising out of or
                related to the use of the Site, Mobile App or Services, or
                otherwise relating to this Agreement, must be filed within one
                (1) year after the claim or cause of action arose, or will be
                forever barred.
              </P>
            </Section>

            <Section id="section-20" title="20. ENTIRE AGREEMENT">
              <P>
                This Agreement constitutes the entire understanding of the
                Parties and revokes and supersedes all prior agreements between
                the Parties and is intended as a final expression of their
                agreement. It shall not be modified or amended except in writing
                signed by the Parties hereto and specifically referring to this
                Agreement.
              </P>
            </Section>
          </div>
        </div>
      </div>
    </main>
  );
}
