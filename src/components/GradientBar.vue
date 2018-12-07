<template>
  <div id="gradient-bar" ref="chart"></div>
</template>
<script>
export default {
  mounted() {
    const chart = this.$echarts.init(this.$refs.chart);
    const data = [];
    const xAxisData = [];
    for (let i = 20; i < 29; i++) {
      xAxisData.push("2" + "/" + i);
      data.push(Math.round(Math.random() * 500) + 200);
    }

    chart.setOption({
      xAxis: {
        data: xAxisData,
        type: "category",
        axisLabel: {
          color: "#333",
          align: "center",
          verticalAlign: "top"
        }
      },
      yAxis: {
        type: "value",
        splitLine: {
          show: true,
          lineStyle: {
            color: "#EFF0F0",
            type: "dashed"
          }
        }
      },
      series: [
        {
          type: "bar",
          data: data,
          barWidth: 15,
          itemStyle: {
            barBorderRadius: 20,
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#00caff" },
              { offset: 1, color: "#a5fff7" }
            ])
          }
        }
      ]
    });
  }
};
</script>
<style scoped>
#gradient-bar {
  width: 100%;
  height: 100%;
}
</style>

