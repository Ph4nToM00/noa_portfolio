import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useEffect, useRef } from "react"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoUrl: string
  title: string
  description: string
}

export function VideoModal({ isOpen, onClose, videoUrl, title, description }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play()
    }
  }, [isOpen])

  const handleVideoLoad = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget
    video.volume = 0.1
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="relative aspect-video">
          <video
            ref={videoRef}
            src={videoUrl}
            controls
            autoPlay
            onLoadedMetadata={handleVideoLoad}
            className="w-full h-full rounded-lg"
          />
        </div>
        <p className="mt-4 text-muted-foreground">{description}</p>
      </DialogContent>
    </Dialog>
  )
} 