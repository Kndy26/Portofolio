import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } },
}

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-padding overflow-hidden"
    >
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] opacity-50" />

      {/* Gradient orb */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] dark:bg-primary/5" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.p variants={item} className="section-label">
              {t('hero.label')}
            </motion.p>

            <motion.h1
              variants={item}
              className="font-headline font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.08] text-neutral-900 dark:text-white"
            >
              {t('hero.titleLine1')}
              <br />
              {t('hero.titleLine2')}
              <br />
              {t('hero.titleLine3')}{' '}
              <span className="relative inline-block">
                <span className="relative z-10">{t('hero.titleHighlight')}</span>
                <motion.span
                  className="absolute bottom-1 left-0 right-0 h-3 bg-primary/20 dark:bg-primary/30 rounded-sm -z-0"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 0.6, ease: 'easeOut' }}
                  style={{ originX: 0 }}
                />
              </span>
              .
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 text-lg text-neutral-500 dark:text-neutral-400 max-w-lg leading-relaxed"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-all duration-200 shadow-lg shadow-primary/25"
              >
                {t('hero.viewProjects')}
                <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center px-6 py-3.5 border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm font-medium rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-200"
              >
                {t('hero.getInTouch')}
              </a>
            </motion.div>
          </motion.div>

          {/* Decorative visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
            className="hidden lg:block relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-800">
              {/* Abstract code visual */}
              <div className="absolute inset-0 p-8 font-mono text-sm text-neutral-400 dark:text-neutral-600 leading-relaxed overflow-hidden select-none">
                <div className="space-y-2 opacity-60">
                  <p><span className="text-primary">const</span> portfolio = {'{'}</p>
                  <p className="pl-4">name: <span className="text-emerald-500">"Kennedy Wang"</span>,</p>
                  <p className="pl-4">role: <span className="text-emerald-500">"Computer Science Student"</span>,</p>
                  <p className="pl-4">passion: <span className="text-emerald-500">"Building things"</span>,</p>
                  <p className="pl-4">semester: <span className="text-amber-500">6</span>,</p>
                  <p className="pl-4">skills: [</p>
                  <p className="pl-8"><span className="text-emerald-500">"React"</span>,</p>
                  <p className="pl-8"><span className="text-emerald-500">"Node.js"</span>,</p>
                  <p className="pl-8"><span className="text-emerald-500">"TypeScript"</span>,</p>
                  <p className="pl-8"><span className="text-emerald-500">"Python"</span>,</p>
                  <p className="pl-4">],</p>
                  <p className="pl-4">available: <span className="text-primary">true</span>,</p>
                  <p>{'}'};
                  </p>
                </div>
              </div>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-100 dark:from-neutral-800 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-4 bg-white dark:bg-dark-surface shadow-xl rounded-xl px-4 py-3 border border-neutral-100 dark:border-dark-border"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  {t('hero.availableBadge')}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
