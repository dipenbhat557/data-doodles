import { motion } from "framer-motion"

function TermsAndConditions() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-primary mb-8">Terms and Conditions</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Welcome to Data Doodles. By continuing to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Data Doodles' relationship with you.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Definitions</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>The term 'Data Doodles', 'us', or 'we' refers to the owner of the website.</li>
              <li>The term 'you' refers to the user or viewer of our website.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Content and Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</li>
              <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this website for any particular purpose.</li>
              <li>You acknowledge that such information and materials may contain inaccuracies or errors, and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</li>
              <li>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Intellectual Property</h2>
            <p className="text-gray-600 mb-4">
              This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</li>
              <li>All trademarks not the property of, or licensed to, the operator are acknowledged on the website.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Website Links</h2>
            <p className="text-gray-600 mb-4">
              From time to time, this website may include links to other websites. These links are provided for your convenience to provide further information.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Links do not signify that we endorse the website(s).</li>
              <li>We take no responsibility for the content of the linked website(s).</li>
              <li>You may not create a link to this website from another website or document without Data Doodles' prior consent.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Legal Jurisdiction</h2>
            <p className="text-gray-600 mb-6">
              Your use of this website and any dispute arising out of such use of the website is subject to the laws of Nepal or other regulatory authority.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Unauthorized Use</h2>
            <p className="text-gray-600 mb-6">
              Unauthorized use of this website by you may give rise to a claim for damages and/or be a criminal offense.
            </p>

            <p className="text-gray-600 mt-8">
              Last updated: March 15, 2024
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default TermsAndConditions 