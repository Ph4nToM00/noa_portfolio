"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useInView } from 'react-intersection-observer'
import { Camera, Film, Video, Music, Mail, Github, Linkedin, Instagram } from 'lucide-react'
import { HeroScene } from '@/components/hero-scene'

export default function Home() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        id="hero"
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-blue-900/20 to-background"
      >
        <HeroScene />
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            L'image et le son,
            <br />
            au cœur de mes créations
          </h1>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Étudiant passionné en audiovisuel, je donne vie à des histoires à travers la vidéo, le son et l'animation.
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
      <section
        id="about"
        ref={aboutRef}
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
              <img
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80"
                alt="Portrait"
                className="relative rounded-3xl w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">À propos de moi</h2>
              <p className="text-muted-foreground mb-6">
                Passionné par l'audiovisuel depuis mon plus jeune âge, je suis actuellement en formation pour devenir réalisateur. Mon approche créative combine techniques traditionnelles et innovations numériques pour donner vie à des projets uniques.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-card">
                  <Film className="h-6 w-6 text-blue-500 mb-2" />
                  <h3 className="font-semibold">Réalisation</h3>
                </div>
                <div className="p-4 rounded-lg bg-card">
                  <Camera className="h-6 w-6 text-blue-500 mb-2" />
                  <h3 className="font-semibold">Photographie</h3>
                </div>
                <div className="p-4 rounded-lg bg-card">
                  <Video className="h-6 w-6 text-blue-500 mb-2" />
                  <h3 className="font-semibold">Montage</h3>
                </div>
                <div className="p-4 rounded-lg bg-card">
                  <Music className="h-6 w-6 text-blue-500 mb-2" />
                  <h3 className="font-semibold">Sound Design</h3>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        ref={projectsRef}
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
              {[1, 2, 3].map((project) => (
                <div key={project} className="group relative overflow-hidden rounded-xl">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/photo-167${project}000000-xxxxx?auto=format&fit=crop&q=80`}
                      alt={`Projet ${project}`}
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Projet {project}</h3>
                      <p className="text-gray-200">Description courte du projet</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        ref={skillsRef}
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Compétences</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl bg-card">
                <h3 className="text-xl font-bold mb-4">Logiciels</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
                    Premiere Pro
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
                    After Effects
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
                    DaVinci Resolve
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-xl bg-card">
                <h3 className="text-xl font-bold mb-4">Techniques</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
                    Cadrage
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
                    Éclairage
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
                    Prise de son
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-xl bg-card">
                <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
                    Direction d'équipe
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
                    Gestion de projet
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
                    Créativité
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Contactez-moi</h2>
          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="hover:text-blue-500 transition-colors">
              <Mail className="h-8 w-8" />
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              <Instagram className="h-8 w-8" />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}