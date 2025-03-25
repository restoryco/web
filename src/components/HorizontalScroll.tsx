import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const images = [
  '/assets/features/1.webp',
  '/assets/features/2.webp',
  '/assets/features/3.jpg',
  '/assets/features/4.jpg',
]

export const HorizontalScroll = () => {
  const targetRef = useRef(null)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openImage = (index: number) => {
    setSelectedImage(index)
  }

  const closeImage = () => {
    setSelectedImage(null)
  }

  const { scrollYProgress } = useScroll({ target: targetRef })
  const x = useTransform(scrollYProgress, [0, 1], ["45%", "-60%"])

  return (

    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7 }}
      className="py-20 h-[500vh] relative"
      ref={targetRef}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center text-white mb-12 sticky top-[10vh] bottom-[25vh]"
      >
        Примеры наших работ
      </motion.h2>

      <motion.div
        initial={{ opacity: 0.2, scale: 1 }}
        animate={{
          opacity: 0.3,
          scale: 1.2,
          y: 100
        }}
        className="absolute bottom-16 right-60 w-48 h-48 bg-yellow-500/20 rounded-full blur-3d"
        transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse', delay: 2, type: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0.2, scale: 1, x: 0 }}
        animate={{
          opacity: 0.3,
          scale: 1.2,
          x: 100,
          rotate: 45
        }}
        className="absolute top-16 left-50 w-48 h-48 bg-green-500/20 rounded-none blur-3d"
        transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse', type: "easeInOut" }}
      />
      <div className="px-8 sm:px-6 lg:px-8 h-[80vh] sticky top-[0px] overflow-hidden flex items-center justify-center pt-[25vh]">

        <motion.div
          className="flex items-center justify-center gap-8 px-10"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          style={{ x }}
        >
          {images.map((src, i) => (
            <div key={i}>
              <motion.img
                src={src}
                className="max-w-[50vw] object-cover rounded-lg cursor-pointer"
                alt="Text image"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => openImage(i)}
              />
            </div>
          ))}
        </motion.div>

      </div>

      {selectedImage !== null && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.img
            src={images[selectedImage]}
            className="max-w-[90vw] max-h-[90vh] object-contain"
            alt="Selected image"
            onClick={closeImage}
          />
          <button
            className="absolute top-4 right-4"
            onClick={closeImage}
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </motion.div>
      )}
    </motion.section>
  )
}
