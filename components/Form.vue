<template>
  <form
    class="md:shadow-lg md:rounded-lg p-8 max-w-lg w-full dark:bg-gray-900"
    @submit.prevent="saveForm"
  >
    <h4 class="text-xl sm:text-lg font-bold dark:text-white">
      Type in your details
    </h4>
    <div class="flex flex-col md:flex-row">
      <div class="relative mt-6 md:mr-5 flex-grow">
        <input
          v-model="firstName"
          class="text-text-color border-2 rounded-md p-4 w-full dark:bg-gray-900 dark:text-white"
          type="text"
          name="firstName"
          id="firstName"
          autocomplete="off"
          autocorrect="off"
          autocapitalize="off"
          spellcheck="false"
          maxlength="1000"
          placeholder=" "
        />
        <label
          for="firstName"
          class="absolute bg-white dark:bg-gray-900 px-2 transition-all"
          ><span class="dark:text-white">First Name</span></label
        >
      </div>
      <div class="relative mt-6 md:mr-5 flex-grow">
        <input
          v-model="lastName"
          class="text-text-color border-2 rounded-md p-4 w-full dark:bg-gray-900 dark:text-white"
          type="text"
          name="lastName"
          id="lastName"
          autocomplete="off"
          autocorrect="off"
          autocapitalize="off"
          spellcheck="false"
          maxlength="1000"
          placeholder=" "
        />
        <label
          for="lastName"
          class="absolute bg-white dark:bg-gray-900 px-2 transition-all"
          ><span class="dark:text-white">Last Name</span></label
        >
      </div>
    </div>
    <div class="relative mt-6 md:mr-5 flex-grow">
      <input
        v-model="email"
        class="text-text-color border-2 rounded-md p-4 w-full dark:bg-gray-900 dark:text-white"
        type="email"
        name="email"
        id="email"
        autocomplete="off"
        autocorrect="off"
        autocapitalize="off"
        spellcheck="false"
        maxlength="1000"
        placeholder=" "
      />
      <label
        for="email"
        class="absolute bg-white dark:bg-gray-900 px-2 transition-all"
        ><span class="dark:text-white">E-Mail</span></label
      >
    </div>
    <button
      type="submit"
      :disabled="isDisabled"
      class="disabled:opacity-50 mt-6 transition-all flex items-center justify-center font-bold rounded-full bg-blue text-white px-8 py-2"
    >
      Send
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
    };
  },
  created() {
    this.setFormData();
  },
  computed: {
    isDisabled() {
      if (!this.firstName && !this.lastName && !this.email) return true;
      return false;
    },
  },
  methods: {
    setFormData() {
      if (!this.$store.state.formData) return;
      const { firstName, lastName, email } = this.$store.state.formData;

      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
    },
    saveForm() {
      this.$store.commit("saveFormData", {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
      });
      alert("Hello at Hokfiy");
    },
  },
};
</script>

<style scoped lang="scss">
label {
  left: 10px;
  top: 1rem;
}
input:focus,
input:not(:placeholder-shown) {
  outline: none;
  border: 1px solid #0fb1af;
}
input:focus + label,
input:not(:placeholder-shown) + label {
  left: 0px;
  top: -0.5rem;
  transform: scale(0.8);
  span {
    color: #0fb1af;
  }
}
/* Change the white to any color */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px white inset !important;
}
.dark {
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px rgb(17 24 39) inset !important;
  }
}
</style>
