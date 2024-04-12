import { defineStore } from 'pinia'

export const useDropdownStore = defineStore('dropdown', {
  state: () => ({
    selectedOrg: "England",
  }),
  actions: {
    setSelectedOption(option: string) {
      this.selectedOrg = option
    },
  },
})