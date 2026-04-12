import SectionReveal from '../components/SectionReveal'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const skillCategories = [
  {
    key: 'frontend',
    skills: [
      { name: 'React', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'TypeScript', icon: '🔷' },
      { name: 'Tailwind CSS', icon: '🎨' },
      { name: 'HTML / CSS', icon: '🌐' },
      { name: 'Flutter / Dart', icon: '🔷' },
    ],
  },
  {
    key: 'backend',
    skills: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Python', icon: '🐍' },
      { name: 'MySQL', icon: '🗄️' },
    ],
  },
  {
    key: 'toolsOthers',
    skills: [
      { name: 'Git & GitHub', icon: '🔀' },
      { name: 'Unity', icon: '🎮' },
      { name: 'Figma', icon: '🖼️' },
      { name: 'VS Code', icon: '💻' },
      { name: 'Firebase', icon: '🔥' },
    ],
  },
]

const planningToLearn = [
  { name: 'Go', icon: '🐹' },
  { name: 'Rust', icon: '🦀' },
  { name: 'C#', icon: '🟣' },
  { name: 'C++', icon: '⚙️' },
  { name: 'Java', icon: '☕' },
  { name: 'Three.js', icon: '🧊' },
  { name: 'Docker', icon: '🐳' },
  { name: 'AWS', icon: '☁️' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Express', icon: '📡' },
  { name: 'Linux', icon: '🐧' },
  { name: 'Framer Motion', icon: '🎬' },
]

export default function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="py-24 md:py-32 section-padding bg-neutral-50 dark:bg-dark-surface">
      <div className="section-container">
        <SectionReveal>
          <p className="section-label">{t('skills.label')}</p>
          <h2 className="section-heading">{t('skills.heading')}</h2>
          <p className="mt-4 text-neutral-500 dark:text-neutral-400 max-w-lg text-lg">
            {t('skills.description')}
          </p>
        </SectionReveal>

        {/* Existing skill categories */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 md:gap-10">
          {skillCategories.map((cat, catIdx) => (
            <SectionReveal key={cat.key} delay={catIdx * 0.1}>
              <div className="space-y-4">
                <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-neutral-400 dark:text-neutral-500">
                  {t(`skills.${cat.key}`)}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {cat.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.04, y: -2 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-dark-bg border border-neutral-200 dark:border-dark-border hover:border-primary/30 dark:hover:border-primary/30 hover:shadow-md transition-all duration-300 cursor-default"
                    >
                      <span className="text-lg flex-shrink-0">{skill.icon}</span>
                      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 truncate">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Planning to Learn section */}
        <SectionReveal delay={0.35}>
          <div className="mt-16 pt-16 border-t border-neutral-200 dark:border-dark-border">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles size={14} className="text-neutral-400 dark:text-neutral-500" />
              <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-neutral-400 dark:text-neutral-500">
                {t('skills.planningToLearn')}
              </h3>
            </div>
            <p className="text-sm text-neutral-400 dark:text-neutral-500 mb-8 max-w-md">
              {t('skills.planningToLearnDesc')}
            </p>
            <div className="flex flex-wrap gap-3">
              {planningToLearn.map((skill) => (
                <div
                  key={skill.name}
                  className="group relative flex items-center gap-2.5 px-4 py-3 rounded-xl bg-neutral-50 dark:bg-dark-bg/50 border border-dashed border-neutral-300 dark:border-neutral-700 transition-colors duration-300 cursor-default"
                >
                  <span className="text-base flex-shrink-0 opacity-60 group-hover:opacity-80 transition-opacity">
                    {skill.icon}
                  </span>
                  <span className="text-sm font-medium text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-500 dark:group-hover:text-neutral-400 transition-colors">
                    {skill.name}
                  </span>
                  <span className="absolute -top-2 -right-1 px-1.5 py-0.5 text-[9px] font-bold tracking-wider uppercase bg-neutral-200 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400 rounded-md leading-none">
                    {t('skills.upcoming')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
