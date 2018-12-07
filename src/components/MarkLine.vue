<template>
  <div id="markline" ref="chart"></div>
</template>
<script>
export default {
  mounted() {
    const chart = this.$echarts.init(this.$refs.chart);
    chart.setOption({
      title: {
        text: "Regional Evaporation and Precipitation",
        subtext: "Fictitious"
      },
      tooltip: {
        trigger: "axis"
      },
      xAxis: {
        data: [
          "1 Month",
          "2 Months",
          "3 Months",
          "4 Months",
          "5 Months",
          "6 Months",
          "7 Months",
          "8 Months",
          "9 Months",
          "10 Months",
          "11 Months",
          "12 Months"
        ]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          name: "Evaporation",
          type: "bar",
          data: [
            2.0,
            4.9,
            7.0,
            23.2,
            25.6,
            76.7,
            135.6,
            162.2,
            32.6,
            20.0,
            6.4,
            3.3
          ],
          markLine: {
            data: [{ type: "average", name: "Average Value" }]
          }
        },
        {
          name: "Precipitation",
          type: "bar",
          data: [
            2.6,
            5.9,
            9.0,
            26.4,
            28.7,
            70.7,
            175.6,
            182.2,
            48.7,
            18.8,
            6.0,
            2.3
          ],
          markLine: {
            data: [[{ type: "min" }, { type: "max" }]]
          }
        }
      ]
    });
  }
};
</script>
<style scoped>
#markline {
  width: 100%;
  height: 100%;
}
</style>

