import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '../components/BrandIcons'
import SectionReveal from '../components/SectionReveal'
import { useLanguage } from '../i18n/LanguageContext'

const categoryKeys = [
  { key: 'projects.filterAll', value: 'All' },
  { key: 'projects.filterWeb', value: 'Web' },
  { key: 'projects.filterMobile', value: 'Mobile' },
  { key: 'projects.filterOther', value: 'Other' },
]

const projects = [
  {
    id: 1,
    title: 'Website Cybersafe Youth',
    description:
      'CyberSafe Youth is an interactive React SPA that teaches teens how to protect themselves from online manipulation and cyber grooming on gaming and chat platforms.',
    tech: ['React.js', 'Tailwind CSS', 'Firebase'],
    category: 'Web',
    github: 'https://github.com/Kndy26/website-cybersafe-youth',
    live: 'https://website-cybersafe-youth.web.app/',
    color: 'from-slate-800 to-slate-900',
    size: 'small',
  },
  {
    id: 2,
    title: 'Portofolio Website',
    description:
      'A modern, responsive personal portfolio website built with React and Tailwind CSS, showcasing projects, skills, and professional background.',
    tech: ['React.js', 'Tailwind CSS'],
    category: 'Web',
    github: 'https://github.com',
    live: 'https://example.com',
    color: 'from-blue-900 to-indigo-900',
    size: 'large',
  },
  {
    id: 3,
    title: 'Simple Running Path Generator',
    description:
      'A Flutter application designed to generates perfectly calculated, closed-loop running routes based on a target step count, or allows users to free-hand draw a shape on the map and perfectly snap it to real-world streets.',
    tech: ['Flutter', 'OpenRouteService API'],
    category: 'Mobile',
    github: 'https://github.com/Kndy26/running_app',
    live: null,
    color: 'from-neutral-700 to-neutral-900',
    size: 'large',
  },
  {
    id: 4,
    title: 'Temple of Banaspati FPS Game',
    description:
      'A 3D horror FPS game where players explore a haunted temple filled with puzzles and enemies.',
    tech: ['Unity', 'C#'],
    category: 'Other',
    github: 'https://github.com/Kndy26/Temple-of-Banaspati-FPS',
    live: null,
    color: 'from-emerald-800 to-teal-900',
    size: 'large',
  },
  {
    id: 5,
    title: 'Jet Lag Sleep Optimizer',
    description:
      'A desktop application built with python designed to help travelers minimize jet lag by analyzing your flight\'s departure and destination cities.',
    tech: ['Python', 'CustomTkinter', 'GeoPy', 'timezonefinder'],
    category: 'Other',
    github: 'https://github.com/Kndy26/jetlag-optimizer',
    live: null,
    color: 'from-sky-800 to-cyan-900',
    size: 'small',
  },
  // {
  //   id: 6,
  //   title: 'CloudSync Dashboard',
  //   description:
  //     'Multi-tenant cloud resource management dashboard with real-time monitoring and alerting.',
  //   tech: ['Next.js', 'Tailwind', 'AWS'],
  //   category: 'Web',
  //   github: 'https://github.com',
  //   live: 'https://example.com',
  //   color: 'from-violet-800 to-purple-900',
  //   size: 'small',
  // },
  {
    id: 7,
    title: 'MuGenGym App',
    description:
      'MugenGym is a Flutter-based mobile app that streamlines gym management by connecting Admins and Members via role-based access.',
    tech: ['Flutter', 'Firebase'],
    category: 'Mobile',
    github: 'https://github.com/Kndy26/gym_member',
    live: null,
    color: 'from-orange-800 to-red-900',
    size: 'small',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 16 },
}

function ProjectCard({ project, t }) {
  const [hovered, setHovered] = useState(false)
  const isLarge = project.size === 'large'

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
      className="break-inside-avoid mb-5 group relative rounded-2xl overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.color} transition-transform duration-500 ${
          hovered ? 'scale-105' : 'scale-100'
        }`}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem]" />

      {/* Content */}
      <div
        className={`relative z-10 flex flex-col w-full ${
          isLarge
            ? 'p-8 md:p-10 min-h-[320px] md:min-h-[380px]'
            : 'p-6 md:p-8 min-h-[220px] md:min-h-[260px]'
        }`}
      >
        {/* Tech badges - top */}
        <div className="flex flex-wrap gap-2 w-full">
          {project.tech.map((t) => (
            <span
              key={t}
              className={`font-medium tracking-wide uppercase bg-white/10 text-white/70 rounded-md backdrop-blur-sm ${
                isLarge
                  ? 'px-3 py-1.5 text-xs'
                  : 'px-2.5 py-1 text-[11px]'
              }`}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Inner Content Wrapper */}
        <div className="flex-1 flex flex-col justify-center items-start w-full gap-5 mt-4">
          {/* Title & description */}
          <div className="flex flex-col gap-2 w-full">
            <h3
              className={`font-headline font-bold text-white ${
                isLarge
                  ? 'text-2xl md:text-3xl'
                  : 'text-xl md:text-2xl'
              }`}
            >
              {project.title}
            </h3>
            <p
              className={`text-white/60 leading-relaxed ${
                isLarge
                  ? 'text-sm md:text-base max-w-lg'
                  : 'text-sm max-w-md'
              }`}
            >
              {project.description}
            </p>
          </div>

          {/* Links */}
          <motion.div
            initial={false}
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-4 w-full"
          >
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition-colors"
              >
                <GithubIcon size={14} />
                <span>{t('projects.code')}</span>
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition-colors"
              >
                <ExternalLink size={14} />
                <span>{t('projects.liveDemo')}</span>
              </a>
            )}
            <ArrowUpRight
              size={20}
              className="ml-auto text-white/40 group-hover:text-white/80 transition-colors"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="py-24 md:py-32 section-padding">
      <div className="section-container">
        <SectionReveal>
          <p className="section-label">{t('projects.label')}</p>
          <h2 className="section-heading">{t('projects.heading')}</h2>
        </SectionReveal>

        {/* Filter tabs */}
        <SectionReveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-2">
            {categoryKeys.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  filter === cat.value
                    ? 'bg-primary text-white shadow-md shadow-primary/25'
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                }`}
              >
                {t(cat.key)}
              </button>
            ))}
          </div>
        </SectionReveal>

        {/* Masonry columns layout */}
        <div className="mt-10 columns-1 md:columns-2 gap-5">
          <AnimatePresence mode="wait">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} t={t} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
