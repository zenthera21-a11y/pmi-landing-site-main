import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@pmi-south-asia/ui/components/breadcrumb";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  component: RouteComponent,
});

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
                <BreadcrumbPage>Privacy Notice</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="mx-auto max-w-screen-xl px-6 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:px-4">
          <h1 className="mb-6 font-aeonik font-bold text-header-md text-pmi-text-primary sm:text-header-xl">
            Privacy
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
          <div className="space-y-5 font-aeonik text-pmi-text-primary">
            {/* Lead */}
            <p className="text-lg leading-7">
              You should choose whether to agree to the contents of this Privacy
              Policy and to the use of PMI services after carefully reading and
              fully understanding this Privacy Policy. If you do not agree to
              the content of this Privacy Policy, we may not be able to provide
              you with the appropriate functions and we recommend that you
              immediately stop accessing and using PMI services.
            </p>

            <p className="leading-7">
              Project Management Institute ("<strong>PMI</strong>"), the world's
              leading project management professional association, and its
              subsidiaries around the world, including but not limited to PMI
              (Beijing) Project Management Technology Co., Ltd. ("
              <strong>PMI China</strong>", collectively with PMI US, "
              <strong>PMI</strong>," "we," "our," or "us"), strive to provide
              our customers, and other users of our US website{" "}
              <a
                className="underline underline-offset-2 hover:opacity-70"
                href="/"
              >
                PMI SA
              </a>{" "}
              ("<strong>US Site</strong>"), Mobile App and our China website{" "}
              <span className="underline underline-offset-2 hover:opacity-70">
                www.pmichina.org
              </span>{" "}
              ("<strong>China Site</strong>", together with the US Site and
              Mobile App "<strong>Sites</strong>") with the best products and
              services available and recognize that building a long-term
              business relationship with you depends a great deal on trust. We
              provide this Privacy Policy to describe how we collect, use,
              store, share, and otherwise process your personal information in
              relation to our Sites, products, services, events, and experiences
              that reference this Privacy Policy (together, the "
              <strong>Offerings</strong>").
            </p>

            {/* Section: How we collect */}
            <h2 className="pt-2 font-bold text-xl">
              How we collect and use your personal information
            </h2>

            <h3 className="font-semibold text-lg">
              What Information We Collect
            </h3>

            <p className="leading-7">
              We collect your personal information in the course of providing
              the Offerings to you.
            </p>
            <p className="leading-7">
              When you use PMI's products/services, in order to provide you with
              the functionality of our Offerings, you need to authorize us to
              collect and use the necessary personal information. If you refuse
              to provide such necessary personal information, you will not be
              able to use our products/services properly.
            </p>
            <p className="leading-7">
              In some cases, we may collect and use your personal information
              from third parties (e.g., our service providers, partners) that
              legally retain your personal information within the scope of your
              consent. We process your personal information in accordance with
              the contract with the third party, this Privacy Policy and the
              relevant laws and regulations.
            </p>
            <p className="leading-7">
              In other cases, we may also collect information by automated
              means. For example, we may use technologies such as browser
              cookies and other similar technologies on our website and in the
              communication we send to you.
            </p>

            {/* Table 1 */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-[#262626] bg-[#bfbfbf] px-3 py-2 text-left text-[#3f3f3f]">
                      Personal Information Processed
                    </th>
                    <th className="border border-[#262626] bg-[#bfbfbf] px-3 py-2 text-left text-[#3f3f3f]">
                      Scenario and Purpose
                    </th>
                    <th className="border border-[#262626] bg-[#bfbfbf] px-3 py-2 text-left text-[#3f3f3f]">
                      Necessity to Process and Consequence of Refusal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      className="border border-[#262626] bg-[#d8d8d8] px-3 py-2 font-semibold text-[#3f3f3f]"
                      colSpan={3}
                    >
                      Collected by PMI US
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#262626] bg-white px-3 py-2 align-top text-sm leading-6">
                      <p>Name</p>
                      <p>Primary Country</p>
                      <p>Email</p>
                      <p>Username</p>
                      <p>Password</p>
                      <p>Security Questions</p>
                      <p>Country of Citizenship</p>
                      <p>Passport / Driver's License Number</p>
                      <p>Photo</p>
                      <p>Education (Academic &amp; Professional)</p>
                      <p>Project Experience</p>
                      <p>Examination details</p>
                      <p>Payment (Name, card number, type, expiry, CVV)</p>
                    </td>
                    <td className="border border-[#262626] bg-white px-3 py-2 align-top leading-7">
                      To register candidates for exams as well complete
                      settlement and payment of online training and certificate
                      renewal.
                      <br />
                      <br />
                      PMI does not store the payment information.
                    </td>
                    <td className="border border-[#262626] bg-white px-3 py-2 align-top leading-7">
                      The information is necessary to provide basic functions
                      and to fulfill the transaction between you and PMI.
                      <br />
                      <br />
                      Failure to complete settlement and payment will result in
                      inability to register for and take exams.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#262626] bg-white px-3 py-2 align-top text-sm leading-6">
                      <p>Name</p>
                      <p>PMI ID</p>
                      <p>PMP No</p>
                      <p>PDU status</p>
                      <p>Certification status</p>
                      <p>Mobile phone number</p>
                      <p>Address</p>
                      <p>Telephone number</p>
                      <p>Email</p>
                      <p>Address for PMI certification in China</p>
                    </td>
                    <td className="border border-[#262626] bg-white px-3 py-2 align-top leading-7">
                      To check the PMI certification number of website user to
                      verify whether they are the credential holders or not.
                    </td>
                    <td className="border border-[#262626] bg-white px-3 py-2 align-top leading-7">
                      Unable to be verified as PMI credential holder on PMI
                      China website to enjoy related service in PMI China
                      website.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#262626] bg-white px-3 py-2 align-top text-sm leading-6">
                      <p>Name, PMI ID, PMP No, PDU status</p>
                      <p>Certification status</p>
                      <p>Mobile phone number</p>
                      <p>Address, Contact telephone number</p>
                      <p>
                        Email address for PMI certification in China whose cycle
                        ended in the latest year
                      </p>
                    </td>
                    <td className="border border-[#262626] bg-white px-3 py-2 align-top leading-7">
                      To provide reminder for certification renewal notice via
                      email, phone call, cellphone text message and to provide
                      professional development unit event information.
                    </td>
                    <td className="border border-[#262626] bg-white px-3 py-2 align-top leading-7">
                      Unable to get reminder for certification renewal notice or
                      PDU event information.
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="border border-[#262626] bg-[#d8d8d8] px-3 py-2 font-semibold text-[#3f3f3f]"
                      colSpan={3}
                    >
                      Collected by PMI China
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#262626] bg-white px-3 py-2 align-top text-sm leading-6">
                      <p>Email</p>
                      <p>Cellphone number</p>
                      <p>Username</p>
                    </td>
                    <td className="border border-[#262626] bg-white px-3 py-2 align-top leading-7">
                      China website user registration / password retrieval.
                    </td>
                    <td className="border border-[#262626] bg-white px-3 py-2 align-top leading-7">
                      Refusal to provide will result in inability to register as
                      a PMI China website registered user.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#262626] bg-white px-3 py-2 align-top leading-7">
                      PMI Certificate No.
                    </td>
                    <td className="border border-[#262626] bg-white px-3 py-2 align-top leading-7">
                      Users of the Chinese website will be upgraded to
                      "certified users" after completing their certification
                      information and get it verified.
                    </td>
                    <td className="border border-[#262626] bg-white px-3 py-2 align-top leading-7">
                      Unable to be upgraded to a certified user.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#262626] bg-white px-3 py-2 align-top text-sm leading-6">
                      <p>Name, Birthday, Gender</p>
                      <p>Province/City</p>
                      <p>Self-introduction</p>
                      <p>Workplace, Industry, Position</p>
                      <p>Functional area</p>
                      <p>Academic Qualifications</p>
                      <p>Personal Expertise</p>
                      <p>Foreign Language Level</p>
                      <p>Volunteer Experience</p>
                    </td>
                    <td className="border border-[#262626] bg-white px-3 py-2 align-top leading-7">
                      Users of the Chinese website fill in such details to apply
                      as volunteers.
                    </td>
                    <td className="border border-[#262626] bg-white px-3 py-2 align-top leading-7">
                      Unable to submit volunteer applications.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#262626] bg-white px-3 py-2 align-top text-sm leading-6">
                      <p>Name, PMI ID</p>
                      <p>Industry, Position</p>
                      <p>Mobile Phone Number</p>
                      <p>Email, Workplace</p>
                    </td>
                    <td className="border border-[#262626] bg-white px-3 py-2 align-top leading-7">
                      Users of the Chinese website need to provide such
                      information to sign up for PMI offline events.
                    </td>
                    <td className="border border-[#262626] bg-white px-3 py-2 align-top leading-7">
                      Unable to sign up for PMI offline events via official PMI
                      website.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#262626] bg-white px-3 py-2 align-top text-sm leading-6">
                      <p>R.E.P related information:</p>
                      <p>Username, Name of Contact Person</p>
                      <p>Email, Cell Phone</p>
                      <p>R.E.P. Name, Code, Type, Certificate</p>
                    </td>
                    <td className="border border-[#262626] bg-white px-3 py-2 align-top leading-7">
                      Apply to be certified as R.E.P. users of PMI China website
                      and display relevant contact information.
                    </td>
                    <td className="border border-[#262626] bg-white px-3 py-2 align-top leading-7">
                      Can't apply to be R.E.P. users of website and display the
                      contact information of R.E.P.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* SDK Table */}
            <p className="leading-7">
              In order to provide and optimize our services, we will access
              third party software tool development kits (SDKs). Below is a list
              of the third party SDKs we currently use, the types of personal
              information they collect, and the purposes for which they are
              used.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-[#262626] bg-[#d8d8d8] px-3 py-2 text-left text-[#0c0c0c]">
                      Name of SDK
                    </th>
                    <th className="border border-[#262626] bg-[#d8d8d8] px-3 py-2 text-left text-[#0c0c0c]">
                      Collected Information
                    </th>
                    <th className="border border-[#262626] bg-[#d8d8d8] px-3 py-2 text-left text-[#0c0c0c]">
                      Purpose of Processing
                    </th>
                    <th className="border border-[#262626] bg-[#d8d8d8] px-3 py-2 text-left text-[#0c0c0c]">
                      Privacy Policy
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-[#262626] bg-white px-3 py-2 align-top">
                      Baidu Analytics (百度统计)
                    </td>
                    <td className="border border-[#262626] bg-white px-3 py-2 align-top text-sm leading-6">
                      <p>
                        Information of visitors' behavior on the China Site,
                        including:
                      </p>
                      <ul className="mt-1 ml-4 list-disc space-y-0.5">
                        <li>Visiting time</li>
                        <li>City of the visitor</li>
                        <li>IP address</li>
                        <li>Web links directing visitor to China Site</li>
                        <li>Identification code of visitor</li>
                        <li>Length of visits</li>
                        <li>Number of China Site pages visited</li>
                        <li>Pages of China Site reviewed</li>
                        <li>PC or mobile terminal used</li>
                        <li>Visiting frequency</li>
                      </ul>
                    </td>
                    <td className="border border-[#262626] bg-white px-3 py-2 align-top leading-7">
                      To analyze relevant information of visitor statistics on
                      the China Site as a reference to PMI China.
                    </td>
                    <td className="border border-[#262626] bg-white px-3 py-2 align-top">
                      <span
                        className="underline underline-offset-2 hover:opacity-70"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Privacy Policy
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* How we use */}
            <h2 className="pt-2 font-bold text-xl">
              How We Use the Personal Information Collected
            </h2>
            <p className="leading-7">
              PMI uses your information to better understand your needs and
              provide you with better service. PMI will not disclose your
              personal information to others outside of PMI without your
              permission, otherwise prescribed by laws and administrative
              regulations.
            </p>
            <p className="leading-7">
              Specifically, the usage includes the following scenarios:
            </p>
            <ol className="list-decimal space-y-3 pl-5 leading-7">
              <li>
                <strong>
                  Sending information about our products, services, events and
                  for other promotional purposes
                </strong>
                <p className="mt-1">
                  With your consent, PMI will include your name and relevant
                  biographical information in PMI directories. You may opt out
                  of such contact via our customer registration and
                  certification applications, registration forms or web pages,
                  or at the bottom of online or off-line communications from us.
                </p>
              </li>
              <li>
                <strong>
                  Operating, improving and maintaining our business, products
                  and services
                </strong>
                <p className="mt-1">
                  We use the personal information you provide to us to operate
                  our business. The information is processed to complete the
                  transactions requested by you, to communicate back to you, and
                  to offer and update you on PMI services and benefits. Credit
                  card numbers are used only for payment processing and are not
                  retained for other purposes.
                </p>
              </li>
              <li>
                <strong>General survey and analysis purposes</strong>
                <p className="mt-1">
                  We use data about how users use the features and services of
                  our Sites and service to understand user behavior and
                  preferences. We may use information about usage patterns to
                  make our Sites and products more useful to you, provide more
                  effective customer service, and perform research aimed at
                  improving our products, services and technologies.
                </p>
              </li>
              <li>
                <strong>Protecting others' rights, property or safety</strong>
                <p className="mt-1">
                  In order to improve the security of your use of PMI
                  products/services, we may obtain your device information,
                  network information (IP address etc.), and browser
                  information. We will use this personal information to
                  determine, detect and prevent security incidents, including to
                  prevent or detect fraud, abuse, illegal use and to enforce
                  court orders, governmental requirements or applicable laws.
                </p>
              </li>
              <li>
                <strong>Exceptions to obtaining consent</strong>
                <p className="mt-1">
                  Subject to laws and regulations, we may collect and use your
                  personal information without your consent where: (1) necessary
                  for the formation or performance of a contract; (2) necessary
                  for a legal duty or obligation; (3) to respond to a public
                  health emergency; (4) for news reporting or public interest
                  purposes within reasonable limits; (5) to process personal
                  information you have lawfully disclosed; or (6) other
                  circumstances as provided for by laws and administrative
                  regulations.
                </p>
              </li>
            </ol>

            {/* Sharing */}
            <h2 className="pt-2 font-bold text-xl">
              How we share, transfer and publicly disclose your personal
              information
            </h2>
            <ol className="list-decimal space-y-3 pl-5 leading-7">
              <li>
                <strong>Sharing</strong>
                <p className="mt-1">
                  We will not share your personal information with any company,
                  organization or individual, except where necessary to fulfil a
                  legal obligation or with your express consent. PMI will not
                  disclose your personal information to a third party outside of
                  PMI without your permission. We will only share your personal
                  information with other PMI entities and/or business partners
                  who are acting on our behalf.
                </p>
              </li>
              <li>
                <strong>Transfer</strong>
                <p className="mt-1">
                  We will not transfer your personal information to external
                  parties except where your express consent is obtained, or
                  where necessary due to a merger, demerger, dissolution or
                  bankruptcy. In such cases, we will inform you of the name and
                  contact details of the recipient.
                </p>
              </li>
              <li>
                <strong>Public disclosure</strong>
                <p className="mt-1">
                  We will not disclose your personal information publicly except
                  where your express consent is obtained, or where required by
                  laws and regulations or mandatory requirements of government
                  agencies.
                </p>
              </li>
            </ol>

            {/* Your Rights */}
            <h2 className="pt-2 font-bold text-xl">Your Rights</h2>
            <p className="leading-7">You have rights to the following:</p>
            <ol className="list-decimal space-y-4 pl-5 leading-7">
              <li>
                <strong>
                  To request access to and rectify the personal information we
                  hold about you
                </strong>
                <p className="mt-1">
                  You have the right to access, supplement or rectify your
                  personal information at any time by accessing your PMI account
                  via the PMI Sites. For PMI US, you may contact Customer Care
                  or call +1 610 356 4600. For PMI China, send an email to{" "}
                  <a
                    className="underline underline-offset-2 hover:opacity-70"
                    href="mailto:chinaoffice@pmi.org"
                  >
                    chinaoffice@pmi.org
                  </a>
                  .
                </p>
                {/* Access table for China site */}
                <div className="mt-3 overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr>
                        <th className="border border-[#262626] bg-[#d8d8d8] px-3 py-2 text-left text-[#262626]">
                          Menu/page
                        </th>
                        <th className="border border-[#262626] bg-[#d8d8d8] px-3 py-2 text-left text-[#262626]">
                          Functions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        [
                          "My PMI in PMI China Site",
                          "User could manage personal information, revise certification number, revise password, get notifications and other personal information after logging in China Site.",
                        ],
                        [
                          "My PMI - R.E.P. User Management Platform in PMI China Site",
                          "User could manage respective personal information.",
                        ],
                        ["My PMI – Volunteer Platform in PMI China Site", ""],
                        [
                          "My PMI – Enterprise User Platform in PMI China Site",
                          "",
                        ],
                        ["Activity Application in PMI China Site", ""],
                      ].map(([menu, fn]) => (
                        <tr key={menu}>
                          <td className="border border-[#262626] bg-white px-3 py-2 align-top">
                            {menu}
                          </td>
                          <td className="border border-[#262626] bg-white px-3 py-2 align-top">
                            {fn}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </li>
              <li>
                <strong>
                  To request that we delete your personal information
                </strong>
                <p className="mt-1">
                  We will delete your personal information when the purpose of
                  processing has been fulfilled, we cease to provide services,
                  you withdraw your consent, or other circumstances as provided
                  by law. Contact Customer Care for PMI US or email{" "}
                  <a
                    className="underline underline-offset-2 hover:opacity-70"
                    href="mailto:chinaoffice@pmi.org"
                  >
                    chinaoffice@pmi.org
                  </a>{" "}
                  for PMI China.
                </p>
              </li>
              <li>
                <strong>
                  To request that we restrict or block the processing of your
                  personal information
                </strong>
                <p className="mt-1">
                  If you have a PMI account, you can opt out of receiving
                  marketing communications. Send your request to{" "}
                  <a
                    className="underline underline-offset-2 hover:opacity-70"
                    href="mailto:privacy@pmi.org"
                  >
                    privacy@pmi.org
                  </a>{" "}
                  for PMI US or{" "}
                  <a
                    className="underline underline-offset-2 hover:opacity-70"
                    href="mailto:chinaoffice@pmi.org"
                  >
                    chinaoffice@pmi.org
                  </a>{" "}
                  for PMI China. You may also contact PMI US by phone at
                  +1-610-356-4600, option 8.
                </p>
              </li>
              <li>
                <strong>Right to data portability</strong>
                <p className="mt-1">
                  You have the right to copy or request the transfer of your
                  personal information by reaching out to Customer Care for PMI
                  US or{" "}
                  <a
                    className="underline underline-offset-2 hover:opacity-70"
                    href="mailto:chinaoffice@pmi.org"
                  >
                    chinaoffice@pmi.org
                  </a>{" "}
                  for PMI China.
                </p>
              </li>
              <li>
                <strong>
                  Where we previously obtained your consent, to withdraw consent
                  to processing your personal information
                </strong>
                <p className="mt-1">
                  You may give or withdraw your authorized consent at any time.
                  You may also withdraw your full authorization by cancelling
                  your account. Withdrawing consent will not affect processing
                  previously carried out on the basis of your consent.
                </p>
              </li>
              <li>
                <strong>Cancellation of your account</strong>
                <p className="mt-1">
                  If you wish to cancel your PMI account, contact Customer Care
                  for PMI US or{" "}
                  <a
                    className="underline underline-offset-2 hover:opacity-70"
                    href="mailto:chinaoffice@pmi.org"
                  >
                    chinaoffice@pmi.org
                  </a>{" "}
                  for PMI China. Please note that cancellation of your account
                  is irreversible.
                </p>
              </li>
            </ol>

            {/* Security */}
            <h2 className="pt-2 font-bold text-xl">Security</h2>
            <p className="leading-7">
              PMI is committed to ensuring the security of your information. To
              prevent unauthorized access or disclosure, maintain data accuracy,
              and ensure the appropriate use of information, we have put in
              place appropriate physical, electronic, and managerial procedures
              to safeguard and secure the information we collect online.
            </p>

            {/* Contact */}
            <h2 className="pt-2 font-bold text-xl">Contact Us</h2>
            <p className="leading-7">
              If you have questions or concerns about this Privacy Policy,
              please contact us:
            </p>
            <ul className="list-disc space-y-1 pl-5 leading-7">
              <li>
                PMI US:{" "}
                <a
                  className="underline underline-offset-2 hover:opacity-70"
                  href="mailto:privacy@pmi.org"
                >
                  privacy@pmi.org
                </a>
              </li>
              <li>
                PMI China:{" "}
                <a
                  className="underline underline-offset-2 hover:opacity-70"
                  href="mailto:chinaoffice@pmi.org"
                >
                  chinaoffice@pmi.org
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
