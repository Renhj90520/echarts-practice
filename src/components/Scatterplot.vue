<template>
  <div id="scatterplot" ref="chart"></div>
</template>
<script>
import { data } from "./cyclistdata";
export default {
  mounted() {
    const chart = this.$echarts.init(this.$refs.chart);
    const doping = [];
    const nodoing = [];
    for (let i = 0; i < data.length; i++) {
      const d = data[i];
      const arr = [];
      if (d.Doping) {
        for (const key in d) {
          arr.push(d[key]);
        }
        doping.push(arr);
      } else {
        for (const key in d) {
          arr.push(d[key]);
        }
        nodoing.push(arr);
      }
    }
    console.log(JSON.stringify(data));
    console.log(JSON.stringify(doping));
    console.log(JSON.stringify(nodoing));
    chart.setOption({
      backgroundColor: new this.$echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [
        { offset: 0, color: "#f7f8fa" },
        { offset: 1, color: "#cdd0d5" }
      ]),
      title: {
        text: "Doping in Professional Bicycle Racing",
        left: "center",
        padding: [15, 0],
        textStyle: {
          color: "#4682b4",
          fontSize: 26
        },
        subtext:
          "35 Fastest times up Alpe d'Huez | Normalized to 13.8km distance"
      },
      legend: {
        right: 10,
        data: ["doping", "no doping"],
        orient: "vertical",
        top: "30%"
      },
      xAxis: {
        splitLine: {
          lineStyle: { type: "dashed" }
        },
        name: "Time",
        data: data.map(function(d) {
          return d.Time;
        })
      },
      yAxis: {
        splitLine: {
          type: "dashed"
        },
        name: "Ranking",
        inverse: false,
        scale: true
      },
      series: [
        {
          name: "doping",
          data: doping,
          type: "scatter",
          symbolSize: 12,
          label: {
            emphasis: {
              show: true,
              formatter: function(param) {
                return (
                  param.data[3] +
                  ": " +
                  param.data[5] +
                  "\nYear: " +
                  param.data[4] +
                  ", Time: " +
                  param.data[0] +
                  "\n" +
                  param.data[6]
                );
              },
              position: "top"
            }
          },
          itemStyle: {
            shadowBlur: 10,
            shadowColor: "rgba(120,36,50,0.5)",
            shadowOffset: 5,
            color: new this.$echarts.graphic.RadialGradient(0.4, 0.3, 1, [
              { offset: 0, color: "rgb(251, 118, 123)" },
              { offset: 1, color: "rgb(204, 46, 72)" }
            ])
          }
        }
      ]
    });
  }
};
</script>
<style scoped>
#scatterplot {
  width: 100%;
  height: 100%;
}
</style>

