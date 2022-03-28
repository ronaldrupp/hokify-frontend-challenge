<template>
  <nav
    class="bg-main w-full fixed h-12 text-white font-bold flex dark:bg-gray-900"
  >
    <div class="max-w-3xl mx-auto flex flex-1 items-center justify-between">
      <div>
        <NuxtLink to="/">Index</NuxtLink>
        <NuxtLink to="/otherpage">Other Page</NuxtLink>
      </div>
      <div class="flex items-center justify-center">
        <button @click="triggerThemeChange">
          <img v-if="theme === 'light'" src="~/assets/moon.svg" />
          <img v-else src="~/assets/sun.svg" />
        </button>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>

<script>
export default {
  data() {
    return {
      theme: "not set",
    };
  },
  created() {
    if (!process.client) return;
    this.theme = localStorage.getItem("theme");
  },
  methods: {
    triggerThemeChange() {
      if (!process.client) return;
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        this.theme = "light";
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        this.theme = "dark";
      }
    },
  },
};
</script>
