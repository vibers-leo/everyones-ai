import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/login/', '/signup/', '/mypage/'],
    },
    sitemap: 'https://everyones-ai.vibers.co.kr/sitemap.xml',
  };
}
