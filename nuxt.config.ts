import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
    head: {
        title: 'Intern Task Board',
        meta: [{ name: 'description', content: 'Simple Kanban board for interns' }]
    }
  }
});