
<template>
  <div id="app">
    <router-view v-if="$route.meta.keepAlive"></router-view>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<style scoped>

</style>
