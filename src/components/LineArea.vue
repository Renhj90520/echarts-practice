<template>
  <div id="linearea" ref="chart"></div>
</template>
<script>
export default {
  mounted() {
    const chart = this.$echarts.init(this.$refs.chart);
    chart.setOption({
      xAxis: {
        type: "category",
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
          textStyle: { color: "#607685" }
        },
        data: [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20
        ]
      },
      yAxis: {
        type: "value",
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
          textStyle: {
            color: "#607685"
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "#dddede"
          }
        }
      },
      series: [
        {
          name: "WOM",
          type: "bar",
          clickable: false,
          itemStyle: { color: "transparent" },
          emphasis: {
            itemStyle: {
              color: "rgba(237,240,241,.7)"
            }
          },
          data: [
            75,
            62,
            45,
            60,
            73,
            50,
            31,
            56,
            70,
            63,
            49,
            72,
            76,
            67,
            46,
            51,
            69,
            59,
            85,
            67,
            56
          ]
        },
        {
          name: "Viral",
          type: "line",
          smooth: true,
          itemStyle: {
            color: "#8cc34b"
          },
          areaStyle: {
            opacity: 0.7
          },
          data: [
            0,
            0,
            0,
            5,
            20,
            15,
            30,
            28,
            25,
            40,
            60,
            40,
            43,
            32,
            36,
            23,
            12,
            15,
            2,
            0,
            0
          ],
          symbol: "none"
        },
        {
          name: "Paid",
          type: "line",
          smooth: true,
          itemStyle: {
            color: "#00bcd3"
          },
          areaStyle: {
            opacity: 0.7
          },
          data: [
            0,
            0,
            0,
            0,
            1,
            6,
            15,
            8,
            16,
            9,
            25,
            12,
            50,
            20,
            25,
            12,
            2,
            1,
            0,
            0,
            0
          ],
          symbol: "none"
        }
      ]
    });
  }
};
</script>
<style scoped>
#linearea {
  width: 100%;
  height: 100%;
}
</style>
