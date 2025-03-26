"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useInView } from 'react-intersection-observer'
import { Film, Video, Music, Mail, Linkedin, Instagram, Box } from 'lucide-react'
import { HeroScene } from '@/components/hero-scene'
import { PremiereProIcon, AfterEffectsIcon, DaVinciResolveIcon, NotionIcon } from '@/components/software-icons'
import Image from 'next/image'
import { VideoModal } from '@/components/video-modal'
import { useState, useEffect } from 'react'
import { LoadingScreen } from '@/components/loading-screen'
import { Suspense } from 'react'
import { FallbackBackground } from '@/components/fallback-background'

//Images
import About from "../public/images/about.webp";

const sectionVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 0.6,
      ease: "easeIn"
    }
  }
}

export default function Home() {
  const [started, setStarted] = useState(false)
  const [ready, setReady] = useState(false)
  const [sceneLoaded, setSceneLoaded] = useState(false)
  const [sceneFailed, setSceneFailed] = useState(false) 
  const [heroRef, heroInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [projectsRef, projectsInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [skillsRef, skillsInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [selectedVideo, setSelectedVideo] = useState<{
    url: string;
    title: string;
    description: string;
  } | null>(null);

  const projects = [
    {
      id: 1,
      title: "Planète",
      description: "Entrainement personnel de 3D After Effect.",
      videoUrl: "/videos/Planete.mp4",
      thumbnail: "/images/planete_thumbnail.webp"
    },
    {
      id: 2,
      title: "Murder",
      description: "Explication d'un concept youtube dans le cadre d'un projet à l'école.",
      videoUrl: "/videos/Murder.mp4",
      thumbnail: "/images/murder_thumbnail.webp"
    },
    {
      id: 3,
      title: "Château",
      description: "Entrainement personnel de motion design.",
      videoUrl: "/videos/Chateau.mp4",
      thumbnail: "/images/motion_thumbnail.webp"
    },
    {
      id: 4,
      title: "Champ contre champ",
      description: "Extrait d'un exercice de champ contre champ dans le cadre d'un projet à l'école.",
      videoUrl: "/videos/Champ_contre_champ_portfolio.mp4",
      thumbnail: "/images/champ_thumbnail.webp"
    }
  ];

  useEffect(() => {
    if (sceneLoaded) {
      // Attendre un peu pour s'assurer que tout est bien chargé
      const timeout = setTimeout(() => {
        setStarted(true)
      }, 500)
      return () => clearTimeout(timeout)
    }
    
    // Timer de secours pour démarrer le site même si la scène ne se charge pas
    const fallbackTimer = setTimeout(() => {
      console.log('Scene loading fallback timer triggered')
      if (!sceneLoaded) {
        setSceneFailed(true)
        setStarted(true)
      }
    }, 12000)
    
    return () => clearTimeout(fallbackTimer)
  }, [sceneLoaded])

  return (
    <>
      <LoadingScreen started={started} onStarted={() => setReady(true)} />
      <main className={`min-h-screen ${!ready ? 'hidden' : ''}`}>
        {/* Hero Section */}
        <section
          id="hero"
          ref={heroRef}
          className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-blue-900/20 dark:to-background"
        >
          {!sceneFailed ? (
            <Suspense fallback={<FallbackBackground />}>
              <HeroScene onLoaded={() => setSceneLoaded(true)} />
            </Suspense>
          ) : (
            <FallbackBackground />
          )}
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 bg-grid-white/[0.09] bg-[size:50px_50px]" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-4"
          >
            <h1 className="text-3xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Étudiant passionné,
              <br />
              prêt à apporter ma créativité à votre équipe.
            </h1>
            <p className="text-md md:text-xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            🎯 À la recherche d&apos;une alternance/stage en montage, motion design et 3D 🚀
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Découvrir mes projets
            </Button>
          </motion.div>
        </section>

        {/* About Section */}
        <motion.section
          id="about"
          ref={aboutRef}
          variants={sectionVariants}
          initial="hidden"
          animate={aboutInView ? "visible" : "exit"}
          className="py-20 px-4 relative"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-3xl" />
                <Image
                  src={About}
                  alt="Portrait"
                  className="relative rounded-3xl w-full h-[600px] object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">À propos de moi</h2>
                <p className="text-muted-foreground mb-6">
                  Passionné par l&apos;audiovisuel, je suis actuellement en première année de BTS Audiovisuel. J&apos;aime particulièrement le montage vidéo, le Motion Design et la 3D. Mon parcours est guidé par une volonté constante d&apos;apprendre et d&apos;innover dans ce domaine dynamique.
                  <br />
                  <br />
                  Ma formation m&apos;a permis de développer une solide base technique, combinant créativité et maîtrise des outils professionnels. Je m&apos;épanouis particulièrement dans la réalisation de projets qui permettent de raconter des histoires impactantes et de transmettre des émotions.
                  <br />
                  <br />
                  Mon approche professionnelle se caractérise par un mélange de technique et de sensibilité artistique, toujours avec le souci du détail. Afin de continuer à développer mes compétences techniques et créatives.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-card">
                    <Video className="h-6 w-6 text-blue-500 mb-2" />
                    <h3 className="font-semibold">Montage</h3>
                  </div>
                  <div className="p-4 rounded-lg bg-card">
                    <Film className="h-6 w-6 text-blue-500 mb-2" />
                    <h3 className="font-semibold">Motion Design</h3>
                  </div>
                  <div className="p-4 rounded-lg bg-card">
                    <Music className="h-6 w-6 text-blue-500 mb-2" />
                    <h3 className="font-semibold">Sound Design</h3>
                  </div>
                  <div className="p-4 rounded-lg bg-card">
                    <Box className="h-6 w-6 text-blue-500 mb-2" />
                    <h3 className="font-semibold">3D</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          ref={projectsRef}
          variants={sectionVariants}
          initial="hidden"
          animate={projectsInView ? "visible" : "exit"}
          className="py-20 px-4 bg-card"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={projectsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-12 text-center">Mes Projets</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <div 
                    key={project.id} 
                    className="group relative overflow-hidden rounded-xl cursor-pointer"
                    onClick={() => setSelectedVideo({
                      url: project.videoUrl,
                      title: project.title,
                      description: project.description
                    })}
                  >
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        width={800}
                        height={450}
                        className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-200">{project.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          {selectedVideo && (
            <VideoModal
              isOpen={!!selectedVideo}
              onClose={() => setSelectedVideo(null)}
              videoUrl={selectedVideo.url}
              title={selectedVideo.title}
              description={selectedVideo.description}
            />
          )}
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          ref={skillsRef}
          variants={sectionVariants}
          initial="hidden"
          animate={skillsInView ? "visible" : "exit"}
          className="py-20 px-4"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-12 text-center">Compétences</h2>
              <div className="grid md:grid-cols-2 gap-24 items-center mx-auto">
                <div className="p-6 rounded-xl bg-card">
                  <h3 className="text-xl font-bold mb-4">Logiciels</h3>
                  <ul className="space-y-6">
                    <li className="flex items-center gap-4">
                      <PremiereProIcon className="w-8 h-8 flex-shrink-0" />
                      <span>Premiere Pro</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <AfterEffectsIcon className="w-8 h-8 flex-shrink-0" />
                      <span>After Effects</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <DaVinciResolveIcon className="w-8 h-8 flex-shrink-0" />
                      <span>DaVinci Resolve</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <NotionIcon className="w-8 h-8 flex-shrink-0" />
                      <span>Notion</span>
                    </li>
                  </ul>
                </div>
                <div className="p-6 rounded-xl bg-card">
                  <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
                  <ul className="space-y-6">
                    <li className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                      <span>Travail d&apos;équipe</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                      <span>Autonome</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                      <span>Créativité</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                      <span>Adaptabilité et gestion du stress</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          id="contact" 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          className="py-20 px-4"
        >
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Contactez-moi</h2>
            <div className="flex justify-center space-x-6 mb-12">
              <a href="mailto:pro.opigez@gmail.com" className="hover:text-blue-500 transition-colors">
                <Mail className="h-8 w-8" />
              </a>
              <a href="https://www.linkedin.com/in/noa-opigez-592470332" target='_blank' className="hover:text-blue-500 transition-colors">
                <Linkedin className="h-8 w-8" />
              </a>
              <a href="https://www.instagram.com/noa_prods" target='_blank' className="hover:text-blue-500 transition-colors">
                <Instagram className="h-8 w-8" />
              </a>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  )
}