import { GithubIcon, LinkedinIcon, TwitterIcon } from './BrandIcons'
import { useLanguage } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-200 dark:border-dark-border bg-white dark:bg-dark-bg">
      <div className="section-padding">
        <div className="section-container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            © {currentYear} {t('footer.rights')}
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Kndy26"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-700 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/kennedy-wang-67616a370/?locale=in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-700 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href="https://twitter.com/Kennnn26"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-700 dark:hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <TwitterIcon size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
