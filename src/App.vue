<script>
import axios from 'axios';
import { store } from './store/store.js';
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'Breaking Bad',
  data() {
    return {
      store
    }
  },
  components: { AppFooter }
}
</script>

<template>
  <app-footer></app-footer>
</template>

<style lang="scss">
@use'./scss/style.scss'
</style>