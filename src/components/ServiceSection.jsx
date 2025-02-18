import React from "react";
import {
  FaIdCard,
  FaUtensils,
  FaBusinessTime,
  FaBaby,
  FaWater,
  FaHouseDamage,
  FaShieldAlt,
  FaSchool,
  FaGraduationCap,
  FaClipboard,
  FaBookOpen,
  FaUniversity,
  FaPassport,
  FaCar,
  FaAddressCard,
  FaBriefcase,
  FaFileAlt,
} from "react-icons/fa";

const servicesData = [
  {
    category: "Essential Services",
    services: [
      { name: "Ayushman Card Registration", icon: <FaIdCard /> },
      { name: "FSSAI License Application", icon: <FaUtensils /> },
      { name: "Business Gumasta Registration", icon: <FaBusinessTime /> },
      { name: "Birth & Death Certificate Application", icon: <FaBaby /> },
      { name: "Electricity & Water Bill Payments", icon: <FaWater /> },
      { name: "Property Tax Payment", icon: <FaHouseDamage /> },
      { name: "Police Verification Applications", icon: <FaShieldAlt /> },
    ],
  },
  {
    category: "Education Services",
    services: [
      {
        name: "School & College Admission Forms (DAVV, RGPV, etc.)",
        icon: <FaSchool />,
      },
      {
        name: "Board Exam Forms & Results (MP Board, CBSE, etc.)",
        icon: <FaGraduationCap />,
      },
      { name: "Scholarship Applications", icon: <FaClipboard /> },
      {
        name: "Exam Form Submissions (MPPSC, Vyapam, etc.)",
        icon: <FaBookOpen />,
      },
    ],
  },
  {
    category: "Documents & Licenses",
    services: [
      { name: "Passport Applications", icon: <FaPassport /> },
      { name: "Driving License Applications & RTO Services", icon: <FaCar /> },
      { name: "Aadhar Card Updates", icon: <FaAddressCard /> },
      { name: "PAN Card Services", icon: <FaIdCard /> },
    ],
  },
  {
    category: "Recruitment & Job Applications",
    services: [
      { name: "Government Job Exam Applications", icon: <FaBriefcase /> },
      { name: "Admit Card Downloads & Result Checking", icon: <FaFileAlt /> },
    ],
  },
];

const ServicesSection = () => {
  return (
    <div className="p-8 bg-transparent min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((category, index) => (
          <div
            key={index}
            className="p-6 bg-transparent rounded-2xl border border-yellow-500"
          >
            <h2 className="text-2xl font-semibold mb-4 text-yellow-600">
              {category.category}
            </h2>
            <ul className="space-y-4">
              {category.services.map((service, serviceIndex) => (
                <li key={serviceIndex} className="flex items-center space-x-4">
                  <div className="text-xl text-yellow-500">{service.icon}</div>
                  <span className="text-lg text-yellow-700">
                    {service.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center text-yellow-700 font-semibold">
        📍{" "}
        <strong>
          Yogesh Shakya – Your Trusted MP Online Service Provider!
        </strong>{" "}
        <br />
        Get your work done smoothly and hassle-free. Contact now! 📞
      </div>
    </div>
  );
};

export default ServicesSection;

