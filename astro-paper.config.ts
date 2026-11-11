import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://abigail-newton.com/",
    title: "Abby Newton",
    description: "Abigail Newton is a space instrumentation engineer building sensors for Mars and the Moon. Projects, research notes, and resume.",
    author: "Abigail Newton",
    profile: "https://www.linkedin.com/in/abigail-newton",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Canada/Toronto",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/abbynewton3/blog",
    },
    search: "pagefind",
    toc: true,
  },
  socials: [
    { name: "github",   url: "https://github.com/abbynewton3/blog" },
    { name: "linkedin", url: "https://www.linkedin.com/in/abigail-newton" },
    { name: "mail",     url: "mailto:anewt@rogers.com" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
