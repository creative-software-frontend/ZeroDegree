import React from 'react';
import {
  FaRocket,
  FaChartLine,
  FaShieldAlt,
  FaLaptop,
  FaTruck,
  FaMoneyBillAlt,
  FaShoePrints,
  FaClipboardList,
  FaFacebook,
  FaBox,
  FaFileInvoiceDollar,
  FaGoogle,
} from 'react-icons/fa';

const KeyFeatures = () => {
  const features = [
   
    {
      icon: <FaChartLine className="text-3xl text-green-500" />,
      title: 'Free Domain & Hosting',
      banglaTitle:
        'Know in advance which customers will or will not receive the product after it is shipped.',
      description:
        'Identify potentially fraudulent customers before shipping products',
    },
    {
      icon: <FaLaptop className="text-3xl text-purple-500" />,
      title: 'Landing Page',
      banglaTitle:
        'Special landing pages for marketing specific products on eCommerce websites',
      description:
        'Create special landing pages for marketing specific products',
    },
    {
      icon: <FaChartLine className="text-3xl text-green-500" />,
      title: 'Fraud Checker',
      banglaTitle:
        'Know in advance which customers will or will not receive the product after it is shipped.',
      description:
        'Identify potentially fraudulent customers before shipping products',
    },
    {
      icon: <FaShieldAlt className="text-3xl text-red-500" />,
      title: 'IP Ban',
      banglaTitle: 'Benefits of banning fraudulent customer IDs',
      description: 'Block fraudulent customers by their IP addresses',
    },
    
    {
      icon: <FaTruck className="text-3xl text-yellow-500" />,
      title: 'One Click Courier Entry',
      banglaTitle:
        'One-click order details entry for Steadfast, Pathao and Redex couriers',
      description: 'One-click order entry for popular courier services',
    },
    {
      icon: <FaMoneyBillAlt className="text-3xl text-indigo-500" />,
      title: 'Amount Adjust',
      banglaTitle: 'Order amount can be adjusted before entry to courier.',
      description: 'Adjust order amounts before finalizing courier entry',
    },
    {
      icon: <FaShoePrints className="text-3xl text-pink-500" />,
      title: 'Foot Print',
      banglaTitle:
        'You can increase your sales by retargeting those who leave a footprint on your website.',
      description:
        'Retarget visitors based on their browsing behavior to increase sales',
    },
    {
      icon: <FaClipboardList className="text-3xl text-teal-500" />,
      title: 'Order Management',
      banglaTitle: 'You can easily manage orders.',
      description: 'Easily manage and track all your orders in one place',
    },
    
    {
      icon: <FaBox className="text-3xl text-orange-500" />,
      title: 'Inventory/Stock',
      banglaTitle: 'There is also the facility to manage stock.',
      description: 'Manage inventory and track stock levels efficiently',
    },
    {
      icon: <FaFileInvoiceDollar className="text-3xl text-green-600" />,
      title: 'Invoice/Bill',
      banglaTitle: 'Invoice Print/Download',
      description: 'Print or download invoices for all your orders',
    },
    {
      icon: <FaGoogle className="text-3xl text-red-600" />,
      title: 'Google Tag Manager',
      banglaTitle:
        'You can set up a pixel with server-side tracking and run ads to make a lot of sales.',
      description:
        'Setup server-side tracking with Google Pixel for better ad performance',
    },
    {
      icon: <FaFacebook className="text-3xl text-blue-600" />,
      title: 'Facebook Pixel Setup',
      banglaTitle:
        'You can set up a pixel with server-side tracking and run ads to make a lot of sales.',
      description:
        'Setup server-side tracking with Facebook Pixel for better ad performance',
    },
  ];

  return (
    <section className="  text-white">
      <div className="max-w-7xl mx-auto">
        <div className=" mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Features</h2>
          <p className="mt-2 text-gray-400">
            Necessary features are built-in
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">{feature.icon}</div>

                <h3 className="text-xl font-bold">{feature.title}</h3>
              </div>
              <p className="text-blue-300 font-semibold mb-2">
                {feature.banglaTitle}
              </p>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
