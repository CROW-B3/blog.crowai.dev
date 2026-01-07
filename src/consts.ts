import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'blog.crowai.dev',
  description: 'The CROW Enginnering Blog',
  href: 'https://blog.crowai.dev/',
  author: 'The CROW Team',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/CROW-B3',
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/company/crow-b3/',
    label: 'LinkedIn',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
