import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import tailwindPlugin from "./plugins/tailwind-plugin.cjs"; 

const config: Config = {
  title: 'Best React Native Boilerplate By MindInventory',
  tagline: `Boilerplate code provides a pre-made foundation for your project, including essential packages, reusable components, and a structured architecture. Build modern applications effortlessly with our React Native boilerplate, designed for simplicity and scalability. Join our active community to collaborate, share ideas, and accelerate your app development journey.`,
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://mindinventory.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/react-native-boilerplate/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Mindinventory', // Usually your GitHub org/user name.
  projectName: 'react-native-boilerplate', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch:'docs-deployment',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.         
        },
     
        theme: {
          customCss: './src/css/custom.css',
        
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'right',
          label: 'Docs',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Mindinventory/react-native-boilerplate',
          
          position: 'right',
          className:"github_icon group"
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Organization',
          items: [
            {
              label: 'Mindinventory',
              href: 'https://www.mindinventory.com/',
            },           
          ],
        },
        {
          title: 'Community',
          items: [

            {
              label: 'Twitter',
              href: 'https://x.com/Mindinventory',
            },
            {
              label: 'linkedin',
              href: 'https://www.linkedin.com/company/mindinventory',
            },
          ],
        },
        {
          title: 'More',
          items: [
           
            {
              label: 'GitHub',
              href: 'https://github.com/Mindinventory',
            },
          ],
        },
        {
          title: null,
          items: [
           
            {              
              html:`                            
                <a href="https://www.mindinventory.com/contact-us.php?utm_source=gthb&utm_medium=repo&utm_campaign=react-native-boilerplate" target="__blank">
                  <button class="have_project_buttons" >Have a project?</button>
                </a>              
              `
            },
          ],
        }
      ],
      copyright: `© ${new Date().getFullYear()} MindInventory. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode:{
      disableSwitch: true
    },
    metadata: [
      {name: 'description', content: 'Develop high-performance applications using our comprehensive React Native Boilerplate for a smooth development process with integrated support for TypeScript.'},      
    ],
  } satisfies Preset.ThemeConfig,
  
  trailingSlash: true,
  plugins: [tailwindPlugin]
};

export default config;
