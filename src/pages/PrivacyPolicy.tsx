import { motion } from "framer-motion"

function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
            </p>

            <p className="text-gray-600 mb-6">
              We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Definitions</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><strong>Website</strong> refers to Data Doodles, accessible from datadoodles.com</li>
              <li><strong>Service</strong> refers to the Website</li>
              <li><strong>Country</strong> refers to: Nepal</li>
              <li><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company</li>
              <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Types of Data Collected</h2>
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Personal Data</h3>
            <p className="text-gray-600 mb-4">
              While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. This may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Usage Data</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Use of Your Personal Data</h2>
            <p className="text-gray-600 mb-4">
              The Company may use Personal Data for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>To provide and maintain our Service</li>
              <li>To manage Your Account</li>
              <li>For the performance of a contract</li>
              <li>To contact You</li>
              <li>To manage Your requests</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Security of Your Personal Data</h2>
            <p className="text-gray-600 mb-6">
              The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Children's Privacy</h2>
            <p className="text-gray-600 mb-6">
              Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Changes to this Privacy Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
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

export default PrivacyPolicy 