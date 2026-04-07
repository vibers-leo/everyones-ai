import { defineConfig } from '@apps-in-toss/web-framework/config';
export default defineConfig({ appName: 'everyones-ai', brand: { displayName: '모두의 AI 퀴즈', primaryColor: '#3B82F6', icon: 'https://vibers.co.kr/favicon.ico' }, web: { host: 'localhost', port: 3433, commands: { dev: 'vite', build: 'vite build' } }, permissions: [], webViewProps: { type: 'partner' } });
