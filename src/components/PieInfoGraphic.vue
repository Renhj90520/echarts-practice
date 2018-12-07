<template>
  <div id="pie-infographic" ref="chart"></div>
</template>
<script>
export default {
  mounted() {
    const chart = this.$echarts.init(this.$refs.chart);
    const radius = [40, 55];
    chart.setOption({
      legend: {
        x: "center",
        y: "center",
        data: [
          "Google Maps",
          "Facebook",
          "YouTube",
          "Google+",
          "Weixin",
          "Twitter",
          "Skype",
          "Messenger",
          "WhatsApp",
          "Instagram"
        ]
      },
      title: {
        text: "The App world",
        subtext: "From the Global Web Index",
        x: "center"
      },
      series: [
        {
          type: "pie",
          center: ["10%", "30%"],
          radius,
          label: {
            formatter: function(params) {
              return 100 - params.value + "%";
            },
            verticalAlign: "top"
          },
          data: [
            {
              name: "Google Maps",
              value: 54,
              label: {
                show: true,
                position: "center",
                formatter: "{b}",
                verticalAlign: "bottom"
              },
              labelLine: {
                show: false
              }
            },
            {
              name: "other",
              value: 46,
              label: {
                show: true,
                position: "center"
              },
              labelLine: {
                show: false
              }
            }
          ]
        },
        {
          type: "pie",
          center: ["30%", "30%"],
          radius,
          label: {
            formatter: function(params) {
              return 100 - params.value + "%";
            },
            verticalAlign: "top"
          },
          data: [
            {
              name: "Facebook",
              value: 56,
              label: {
                show: true,
                position: "center",
                formatter: "{b}",
                verticalAlign: "bottom"
              },
              labelLine: {
                show: false
              }
            },
            {
              name: "other",
              value: 44,
              label: {
                show: true,
                position: "center"
              },
              labelLine: {
                show: false
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
#pie-infographic {
  width: 100%;
  height: 100%;
}
</style>

