import { defineConfig } from 'astro/config';
 import tailwind from '@astrojs/tailwind';

 export default defineConfig({  
   integrations: [tailwind()],
   site: 'https://mariarita-caracciolo.github.io',
   base: '/oceangliders_.github.io',
 });

 
