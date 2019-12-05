<template>
  <div class="home">
    <headers/>
    <router-view />
  </div>
</template>

<script>
  import headers from '../components/headers/headers'

export default {
  name: 'home',
  components: {
    headers
  },
}
</script>
