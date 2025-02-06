// plugins/myPlugin.ts
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(() => {
  console.log('Hello from Nuxt Plugin! 🚀');

  // Test variables to check
  const message = 'This is a test variable';
  const appVersion = '1.0.0';

  console.log({ message, appVersion });
});
