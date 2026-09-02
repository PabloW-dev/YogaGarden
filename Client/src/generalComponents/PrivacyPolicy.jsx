import { NavLink } from "react-router-dom";


export default function PrivacyPolicy() {
  return (
    <div className="privacy-policy">
      <div className="privacy-policy__header">
        <h1>Privacy Policy</h1>

        <p>YogaGarden respects your privacy and aims to be transparent about how personal information may be collected and used when you access or use the platform.</p>

        <p>This Privacy Policy explains what information YogaGarden may collect, why it may be collected, how it may be used, and what rights users may have regarding their personal information.</p>

        <p>By using YogaGarden, you acknowledge this Privacy Policy.</p>
      </div>

      <div className="privacy-policy__body">
        <ul>
          <li>
            <h3>1. Information We May Collect:</h3>

            <p>Depending on the features you use, YogaGarden may collect information such as:</p>

            <ul>
              <li>Account information, including your name, email address and authentication information.</li>
              <li>Information provided when using the platform, such as class names, class configurations, saved classes or other content associated with your account.</li>
              <li>Information submitted when suggesting a yoga technique for inclusion in the YogaGarden library.</li>
              <li>Technical information necessary for the operation, security and improvement of the platform, such as browser information, device information or basic usage data.</li>
            </ul>

            <p>YogaGarden aims to collect only information that is reasonably necessary for providing and improving its services.</p>
          </li>

          <li>
            <h3>2. How We Use Your Information:</h3>

            <p>Personal information may be used to:</p>

            <ul>
              <li>Create and manage user accounts.</li>
              <li>Provide access to features that require registration.</li>
              <li>Save, edit and manage classes created by users.</li>
              <li>Allow users to share their classes through the platform.</li>
              <li>Facilitate the review of submitted classes or technique suggestions.</li>
              <li>Maintain, secure and improve the platform.</li>
              <li>Communicate with users when necessary regarding their account or the services they use.</li>
              <li>Comply with applicable legal obligations.</li>
            </ul>

            <p>YogaGarden will not use personal information for purposes unrelated to the operation of the platform without an appropriate legal basis or, where required, the user's consent.</p>
          </li>

          <li>
            <h3>3. User-Created Content:</h3>

            <p>Users may create and save yoga classes and may submit information about yoga techniques that are not currently included in the YogaGarden library.</p>

            <p>Information submitted through these features may be processed and reviewed in order to provide the corresponding functionality and maintain the quality of the platform.</p>

            <p>Users should avoid including unnecessary personal information about themselves or other individuals in class descriptions, technique suggestions or other user-generated content.</p>
          </li>

          <li>
            <h3>4. Cookies and Similar Technologies:</h3>

            <p>YogaGarden may use cookies or similar technologies when necessary to provide essential functionality, maintain user sessions, remember preferences or improve the operation of the platform.</p>

            <p>Where applicable, non-essential cookies or similar technologies will be used in accordance with applicable legal requirements and any consent that may be required.</p>
          </li>

          <li>
            <h3>5. Third-Party Services:</h3>

            <p>Some aspects of YogaGarden may rely on third-party services, such as hosting providers, authentication services, payment providers, analytics services or other technical infrastructure.</p>

            <p>Where third-party services process personal information on behalf of YogaGarden, they may only process such information as necessary to provide their services and in accordance with their applicable terms and privacy policies.</p>

            <p>YogaGarden does not sell users' personal information to third parties.</p>
          </li>

          <li>
            <h3>6. Data Security:</h3>

            <p>YogaGarden takes reasonable measures to protect personal information against unauthorized access, alteration, disclosure or destruction.</p>

            <p>However, no internet-based service can guarantee absolute security. Users should therefore understand that transmitting information over the internet always involves some degree of risk.</p>
          </li>

          <li>
            <h3>7. Data Retention:</h3>

            <p>Personal information will be retained only for as long as reasonably necessary to provide the relevant services, maintain user accounts, comply with legal obligations, resolve disputes and enforce applicable agreements.</p>

            <p>When personal information is no longer required, it may be deleted or anonymized where appropriate.</p>
          </li>

          <li>
            <h3>8. Your Rights:</h3>

            <p>Depending on applicable law, users may have rights regarding their personal information, including the right to:</p>

            <ul>
              <li>Request access to personal information held about them.</li>
              <li>Request correction of inaccurate or incomplete information.</li>
              <li>Request deletion of their personal information where applicable.</li>
              <li>Request restriction of certain processing activities.</li>
              <li>Object to certain uses of personal information.</li>
              <li>Withdraw consent where processing is based on consent.</li>
              <li>Request a copy of their personal information in a portable format where applicable.</li>
            </ul>

            <p>Requests concerning personal information can be made through the YogaGarden contact page.</p>
          </li>

          <li>
            <h3>9. Children's Privacy:</h3>

            <p>YogaGarden is not specifically designed for children.</p>

            <p>Users should not provide personal information belonging to children through the platform unless they are authorized to do so and the applicable legal requirements have been satisfied.</p>
          </li>

          <li>
            <h3>10. Changes to This Privacy Policy:</h3>

            <p>YogaGarden may update this Privacy Policy when the platform, its services or its data practices change.</p>

            <p>When changes are made, the updated version will be published on this page together with its corresponding update date.</p>
          </li>

          <li>
            <h3>11. Contact:</h3>

            <p>If you have questions about this Privacy Policy or about how personal information is handled by YogaGarden, you can contact us through the <NavLink to="/contact">Contact Page</NavLink>.</p>
          </li>
        </ul>

        <small>Last updated: August 2026</small>
      </div>
    </div>
  )
}
