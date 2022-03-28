export const state = () => ({
  formData: {},
});

export const mutations = {
  saveFormData(state, n) {
    state.formData = n
  }
};
