<template>
  <div id="gauge-group" ref="chart"></div>
</template>
<script>
export default {
  mounted() {
    const chart = this.$echarts.init(this.$refs.chart);
    chart.setOption({});
  }
};
</script>
<style scoped>
#gauge-group {
  width: 100%;
  height: 100%;
}
</style>

