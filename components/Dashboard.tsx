import React from 'react';
import { motion } from 'framer-motion';

const Dashboard: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Card Title</h3>
          <p className="mt-2">Card content goes here.</p>
        </motion.div>
        {/* Add more cards as needed */}
      </div>
    </div>
  );
};

export default Dashboard;
