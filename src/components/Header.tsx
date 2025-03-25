'use client'

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const services = [
  {
    name: 'Сбор исходно-разрешительной документации',
    subItems: []
  },
  {
    name: 'Проектирование и обследование объектов',
    subItems: [
      '3D лазерное сканирование',
      'Обмерные чертежи и картограммы дефектов',
      'Инженерно-техническое обследование'
    ]
  },
  {
    name: 'Исследования и анализ',
    subItems: [
      'Химико-технологические исследования',
      'Историческая справка и архивные данные'
    ]
  },
  {
    name: 'Проектная документация',
    subItems: [
      'Архитектурные решения',
      'Конструктивные решения',
      'Инженерные сети и слаботочные сети',
      'Сметная документация'
    ]
  },
  {
    name: 'Экспертизы и согласования',
    subItems: [
      'Историко-культурная экспертиза',
      'Согласование с органами охраны',
      'Государственная экспертиза'
    ]
  },
  {
    name: 'Дополнительные услуги',
    subItems: [
      'Авторский надзор',
      'Организация строительства'
    ]
  }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="bg-gray-800 py-6"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center"
          >
            <Image
              src="/logo_white_small.png"
              alt="Ресторико"
              width={180}
              height={38}
              priority
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="md:flex space-x-8"
          >
          </motion.div>
          <a href="#" className="text-gray-300 hover:text-white transition-colors hidden md:flex">
            О компании
          </a>
          <div className="relative">
            <button
              className="text-gray-300 hover:text-white transition-colors flex items-center hidden md:flex"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              Услуги
              <FiChevronDown className="ml-2 inline-block" />
            </button>
            <AnimatePresence mode='wait'>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ type: "easeOut" }}
                  className="absolute z-50 top-10 right-0 w-64 bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-700"
                  ref={menuRef}
                >
                  <nav className="space-y-1">
                    {services.map((service, index) => (
                      <div key={index}>
                        <button className="w-full text-left text-gray-300 hover:text-white flex justify-between items-center text-sm">
                          {service.name}
                        </button>
                        {service.subItems && (
                          <ul className="ml-4 mt-1 space-y-1">
                            {service.subItems.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <a
                                  href="#"
                                  className="text-gray-400 hover:text-white text-xs"
                                >
                                  {subItem}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a href="#" className="text-gray-300 hover:text-white transition-colors hidden md:flex">
            Проекты
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors hidden md:flex">
            Контакты
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence mode='wait'>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "easeOut" }}
            className="fixed inset-0 top-20 z-50 bg-gray-800 p-4 md:hidden"
            ref={mobileMenuRef}
          >
            <nav className="space-y-4">
              {services.map((service, index) => (
                <div key={index}>
                  <button
                    className="w-full text-left text-gray-300 hover:text-white flex justify-between items-center"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {service.name}
                  </button>
                  {service.subItems && (
                    <ul className="ml-4 mt-1 space-y-1">
                      {service.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a
                            href="#"
                            className="text-gray-400 hover:text-white text-xs block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

