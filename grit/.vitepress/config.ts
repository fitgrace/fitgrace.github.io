import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'FitGrace',
  description: "FitGrace's blog",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '树洞', link: '/tree-hole/' },
      { text: '关于', link: '/resume/' },
    ],

    sidebar: {
      '/front-end/': [
        {
          text: 'front-end',
          items: [{ text: '起步', link: '/front-end/' }],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/fitgrace/fitgrace.github.io' }],
  },
});
