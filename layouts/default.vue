<template>
  <div class="dark:bg-black">
    <Navigation />
    <Nuxt />
  </div>
</template>

<script>
export default {
  created() {
    this.setTheme();
  },
  methods: {
    setTheme() {
      if (!process.client) return;
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  },
};
</script>
