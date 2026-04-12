import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, ArrowUpRight, Loader2 } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../components/BrandIcons'
import SectionReveal from '../components/SectionReveal'
import { useLanguage } from '../i18n/LanguageContext'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'

const socials = [
  { label: 'GitHub', href: 'https://github.com/Kndy26', icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kennedy-wang-67616a370/?locale=in', icon: LinkedinIcon },
  { label: 'Twitter', href: 'https://twitter.com/Kennnn26', icon: TwitterIcon },
]

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      await addDoc(collection(db, 'messages'), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        createdAt: serverTimestamp()
      })
      
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 3000)
    } catch (err) {
      console.error("Error adding document: ", err)
      setError(t('contact.error'))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 section-padding">
      <div className="section-container">
        <SectionReveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="section-label">{t('contact.label')}</p>
            <h2 className="section-heading">{t('contact.heading')}</h2>
            <p className="mt-4 text-lg text-neutral-500 dark:text-neutral-400">
              {t('contact.description')}
            </p>
          </div>
        </SectionReveal>

        {/* Email */}
        <SectionReveal delay={0.1}>
          <a
            href="mailto:Kennedywang2005@gmail.com"
            className="group block text-center mt-10"
          >
            <span className="text-3xl md:text-5xl font-headline font-bold text-neutral-900 dark:text-white group-hover:text-primary transition-colors duration-300">
              Kennedywang2005@gmail.com
            </span>
          </a>
        </SectionReveal>

        {/* Social links */}
        <SectionReveal delay={0.15}>
          <div className="flex items-center justify-center gap-6 mt-8">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:text-primary transition-colors duration-200"
              >
                <s.icon size={16} />
                {s.label}
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </SectionReveal>

        {/* Contact form */}
        <SectionReveal delay={0.2}>
          <div className="mt-16 max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2">
                    {t('contact.nameLabel')}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-neutral-50 dark:bg-dark-surface border border-neutral-200 dark:border-dark-border text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder={t('contact.namePlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2">
                    {t('contact.emailLabel')}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-neutral-50 dark:bg-dark-surface border border-neutral-200 dark:border-dark-border text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder={t('contact.emailPlaceholder')}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2">
                  {t('contact.messageLabel')}
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-neutral-50 dark:bg-dark-surface border border-neutral-200 dark:border-dark-border text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  placeholder={t('contact.messagePlaceholder')}
                />
              </div>
              
              {error && (
                <div className="text-red-500 text-sm mt-1 mb-3">
                  {error}
                </div>
              )}
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25 disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>{t('contact.sending')}</span>
                  </>
                ) : submitted ? (
                  <>
                    <span>{t('contact.sent')}</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>{t('contact.send')}</span>
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
