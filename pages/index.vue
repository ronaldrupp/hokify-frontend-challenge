<template>
  <main class="w-full min-h-screen flex items-center justify-center">
    <Form />
  </main>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
};
</script>

<style lang="scss" scoped></style>
