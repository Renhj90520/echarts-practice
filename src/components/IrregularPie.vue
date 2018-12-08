<template>
  <div id="irregular-pie" ref="chart"></div>
</template>
<script>
export default {
  mounted() {
    const chart = this.$echarts.init(this.$refs.chart);
    chart.setOption({
      title: {
        text: "Nightingale Roses",
        subtext: "fictitious",
        x: "center"
      },
      legend: {
        x: "center",
        y: "bottom",
        data: [
          "rose1",
          "rose2",
          "rose3",
          "rose4",
          "rose5",
          "rose6",
          "rose7",
          "rose8"
        ]
      },
      series: [
        {
          name: "Radius Mode",
          type: "pie",
          radius: [20, 110],
          center: ["25%", 200],
          roseType: "radius",
          label: { show: false },
          emphasis: {
            label: {
              show: true
            }
          },
          labelLine: {
            show: false,
            emphasis: {
              show: true
            }
          },
          data: [
            { value: 10, name: "rose1" },
            { value: 5, name: "rose2" },
            { value: 15, name: "rose3" },
            { value: 25, name: "rose4" },
            { value: 20, name: "rose5" },
            { value: 35, name: "rose6" },
            { value: 30, name: "rose7" },
            { value: 40, name: "rose8" }
          ]
        },
        {
          name: "Area Mode",
          type: "pie",
          radius: [30, 110],
          center: ["75%", 200],
          roseType: "area",
          data: [
            { value: 10, name: "rose1" },
            { value: 5, name: "rose2" },
            { value: 15, name: "rose3" },
            { value: 25, name: "rose4" },
            { value: 20, name: "rose5" },
            { value: 35, name: "rose6" },
            { value: 30, name: "rose7" },
            { value: 40, name: "rose8" }
          ]
        }
      ]
    });
  }
};
</script>
<style scoped>
#irregular-pie {
  width: 100%;
  height: 100%;
}
</style>


