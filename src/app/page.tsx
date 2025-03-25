'use client'

import { AnimatePresence, motion } from "framer-motion";
import Image from 'next/image';
import { useState } from "react";
import { FiClock, FiCommand, FiEye, FiFileText, FiSearch, FiUsers } from "react-icons/fi";
import { ImLab } from "react-icons/im";
import { HorizontalScroll } from '~/components/HorizontalScroll';

const activities = [
  {
    title: "Проектная документация",
    description: "Разработка проектной документации для объектов культурного наследия",
    Icon: FiFileText
  },
  {
    title: "Исследования",
    description: "Архивные исследования, историческая справка, 3D сканирование",
    Icon: FiSearch
  },
  {
    title: "Обследования",
    description: "Инженерно-техническое обследование и лабораторные исследования",
    Icon: FiEye
  },
  {
    title: "Экспертизы",
    description: "Историко-культурные экспертизы и согласование документации",
    Icon: ImLab
  }
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-800"
    >

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className=" min-h-[60vh] bg-gradient-to-r from-blue-900 to-gray-800 py-20 relative overflow-hidden flex flex-col justify-center items-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Animated background elements */}
          <motion.div
            initial={{ opacity: 0.2, scale: 1, x: 0 }}
            animate={{
              opacity: 0.3,
              scale: 1.2,
              x: 100,
              rotate: 45
            }}
            className="absolute -top-16 -right-16 w-48 h-48 bg-green-500/20 rounded-none blur-3d"
            transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse', type: "easeInOut" }}
          />
          <motion.div
            initial={{ opacity: 0.2, scale: 1 }}
            animate={{
              opacity: 0.3,
              scale: 1.2,
              y: 100
            }}
            className="absolute -bottom-16 -left-16 w-48 h-48 bg-yellow-500/20 rounded-full blur-3d"
            transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse', delay: 2, type: "easeInOut" }}
          />
          <motion.div
            initial={{ opacity: 0.2, scale: 1 }}
            animate={{
              opacity: 0.3,
              scale: 1.2,
              x: -100
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/20 rounded-t-full rounded-b-none blur-3d"
            transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', delay: 3, type: "easeInOut" }}
          />
          <motion.div
            initial={{ opacity: 0.1, scale: 1 }}
            animate={{
              opacity: 0.2,
              scale: 1.3,
              x: 50,
              y: 50
            }}
            className="absolute -top-8 -right-8 w-24 h-24 bg-blue-500/20 rounded-2xl blur-3d"
            transition={{ duration: 7, repeat: Infinity, repeatType: 'reverse', delay: 4, type: "easeInOut" }}
          />

          <motion.div
            initial={{ scale: 1.1, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white mb-6 flex justify-center"
          >
            <Image
              src="/logo_white_small.png"
              alt="Ресторико"
              width={500}
              height={300}
              priority
              className="drop-shadow-lg"
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0.7, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Разработка проектной документации по сохранению объектов культурного наследия
          </motion.p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center space-x-4"
          >
            <div className="w-24 h-1 bg-blue-500 rounded-full animate-pulse" />
            <div className="w-24 h-1 bg-purple-500 rounded-full animate-pulse delay-100" />
          </motion.div>
        </div>
      </motion.section>

      {/* Activities Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="py-20 bg-gradient-to-r from-gray-700 to-gray-800 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center text-white mb-12"
          >
            Основные направления
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.95, opacity: 0.8, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-8 bg-gray-800 rounded-2xl border border-gray-700 hover:border-blue-500 transition-colors duration-300"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="bg-gradient-to-br from-blue-400 to-purple-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                >
                  <div className="w-8 h-8 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                    <activity.Icon className="w-5 h-5 text-white" />
                  </div>
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="text-xl font-semibold text-white mb-4"
                >
                  {activity.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="text-gray-300 text-sm leading-relaxed"
                >
                  {activity.description}
                </motion.p>
              </motion.div>
            ))}
          </div>

          {/* Floating shapes */}
          <motion.div
            initial={{ opacity: 0.2, scale: 1, x: 0 }}
            animate={{
              opacity: 0.3,
              scale: 1.2,
              x: 80,
              rotate: -45
            }}
            className="absolute -top-16 -left-16 w-48 h-48 bg-green-500/10 rounded-none blur-3d"
            transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse', type: "easeInOut" }}
          />
          <motion.div
            initial={{ opacity: 0.2, scale: 1 }}
            animate={{
              opacity: 0.3,
              scale: 1.2,
              y: 80
            }}
            className="absolute -bottom-16 -right-16 w-48 h-48 bg-yellow-500/10 rounded-t-full blur-3d"
            transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse', delay: 2, type: "easeInOut" }}
          />
          <motion.div
            initial={{ opacity: 0.1, scale: 1 }}
            animate={{
              opacity: 0.2,
              scale: 1.3,
              x: -50
            }}
            className="absolute -top-8 -right-8 w-24 h-24 bg-purple-500/10 rounded-2xl blur-3d"
            transition={{ duration: 7, repeat: Infinity, repeatType: 'reverse', delay: 4, type: "easeInOut" }}
          />
        </div>
      </motion.section>

      {/* Works Examples Section */}

      <HorizontalScroll />

      {/* Advantages Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="py-20 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0.2, scale: 1, y: 0 }}
            animate={{
              opacity: 0.3,
              scale: 1.2,
              y: 100,
              rotate: 45
            }}
            className="absolute -top-16 -left-16 w-48 h-48 bg-green-500/20 rounded-none blur-3d"
            transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse', type: "easeInOut" }}
          />
          <motion.div
            initial={{ opacity: 0.2, scale: 1 }}
            animate={{
              opacity: 0.3,
              scale: 1.2,
              x: 100
            }}
            className="absolute -bottom-16 -right-16 w-48 h-48 bg-yellow-500/20 rounded-t-full blur-3d"
            transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse', delay: 2, type: "easeInOut" }}
          />
          <motion.div
            initial={{ opacity: 0.1, scale: 1 }}
            animate={{
              opacity: 0.2,
              scale: 1.3,
              x: -50,
              y: -50
            }}
            className="absolute -top-8 -right-8 w-24 h-24 bg-purple-500/20 rounded-2xl blur-3d"
            transition={{ duration: 7, repeat: Infinity, repeatType: 'reverse', delay: 4, type: "easeInOut" }}
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center text-white mb-12"
          >
            Преимущества работы с нами
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Опыт",
                description: "Более 15 лет опыта в реставрации и сохранении культурного наследия",
                Icon: FiClock
              },
              {
                title: "Профессионализм",
                description: "Собственная научно-исследовательская лаборатория и штат квалифицированных специалистов",
                Icon: FiUsers
              },
              {
                title: "Технологии",
                description: "Использование современных технологий и оборудования для точности и качества",
                Icon: FiCommand
              }
            ].map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.95, opacity: 0.8, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-8 bg-gray-800 rounded-2xl border border-gray-700 hover:border-blue-500 transition-colors duration-300 relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 opacity-20 transition-opacity duration-300 hover:opacity-30"
                  style={{ zIndex: -1 }}
                />
                <motion.div
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="bg-gradient-to-br from-blue-400 to-purple-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative"
                >
                  <div className="w-8 h-8 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                    <advantage.Icon className="w-6 h-6 text-white" />
                  </div>
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="text-xl font-semibold text-white mb-4"
                >
                  {advantage.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="text-gray-300 text-sm leading-relaxed"
                >
                  {advantage.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Clients Reviews Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-bold text-center text-white mb-12"
          >
            Отзывы клиентов и партнёров
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Александр С.",
                company: "Государственный музей",
                text: "Работа выполнена на высшем уровне. Все сроки соблюдены, качество документации безупречно."
              },
              {
                name: "Елена М.",
                company: "Архитектурное бюро",
                text: "Профессионалы своего дела. Глубокое понимание особенностей культурного наследия."
              },
              {
                name: "Иван К.",
                company: "Реставрационная мастерская",
                text: "Отличное взаимодействие и понимание задач. Рекомендуем как надежного партнера."
              }
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.95, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-gray-700 rounded-lg"
              >
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 hover:scale-110 transition-transform"
                >
                  <FiFileText className="w-6 h-6 text-white" />
                </motion.div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-gray-300 mb-4"
                >
                  &quot;{review.text}&quot;
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center justify-start"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center mr-4">
                    <Image
                      src="/logo_white_small.png"
                      alt="Client"
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-white font-medium">{review.name}</p>
                    <p className="text-gray-400 text-sm">{review.company}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="py-30 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0.2, scale: 1 }}
            animate={{ opacity: 0.3, scale: 1.2 }}
            className="absolute -top-16 -right-16 w-64 h-64 bg-purple-500/20 rounded-full blur-3d"
            transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', type: "easeInOut" }}
          />
          <motion.div
            initial={{ opacity: 0.2, scale: 1 }}
            animate={{ opacity: 0.3, scale: 1.2 }}
            className="absolute -bottom-16 -left-16 w-64 h-64 bg-blue-500/20 rounded-full blur-3d"
            transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', delay: 2, type: "easeInOut" }}
          />
          <motion.h2
            initial={{ scale: 1.05, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="text-3xl font-bold text-white mb-6"
          >
            Оставьте заявку
          </motion.h2>
          <motion.p
            initial={{ opacity: 0.8, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl text-gray-300 mb-8 max-w-xl mx-auto"
          >
            Наш опыт и профессионализм помогут сохранить культурное наследие вашего объекта
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-500 transition-colors"
          >
            Связаться с нами
          </motion.button>
        </div>
      </motion.section>

      {/* Contact Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center p-4"
            onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800 rounded-lg p-8 max-w-md w-full z-20"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Связаться с нами</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">Имя</label>
                  <input
                    type="text"
                    className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Сообщение</label>
                  <textarea
                    rows={4}
                    className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:border-blue-500 focus:outline-none"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-500 transition-colors"
                >
                  Отправить
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}
