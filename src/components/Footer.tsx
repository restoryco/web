'use client'

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="bg-gray-800 text-white py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            className="text-white"
          >
            <h3 className="text-xl font-bold mb-4">ООО «Ресторико»</h3>
            <p className="text-gray-300">Лидер в области сохранения культурного наследия</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-white"
          >
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <p className="text-gray-300">Телефон: +7 (000) 000-00-00</p>
            <p className="text-gray-300">Email: info@restoriko.ru</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white"
          >
            <h3 className="text-xl font-bold mb-4">Адрес</h3>
            <p className="text-gray-300">Москва, ул. Ленина, д. 123</p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}

