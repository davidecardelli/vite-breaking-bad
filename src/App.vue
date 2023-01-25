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
  <main>
    <app-footer></app-footer>
  </main>
</template>

<style lang="scss">
@use'./scss/style.scss'
</style>