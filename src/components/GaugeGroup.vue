<template>
  <div id="gauge-group" ref="chart"></div>
</template>
<script>
export default {
  mounted() {
    const chart = this.$echarts.init(this.$refs.chart);
    chart.setOption({
      backgroundColor: "#1b1b1b",
      series: [
        {
          name: "速度",
          title: {
            fontWeight: "bolder",
            fontSize: 20,
            fontStyle: "italic",
            color: "#fff",
            textShadowColor: "#fff",
            textShadowBlur: 10
          },
          type: "gauge",
          min: 0,
          max: 220,
          splitNumber: 11,
          radius: "50%",
          axisLine: {
            lineStyle: {
              color: [[0.09, "lime"], [0.82, "#1e90ff"], [1, "#ff4500"]],
              width: 3,
              shadowColor: "#fff",
              shadowBlur: 10
            }
          },
          axisLabel: {
            fontWeight: "bold",
            color: "#fff"
          },
          axisTick: {
            length: 15,
            lineStyle: {
              color: "auto",
              shadowColor: "#fff",
              shadowBlur: 10
            }
          },
          splitLine: {
            length: 20,
            lineStyle: {
              width: 3,
              color: "#fff",
              shadowColor: "#fff",
              shadowBlur: 10
            }
          },
          pointer: {
            length: "60%",
            width: 5
          },
          itemStyle: {
            shadowColor: "#fff",
            shadowBlur: 20
          },
          detail: {
            backgroundColor: "rgba(30,144,255,0.8)",
            borderColor: "#fff",
            borderWidth: 1,
            shadowColor: "#fff",
            shadowBlur: 5,
            width: 80,
            height: 30,
            fontWeight: "bold",
            color: "#fff"
          },
          data: [{ value: 40, name: "km/h" }]
        },
        {
          name: "油表",
          type: "gauge",
          center: ["75%", "50%"],
          radius: "30%",
          min: 0,
          max: 2,
          startAngle: 135,
          endAngle: 45,
          splitNumber: 2,
          axisLine: {
            lineStyle: {
              color: [[0.2, "lime"], [0.8, "#1e90ff"], [1, "#ff4500"]],
              width: 2,
              shadowColor: "#fff",
              shadowBlur: 10
            }
          },
          axisTick: {
            length: 12,
            lineStyle: {
              color: "auto",
              shadowColor: "#fff",
              shadowBlur: 10
            }
          },
          axisLabel: {
            fontWeight: "bolder",
            color: "#fff",
            formatter: function(v) {
              switch (v) {
                case 0:
                  return "E";
                case 1:
                  return "Gas";
                case 2:
                  return "F";
              }
            }
          },
          splitLine: {
            length: 15,
            lineStyle: {
              width: 3,
              color: "#fff",
              shadowColor: "#fff",
              shadowBlur: 10
            }
          },
          pointer: {
            width: 2
          },
          itemStyle: {
            shadowColor: "#fff",
            shadowBlur: 5
          },
          detail: { show: false },
          title: { show: false },
          data: [{ value: 0.5, name: "gas" }]
        },
        {
          type: "gauge",
          name: "水表",
          center: ["75%", "50%"],
          radius: "30%",
          min: 0,
          max: 2,
          startAngle: 315,
          endAngle: 225,
          splitNumber: 2,
          axisLine: {
            lineStyle: {
              color: [[0.2, "lime"], [0.8, "#1e90ff"], [1, "#ff4500"]],
              width: 2,
              shadowBlur: 10,
              shadowColor: "#fff"
            }
          },
          axisTick: { show: false },
          axisLabel: {
            fontWeight: "bolder",
            color: "#fff",
            formatter: function(v) {
              switch (v) {
                case 0:
                  return "H";
                case 1:
                  return "Water";
                case 2:
                  return "C";
              }
            }
          },
          splitLine: {
            length: 15,
            lineStyle: {
              width: 3,
              color: "#fff",
              shadowBlur: 10,
              shadowColor: "#fff"
            }
          },
          pointer: {
            width: 2
          },
          itemStyle: {
            shadowBlur: 5,
            shadowColor: "#fff"
          },
          detail: { show: false },
          title: { show: false },
          data: [{ value: 0.5, name: "water" }]
        }
      ]
    });
  }
};
</script>
<style scoped>
#gauge-group {
  width: 100%;
  height: 100%;
}
</style>

