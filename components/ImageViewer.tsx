import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X } from 'lucide-react'

interface ImageViewerProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
}

export function ImageViewer({ isOpen, onClose, imageSrc }: ImageViewerProps) {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative max-w-4xl w-full h-[80vh] m-4"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
          >
            <X className="h-8 w-8 text-white" />
          </button>
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <Image
              src={imageSrc}
              alt="Image en plein écran"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
} 