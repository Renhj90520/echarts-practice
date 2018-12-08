<template>
  <div id="radar" ref="chart"></div>
</template>
<script>
export default {
  mounted() {
    const chart = this.$echarts.init(this.$refs.chart);
    chart.setOption({
      title: {
        text: "Radar",
        left: "center",
        padding: [15, 0],
        textStyle: {
          color: "#4682b4",
          fontSize: 26
        }
      },
      radar: [
        {
          indicator: [
            {
              text: "indicator1",
              max: 1000
            },
            {
              text: "indicator2",
              max: 1000
            },
            {
              text: "indicator3",
              max: 1000
            },
            {
              text: "indicator4",
              max: 1000
            },
            {
              text: "indicator5",
              max: 1000
            }
          ],
          radius: "60%",
          startAngle: 90,
          splitNumber: 4,
          shape: "circle",
          name: {
            formatter: "{value}",
            textStyle: {
              color: "#72ACD1"
            }
          },
          splitArea: {
            areaStyle: {
              color: [
                "rgba(114, 172, 209, 0.2)",
                "rgba(114, 172, 209, 0.4)",
                "rgba(114, 172, 209, 0.6)",
                "rgba(114, 172, 209, 0.8)",
                "rgba(114, 172, 209, 1)"
              ],
              shadowColor: "rgba(0,0,0,0.3)",
              shadowBlur: 10
            }
          },
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,0.5)"
            }
          },
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,0.5)"
            }
          }
        }
      ],
      backgroundColor: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: "#b1dfff"
        },
        {
          offset: 1,
          color: "#ececec"
        }
      ]),
      series: [
        {
          name: "count",
          type: "radar",
          tooltip: { trigger: "item" },
          data: [
            {
              value: [600, 500, 900, 500, 700],
              areaStyle: {
                normal: {
                  color: "rgba(255, 255, 255, 0.5)"
                }
              }
            }
          ]
        }
      ]
    });
  }
};
</script>
<style scoped>
#radar {
  width: 100%;
  height: 100%;
}
</style>

