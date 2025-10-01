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
      icon: <FaRocket className="text-3xl text-blue-500" />,
      title: 'Incomplete Order',
      banglaTitle: 'ইনকমপ্লিট অর্ডার ডাটা, যা সেল বাড়াবে 10x',
      description: 'Track and recover abandoned carts to boost sales by 10x',
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
      banglaTitle: 'ফ্রড কাস্টোমারের আইপি ব্যান করার সুবিধা',
      description: 'Block fraudulent customers by their IP addresses',
    },
    {
      icon: <FaLaptop className="text-3xl text-purple-500" />,
      title: 'Landing Page',
      banglaTitle:
        'ইকমার্স ওয়েবসাইটে বিশেষ প্রোডাক্টের মার্কেটিংয়ের জন্য স্পেশাল ল্যান্ডিং পেজ',
      description:
        'Create special landing pages for marketing specific products',
    },
    {
      icon: <FaTruck className="text-3xl text-yellow-500" />,
      title: 'Courier Entry',
      banglaTitle:
        'স্টিডফাস্ট, পাঠাও এবং রেডেক্স কুরিয়ারে এক ক্লিকে অর্ডার ডিটেইল এন্ট্রি',
      description: 'One-click order entry for popular courier services',
    },
    {
      icon: <FaMoneyBillAlt className="text-3xl text-indigo-500" />,
      title: 'Amount Adjust',
      banglaTitle: 'কুরিয়ারে এন্ট্রির আগে অর্ডার অ্যামাউন্ট এডজাস্ট করা যায়',
      description: 'Adjust order amounts before finalizing courier entry',
    },
    {
      icon: <FaShoePrints className="text-3xl text-pink-500" />,
      title: 'Foot Print',
      banglaTitle:
        'যারা ওয়েবসাইটে ফুট প্রিন্ট রেখে যাবে তাদের রিটাগেটিং করে আপনার সেলস বাড়াতে পারবেন',
      description:
        'Retarget visitors based on their browsing behavior to increase sales',
    },
    {
      icon: <FaClipboardList className="text-3xl text-teal-500" />,
      title: 'Order Management',
      banglaTitle: 'অর্ডার সহজে ম্যানেজ করতে পারবেন',
      description: 'Easily manage and track all your orders in one place',
    },
    {
      icon: <FaFacebook className="text-3xl text-blue-600" />,
      title: 'Pixel Setup',
      banglaTitle:
        'সার্ভার সাইড ট্র্যাকিং সহ পিক্সেল সেটাপ করে এড রান করে প্রচুর সেল করতে পারবেন',
      description:
        'Setup server-side tracking with Facebook Pixel for better ad performance',
    },
    {
      icon: <FaBox className="text-3xl text-orange-500" />,
      title: 'Stock',
      banglaTitle: 'স্টক ম্যানেজ করার সুবিধাও থাকছে',
      description: 'Manage inventory and track stock levels efficiently',
    },
    {
      icon: <FaFileInvoiceDollar className="text-3xl text-green-600" />,
      title: 'Invoice',
      banglaTitle: 'ইনভয়েস প্রিন্ট / ডাউনলোড',
      description: 'Print or download invoices for all your orders',
    },
    {
      icon: <FaGoogle className="text-3xl text-red-600" />,
      title: 'Pixel Setup',
      banglaTitle:
        'সার্ভার সাইড ট্র্যাকিং সহ পিক্সেল সেটাপ করে এড রান করে প্রচুর সেল করতে পারবেন',
      description:
        'Setup server-side tracking with Google Pixel for better ad performance',
    },
  ];

  return (
    <section className="  text-white">
      <div className="max-w-7xl mx-auto">
        <div className=" mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Features</h2>
          <p className="mt-2 text-gray-400">
            প্রয়োজনীয় ফিচার ইনবিল্ট করা হয়ে থাকে
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
