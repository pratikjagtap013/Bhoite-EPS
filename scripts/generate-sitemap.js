import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const sitemap = new SitemapStream({ hostname: 'https://www.bhoiteepstech.com' });

const urls = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/services', changefreq: 'weekly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.5 },
];

(async () => {
  const writeStream = createWriteStream('./public/sitemap.xml');
  sitemap.pipe(writeStream);

  urls.forEach(page => sitemap.write(page));
  sitemap.end();

  await streamToPromise(sitemap);
  console.log('✅ sitemap.xml generated in public folder!');
})();
