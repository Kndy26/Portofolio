import SectionReveal from '../components/SectionReveal'
import { GraduationCap, Calendar } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  const education = [
    {
      institution: t('about.edu1Institution'),
      degree: t('about.edu1Degree'),
      years: t('about.edu1Years'),
      current: true,
    },
    {
      institution: t('about.edu2Institution'),
      degree: t('about.edu2Degree'),
      years: t('about.edu2Years'),
      current: false,
    },
  ]

  const highlights = [
    { label: t('about.highlightSemesterLabel'), value: t('about.highlightSemesterValue') },
    { label: t('about.highlightFocusLabel'), value: t('about.highlightFocusValue') },
    { label: t('about.highlightGpaLabel'), value: t('about.highlightGpaValue') },
  ]

  return (
    <section id="about" className="py-24 md:py-32 section-padding bg-neutral-50 dark:bg-dark-surface">
      <div className="section-container">
        <SectionReveal>
          <p className="section-label">{t('about.label')}</p>
          <h2 className="section-heading">{t('about.heading')}</h2>
        </SectionReveal>

        <div className="mt-16 grid lg:grid-cols-5 gap-16">
          {/* Text column */}
          <SectionReveal className="lg:col-span-3 space-y-6" delay={0.1}>
            <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
              {t('about.paragraph1')}
            </p>
            <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
              {t('about.paragraph2prefix')}
              <span className="text-neutral-900 dark:text-white font-medium">
                {t('about.paragraph2highlight')}
              </span>
              {t('about.paragraph2suffix')}
            </p>

            {/* Stat chips */}
            <div className="flex flex-wrap gap-3 pt-4">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="px-4 py-2.5 rounded-lg bg-white dark:bg-dark-bg border border-neutral-200 dark:border-dark-border"
                >
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 block">{h.label}</span>
                  <span className="text-sm font-semibold text-neutral-900 dark:text-white">{h.value}</span>
                </div>
              ))}
            </div>
          </SectionReveal>

          {/* Education column */}
          <SectionReveal className="lg:col-span-2" delay={0.2}>
            <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-neutral-400 dark:text-neutral-500 mb-6">
              {t('about.education')}
            </h3>
            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.institution}
                  className="relative p-5 rounded-xl bg-white dark:bg-dark-bg border border-neutral-200 dark:border-dark-border hover:border-primary/30 dark:hover:border-primary/30 transition-colors duration-300"
                >
                  {edu.current && (
                    <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  )}
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 p-2 rounded-lg bg-primary/5 dark:bg-primary/10">
                      <GraduationCap size={16} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white text-sm">
                        {edu.institution}
                      </h4>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
                        {edu.degree}
                      </p>
                      <div className="flex items-center gap-1.5 mt-2 text-xs text-neutral-400">
                        <Calendar size={12} />
                        <span>{edu.years}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
