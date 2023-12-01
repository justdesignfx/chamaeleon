import React from "react"
import s from "./terms-and-conditions.module.scss"

import { CustomLink } from "@/components/custom-link"

import { DefaultLayout } from "@/layouts/default"

const TermsAndConditions = () => {
  return (
    <DefaultLayout>
      <div className={s.termsAndConditions}>
        <h1>TERMS AND CONDITIONS OF USE</h1>
        <p>For the avoidance any doubt, by accessing this site you agree to be bound by the terms described below:</p>
        <h2>Ownership</h2>
        <p>
          All content included on this site, such as graphics, logos, articles and other materials, is the property of
          Chamaeleon LLC and is protected by copyright and other laws. All trademarks and logos displayed on this site
          are the property of their respective owners, who may or may not be affiliated with Chamaeleon LLC. Except as
          expressly provided herein, Chamaeleon LLC does not grant to you any express or implied rights with respect to
          this site or the material or information contained on this site.Chamaeleon LLC may change, or suspend it, at
          any time and without notice. These Terms and Conditions of Use can also be revised at any time by posting a
          new version to the site. Any changes will be effective when posted. The continued use of the site after a
          change to these Terms and Conditions of Use constitutes the acceptance of any changes to the Terms and
          Conditions of Use. If it is illegal or prohibited in your country to access or use this site, then you should
          not do so. You are responsible for compliance with all local laws and regulations.
        </p>
        <h2>Use of Materials</h2>
        <p>
          You may download and print materials from this site solely for your personal use, but you may not use or copy
          them for commercial purposes, make more than a few copies of a given page or item or copy a substantial
          proportion of the site, except with our prior written permission. Requests for permission should be sent to{" "}
          <CustomLink href="mailto:helloworld@chamaeleon.vc">helloworld@chamaeleon.vc</CustomLink>
        </p>
        <p>
          Copies must not alter the original content and must reproduce our copyright notices. Except as otherwise
          permitted herein, you may not modify, copy, distribute, transmit, display, perform, reproduce, publish,
          license, frame, create derivative of, transfer or otherwise use in any other way, in whole or in part, any
          information obtained from this site.
        </p>
        <h2>No Offering & Limitation on Liability</h2>
        <p>
          The materials on the site are provided for general information purposes only and do not constitute
          professional or financial advice. Information on this site may not be accurate or current and may be rendered
          inaccurate by changes in law or regulation. Nothing on this site is intended to constitute an offer to sell or
          a solicitation of an offer to buy any interest in any investment vehicle managed by Chamaeleon LLC or any
          company in which Chamaeleon LLC or its affiliates have invested. You are responsible for obtaining your own
          legal, tax and financial advice before entering into any transaction or investment with Chamaeleon LLC. We
          make no commitment regarding the availability, performance or functions of the site and give no warranty that
          your access to the site or use of the materials on the site will be lawful in any particular jurisdiction -
          you are responsible for compliance with local law and regulation. You acknowledge that we provide the contents
          of this site on an "as is" basis with no warranties of any kind. The use of this site and use or reliance upon
          any materials or information on it is solely at your own risk. Chamaeleon LLC does not guarantee that material
          on this site will be free from infection, viruses, worms, trojan horses and/or other similar code. You are
          responsible for virus checking and taking any other protective steps. The site was developed, and is hosted,
          by a third-party for whose acts and omissions we accept no responsibility. There may be links from the site to
          external Internet sites. In addition, third-party sites may be linked to this site, with or without Chamaeleon
          LLC's consent. Accordingly, we expressly disclaim any responsibility for the content, the accuracy of the
          information, the quality of services provided by or advertised on and/or software downloaded from any such
          third-party sites. Moreover, any link from the site to a third-party site does not constitute an endorsement
          by Chamaeleon LLC of any third-party site or the products or services provided by any third party, and
          Chamaeleon LLC takes no responsibility therefore. Chamaeleon LLC's liability is limited to the maximum extent
          permitted by law and is limited even if Chamaeleon LLC has been advised of the possibility of the damages,
          liability or injury that you suffer, including any damages, liabilities or injury caused by any failure of
          performance, error, omission, defect, interruption, delay in operation, computer virus, line failure or other
          computer malfunction.
        </p>
        <h2>Governing Law and Arbitration</h2>
        <p>
          Any dispute arising out of or in connection with this site or these Terms and Conditions of Use shall be
          governed solely by the laws of the United States, without regards to conflicts of law rules, and shall be
          settled by arbitration in accordance with the Rules of Arbitration of the International Chamber of Commerce in
          effect at the time of the arbitration. The seat of the arbitration shall be Delaware, United States. At
          Chamaeleon LLC's discretion, hearings may for convenience take place at an alternative location. The language
          of the arbitration shall be English. The arbitration award shall be final and binding on the parties.
        </p>
      </div>
    </DefaultLayout>
  )
}

export default TermsAndConditions
