"use client";
import React from "react";
import { motion } from "framer-motion";
import { PageContainer } from "../../components/ui/page-container";

const Terms = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: `By accessing and using our services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.`,
    },
    {
      title: "Service Description",
      content: `We provide packing, moving, and relocation services. Our services include but are not limited to:`,
      list: [
        "Household goods packing and moving",
        "Office relocation services",
        "Vehicle transportation",
        "Storage solutions",
        "International moving services",
      ],
    },
    {
      title: "Booking and Payments",
      content: `Payment terms and conditions include:`,
      list: [
        "Advance booking required for all services",
        "50% advance payment at the time of booking",
        "Balance payment before delivery",
        "All payments are non-refundable unless canceled 48 hours prior to the service",
        "Additional charges may apply for special handling or extra services",
      ],
    },
    {
      title: "Insurance and Liability",
      content: `Our liability and insurance terms include:`,
      list: [
        "Basic insurance coverage included in service cost",
        "Additional insurance available at extra cost",
        "Claims must be filed within 24 hours of delivery",
        "Maximum liability as per industry standards",
        "Certain items excluded from insurance coverage",
      ],
    },
    {
      title: "Service Commitments",
      content: `We are committed to:`,
      list: [
        "Providing professional and timely service",
        "Handling your belongings with care",
        "Following safety protocols",
        "Maintaining transparency in pricing",
        "Protecting your personal information",
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
              Terms & Conditions
            </h1>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-gray-600 mb-8">
                Last updated: {new Date().toLocaleDateString()}
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
                  <p className="text-gray-600 mb-4">{section.content}</p>
                  {section.list && (
                    <ul className="list-disc pl-6 space-y-2">
                      {section.list.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-600">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}

              <div className="mt-12 pt-8 border-t border-gray-200">
                <h2 className="text-2xl font-semibold mb-4">
                  Changes to Terms
                </h2>
                <p className="text-gray-600">
                  We reserve the right to modify these terms at any time. We
                  will notify users of any changes by updating the date at the
                  top of this agreement.
                </p>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-2">
                    Contact Information
                  </h3>
                  <p className="text-gray-600">
                    For any questions regarding these terms, please contact us
                    at:
                    <br />
                    Email: info@omtechnoware.com
                    <br />
                    Phone: +91 12345 67890
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Terms;
