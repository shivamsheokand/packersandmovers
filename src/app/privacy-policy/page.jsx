"use client";
import React from "react";
import { motion } from "framer-motion";
import { PageContainer } from "../../components/ui/page-container";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "Personal identification information (Name, email address, phone number, etc.)",
        "Shipping and billing information",
        "Details about your moving requirements",
        "Communication records between you and our team",
      ],
    },
    {
      title: "How We Use Your Information",
      content: [
        "To provide and maintain our services",
        "To notify you about changes to our services",
        "To provide customer support",
        "To gather analysis or valuable information to improve our services",
        "To detect, prevent and address technical issues",
      ],
    },
    {
      title: "Information Protection",
      content: [
        "We implement security measures to maintain the safety of your personal information",
        "We do not sell, trade, or rent users' personal identification information",
        "We may share generic aggregated demographic information not linked to any personal identification information",
      ],
    },
    {
      title: "Cookie Policy",
      content: [
        "Our website uses cookies to enhance user experience",
        "Users can choose to set their web browser to refuse cookies",
        "Note that some parts of the website may not function properly if cookies are disabled",
      ],
    },
    {
      title: "Third-Party Websites",
      content: [
        "Users may find advertising or other content that link to third-party partners",
        "We do not control the content or links on these websites",
        "These websites may have separate and independent privacy policies",
      ],
    },
  ];

  return (
    <PageContainer>
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl font-bold text-center mb-8">
              Privacy Policy
            </h1>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-gray-600 mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <p className="text-gray-600 mb-8">
                At OM Technoware Packers & Movers, we take your privacy
                seriously. This Privacy Policy describes how we collect, use,
                and protect your personal information.
              </p>

              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-8"
                >
                  <h2 className="text-2xl font-semibold mb-4">
                    {section.title}
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-600">
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}

              <div className="mt-12 pt-8 border-t border-gray-200">
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="text-gray-600">
                  If you have any questions about this Privacy Policy, please
                  contact us at:
                </p>
                <p className="text-gray-600 mt-2">
                  Email: info@omtechnoware.com
                  <br />
                  Phone: +91 12345 67890
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageContainer>
  );
};

export default PrivacyPolicy;
