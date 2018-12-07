<template>
  <div id="app">
    <app-menu></app-menu>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
export default {
  name: "App",
  components: {
    "app-menu": Menu
  }
};
</script>

<style>
body {
  width: 100%;
  height: 100vh;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
.content {
  flex: 1 1 auto;
  padding: 16px;
}
</style>
