<template>
  <ul id="menu">
    <li>
      <router-link to="/pieinfographic">Pie Info Graphic</router-link>
    </li>
    <li>
      <router-link to="/markline">Markline</router-link>
    </li>
    <li>
      <router-link to="/linearea">Line Area</router-link>
    </li>
    <li>
      <router-link to="/gradientbar">Gradient Bar</router-link>
    </li>
    <li>
      <router-link to="/"></router-link>
    </li>
    <li>
      <router-link to="/"></router-link>
    </li>
    <li>
      <router-link to="/"></router-link>
    </li>
    <li>
      <router-link to="/"></router-link>
    </li>
  </ul>
</template>
<script>
export default {};
</script>
<style lang="css" scoped>
#menu {
  flex: 0 0 232px;
  border-right: 2px solid #eee;
  margin: 0;
  padding: 16px;
  list-style: none;
}
a {
  font-size: 14px;
  text-decoration: none;
  color: #aaa;
  cursor: pointer;
  height: 24px;
  line-height: 24px;
}
.router-link-active {
  color: #2472cb;
}
</style>

