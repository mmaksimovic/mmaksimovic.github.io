import rss from '@astrojs/rss';

export const get = () => rss({
  title: 'Your Blog Title',
  description: 'Your blog description',
  site: 'https://kljucnarec.rs',
  items: import.meta.glob('./blog/**/*.md'),
  customData: `<language>sr-RS</language>`,
});