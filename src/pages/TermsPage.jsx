import SeoHead from '../components/SeoHead.jsx';
import { SITE } from '../data/siteData.js';

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `https://${SITE.domain}/terms`,
    name: 'Terms & Conditions',
    description: 'Terms and conditions for Coherence digital services.',
    url: `https://${SITE.domain}/terms`,
    about: 'terms and conditions',
    isPartOf: { '@type': 'WebSite', name: SITE.name, url: `https://${SITE.domain}` },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${SITE.domain}/` },
      { '@type': 'ListItem', position: 2, name: 'Terms & Conditions', item: `https://${SITE.domain}/terms` },
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <SeoHead
        title="Terms & Conditions"
        description="Terms and conditions for Coherence digital services."
        path="/terms"
      
        jsonLd={jsonLd}
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>
          <h1 className="reveal">Terms &amp; Conditions</h1>

          <p>Coherence is a trading name of Coherence Consulting Limited, registered in England under number 13606667, with registered office at Towngate House, 2-8 Parkstone Road, Poole, Dorset, BH15 2PW. We provide digital services to business clients.</p>

          <p>These Terms and Conditions shall apply to the provision of services by the Service Provider to its clients.</p>

          <h2>1. Interpretation</h2>
          <p>The following definitions apply throughout these terms:</p>
          <ul>
            <li><strong>Agreement:</strong> The contract between the client and Coherence Consulting Ltd per these Conditions, the Order, and Statement of Work.</li>
            <li><strong>Client Materials:</strong> Text, images, designs, software, code, data, and other materials provided by the client.</li>
            <li><strong>Confidential Information:</strong> Trade secrets, business information, and proprietary data marked confidential or reasonably assumed confidential.</li>
            <li><strong>Data Protection Law:</strong> The UK GDPR, the Data Protection Act 2018, and any successor legislation.</li>
            <li><strong>Fees:</strong> Payment amounts stated in the Agreement.</li>
            <li><strong>Intellectual Property:</strong> Patents, trademarks, copyrights, databases, domain names, and similar protections worldwide.</li>
            <li><strong>Personnel:</strong> Directors, employees, agents, and contractors.</li>
            <li><strong>Services:</strong> Services described in the Order and Statement of Work.</li>
          </ul>

          <h2>2. Conditions</h2>
          <p>2.1 The Agreement governs the relationship and replaces all prior agreements regarding Services.</p>
          <p>2.2 Coherence Consulting Ltd provides Services per the Agreement with applicable fees.</p>
          <p>2.3 Services are provided with reasonable care and skill, in a diligent, prompt and professional manner. Nonconforming Services will be rectified at no extra charge.</p>
          <p>2.4 Coherence Consulting Ltd uses reasonable endeavours to meet any performance targets specified. However, the company makes no promises regarding achievement of results or objectives.</p>
          <p>2.5 Amendments require written notification and signatures from both parties, clearly identifying changes and fees.</p>
          <p>2.6 Neither party is prevented from engaging similar agreements with third parties before, during, or after the term.</p>

          <h2>3. Client&rsquo;s Obligations</h2>
          <p>During the Agreement term, clients must:</p>
          <ul>
            <li>Ensure their team collaborates with Coherence Consulting Ltd regarding Services.</li>
            <li>Promptly provide required assets including information, passwords, materials, data, and documents.</li>
            <li>Procure necessary copyright licences and consents for provided information and materials.</li>
          </ul>

          <h2>4. Fees and Payment</h2>
          <p>4.1 Fees are due within 30 days of invoice date.</p>
          <p>4.2 Fees are exclusive of VAT.</p>
          <p>4.3 Fees exclude travel, hotel, subsistence, and external service costs unless expressly agreed in writing.</p>
          <p>4.4 Unpaid fees entitle Coherence Consulting Ltd to pursue legal action where appropriate.</p>

          <h2>5. Confidentiality</h2>
          <p>5.1 Each party must keep the other&rsquo;s Confidential Information confidential and secret. Information may only be used to perform obligations under the Agreement. Employees must be informed of confidentiality obligations.</p>
          <p>5.2 Confidentiality obligations do not apply to information that:</p>
          <ul>
            <li>Was known to or possessed by the Receiving Party before disclosure.</li>
            <li>Is or becomes publicly available through no fault of the Receiving Party.</li>
            <li>Is required to be disclosed by court order.</li>
          </ul>

          <h2>6. Personal Data</h2>
          <p>6.1 When Services require processing Personal Data on the client&rsquo;s behalf, Coherence Consulting Ltd acts as a processor and shall:</p>
          <ul>
            <li>Comply with and act only upon client instructions.</li>
            <li>Not process Personal Data beyond Services provision.</li>
            <li>Ensure appropriate technical and organisational measures prevent unauthorised processing and loss or damage.</li>
            <li>Ensure reliability of employees accessing Personal Data.</li>
            <li>Not breach Data Protection Law through act or omission.</li>
            <li>Immediately inform clients of suspected or confirmed data breaches.</li>
            <li>Not sub-contract processing obligations without prior written consent.</li>
            <li>Not process Personal Data outside the United Kingdom without written consent and fulfilment of requirements enabling such processing.</li>
          </ul>

          <h2>7. Intellectual Property</h2>
          <p>7.1 Clients retain Intellectual Property Rights in Client Materials. Coherence Consulting Ltd receives a personal, non-exclusive, royalty-free, worldwide licence to use, reproduce, modify and adapt Client Materials solely for providing Services.</p>
          <p>7.2 Coherence Consulting Ltd owns all Intellectual Property Rights in its materials and pre-existing property.</p>
          <p>7.3 When pre-existing property or company materials are incorporated into Services, clients receive a personal, non-exclusive, royalty-free, perpetual, irrevocable, worldwide licence to use them solely as necessary for using Services, provided fees are paid in full.</p>
          <p>7.4 All Client Materials, pre-existing materials, and company materials are deemed Confidential Information, except open source software.</p>

          <h2>8. Indemnity</h2>
          <p>8.1 Each party indemnifies the other against losses, liability, damages, and expenses (including legal fees) resulting from claims that Services provision infringes third-party Intellectual Property or breaches Data Protection Law. Provided that: the indemnifying party receives prompt notice; the indemnifying party has sole authority to defend or settle; and the indemnified party provides reasonable cooperation at the indemnifying party&rsquo;s expense.</p>

          <h2>9. Restriction</h2>
          <p>9.1 During the Agreement and 6 months after termination, clients shall not directly or indirectly entice away or attempt to entice away any person employed or engaged by Coherence Consulting Ltd during the previous 12 months who was involved in providing Services.</p>

          <h2>10. Limitation of Liability</h2>
          <p>10.1 The Agreement does not exclude liability for: death or personal injury from negligence; fraud or fraudulent misrepresentation; or breach of implied conditions regarding title or quiet enjoyment.</p>
          <p>10.2 Subject to 10.1, neither party is liable for: economic losses including lost revenues, profits, contracts, data, business, anticipated savings, or substitute service costs; loss of goodwill or reputation; or special, indirect, or consequential losses.</p>
          <p>10.3 These exclusions apply regardless of contemplation by parties at agreement date.</p>
          <p>10.4 Subject to 10.1 and 10.2, each party&rsquo;s total liability is limited to 125% of the Fees paid by the client in the lesser of (a) the contract term of the Agreement or (b) the twelve month period immediately prior to the first event allegedly giving rise to the liability.</p>
          <p>10.5 Clients acknowledge they do not rely on representations or warranties except as expressly provided; conditions and warranties implied by statute or common law are excluded to the fullest extent permitted.</p>

          <h2>11. Termination</h2>
          <p>11.1 The Agreement commences on the written contract start date and continues either for the project term or until either party provides written notice of not less than 10 business days.</p>
          <p>11.2 Coherence Consulting Ltd may terminate if clients fail to pay fees on their due date.</p>
          <p>11.3 Either party may terminate with immediate effect if the other party materially breaches obligations and fails to remedy within 30 days of notice specifying the breach, or if the other party becomes insolvent.</p>
          <p>11.4 Upon termination, clients must pay for all Services provided through the termination date.</p>
          <p>11.5 Clauses 4, 5, 6, 8, 9, 10, and 11, plus other applicable clauses, survive termination.</p>

          <h2>12. Dispute Resolution</h2>
          <p>12.1 If controversies or claims arise, parties&rsquo; representatives shall negotiate promptly and in good faith to resolve matters.</p>
          <p>12.2 If unresolved, the matter proceeds to mediation per Centre for Dispute Resolution (CEDR) procedures within 30 days of one party&rsquo;s notice that agreement is unlikely.</p>

          <h2>13. General Provisions</h2>
          <p>13.1 Neither party shall assign or transfer the Agreement without prior written consent (not unreasonably withheld), except Coherence Consulting Ltd may assign without consent to a purchaser of substantially all its assets.</p>
          <p>13.2 The Agreement is the complete agreement for Services provision. Previous agreements are replaced.</p>
          <p>13.3 Coherence Consulting Ltd may use sub-contractors. Sub-contractor work is held to the same Agreement standard.</p>
          <p>13.4 Notices shall be sent by email to addresses on the Order. Notice is deemed served upon email opening.</p>
          <p>13.5 Non-enforcement or delayed enforcement does not affect either party&rsquo;s rights.</p>
          <p>13.6 Coherence Consulting Ltd is not liable for delays or non-performance caused by circumstances beyond its control; it may suspend or terminate part or all of the Agreement.</p>
          <p>13.7 Both parties are independent contractors; nothing creates agency, partnership, or joint venture.</p>
          <p>13.8 The Agreement does not give non-parties rights to enforce its provisions per the Contracts (Rights of Third Parties) Act 1999.</p>
          <p>13.9 If a court determines a term is illegal or non-binding, it will not affect other terms.</p>
          <p>13.10 The Agreement and disputes arising from it are governed by and construed in accordance with the law of England and Wales.</p>

          <p style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid var(--coh-grey-300, #e5e5e5)', fontSize: '0.9rem', color: 'var(--coh-grey-600, #666)' }}>
            For questions about these terms, contact us at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
