import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Početna',
      href: getPermalink('/'),
    },
    {
      text: 'Usluge',
      href: getPermalink('/usluge'),
    },
    {
      text: 'Portfolio',
      href: getPermalink('/portfolio'),
    },
    {
      text: 'O nama',
      href: getPermalink('/o-nama'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Kontakt',
      href: getPermalink('/kontakt'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Kompanija',
      links: [
        { text: 'O nama', href: getPermalink('/o-nama') },
        { text: 'Usluge', href: getPermalink('/usluge') },
        { text: 'Portfolio', href: getPermalink('/portfolio') },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Kontakt', href: getPermalink('/kontakt') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Uslovi korišćenja', href: getPermalink('/uslovi-koriscenja') },
    { text: 'Politika privatnosti', href: getPermalink('/politika-privatnosti') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
  ],
  footNote: `
    © ${new Date().getFullYear()} MJ Social Media. Sva prava zadržana.
  `,
};
