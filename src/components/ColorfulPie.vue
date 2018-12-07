<template>
  <div id="color-pie" ref="chart"></div>
</template>
<script>
export default {
  data() {
    return {
      option: {}
    };
  },
  mounted() {
    let idx = 1;
    this.option = {
      timeline: {
        axisType: "category",
        data: [
          "2013-01-01",
          "2013-02-01",
          "2013-03-01",
          "2013-04-01",
          "2013-05-01",
          {
            name: "2013-06-01",
            symbol: "emptyStar6",
            symbolSize: 8
          },
          "2013-07-01",
          "2013-08-01",
          "2013-09-01",
          "2013-10-01",
          "2013-11-01",
          {
            name: "2013-12-01",
            symbol: "star6",
            symbolSize: 8
          }
        ],
        label: {
          normal: {
            formatter: function(s) {
              return s.slice(0, 7);
            }
          }
        }
      },
      options: [
        {
          title: {
            text: "Enrolment Applications this year - all courses",
            subtext: "今年总入学生 - 所有课程"
          },
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            data: ["Accepted", "Processing", "Rejected", "Withdrawn", "Transit"]
          },
          toolbox: {
            show: true,
            feature: {
              dataView: {
                show: true,
                readOnly: false
              },
              magicType: {
                show: true,
                type: ["pie", "line"],
              },
              restore: {
                show: true
              },
              saveAsImage: {
                show: true
              }
            }
          },
          series: [
            {
              name: "状态（数据纯属虚构）",
              type: "pie",
              center: ["50%", "45%"],
              radius: "50%",
              data: [
                {
                  value: idx * 128 + 80,
                  name: "Accepted"
                },
                {
                  value: idx * 64 + 160,
                  name: "Processing"
                },
                {
                  value: idx * 32 + 320,
                  name: "Rejected"
                },
                {
                  value: idx * 16 + 640,
                  name: "Withdrawn"
                },
                {
                  value: idx++ * 8 + 1280,
                  name: "Transit"
                }
              ]
            }
          ]
        },
        {
          series: [
            {
              name: "状态（数据纯属虚构）",
              type: "pie",
              data: [
                {
                  value: idx * 128 + 80,
                  name: "Accepted"
                },
                {
                  value: idx * 64 + 160,
                  name: "Processing"
                },
                {
                  value: idx * 32 + 320,
                  name: "Rejected"
                },
                {
                  value: idx * 16 + 640,
                  name: "Withdrawn"
                },
                {
                  value: idx++ * 8 + 1280,
                  name: "Transit"
                }
              ]
            }
          ]
        },
        {
          series: [
            {
              name: "状态（数据纯属虚构）",
              type: "pie",
              data: [
                {
                  value: idx * 128 + 80,
                  name: "Accepted"
                },
                {
                  value: idx * 64 + 160,
                  name: "Processing"
                },
                {
                  value: idx * 32 + 320,
                  name: "Rejected"
                },
                {
                  value: idx * 16 + 640,
                  name: "Withdrawn"
                },
                {
                  value: idx++ * 8 + 1280,
                  name: "Transit"
                }
              ]
            }
          ]
        },
        {
          series: [
            {
              name: "状态（数据纯属虚构）",
              type: "pie",
              data: [
                {
                  value: idx * 128 + 80,
                  name: "Accepted"
                },
                {
                  value: idx * 64 + 160,
                  name: "Processing"
                },
                {
                  value: idx * 32 + 320,
                  name: "Rejected"
                },
                {
                  value: idx * 16 + 640,
                  name: "Withdrawn"
                },
                {
                  value: idx++ * 8 + 1280,
                  name: "Transit"
                }
              ]
            }
          ]
        },
        {
          series: [
            {
              name: "状态（数据纯属虚构）",
              type: "pie",
              data: [
                {
                  value: idx * 128 + 80,
                  name: "Accepted"
                },
                {
                  value: idx * 64 + 160,
                  name: "Processing"
                },
                {
                  value: idx * 32 + 320,
                  name: "Rejected"
                },
                {
                  value: idx * 16 + 640,
                  name: "Withdrawn"
                },
                {
                  value: idx++ * 8 + 1280,
                  name: "Transit"
                }
              ]
            }
          ]
        },
        {
          series: [
            {
              name: "状态（数据纯属虚构）",
              type: "pie",
              data: [
                {
                  value: idx * 128 + 80,
                  name: "Accepted"
                },
                {
                  value: idx * 64 + 160,
                  name: "Processing"
                },
                {
                  value: idx * 32 + 320,
                  name: "Rejected"
                },
                {
                  value: idx * 16 + 640,
                  name: "Withdrawn"
                },
                {
                  value: idx++ * 8 + 1280,
                  name: "Transit"
                }
              ]
            }
          ]
        },
        {
          series: [
            {
              name: "状态（数据纯属虚构）",
              type: "pie",
              data: [
                {
                  value: idx * 128 + 80,
                  name: "Accepted"
                },
                {
                  value: idx * 64 + 160,
                  name: "Processing"
                },
                {
                  value: idx * 32 + 320,
                  name: "Rejected"
                },
                {
                  value: idx * 16 + 640,
                  name: "Withdrawn"
                },
                {
                  value: idx++ * 8 + 1280,
                  name: "Transit"
                }
              ]
            }
          ]
        },
        {
          series: [
            {
              name: "状态（数据纯属虚构）",
              type: "pie",
              data: [
                {
                  value: idx * 128 + 80,
                  name: "Accepted"
                },
                {
                  value: idx * 64 + 160,
                  name: "Processing"
                },
                {
                  value: idx * 32 + 320,
                  name: "Rejected"
                },
                {
                  value: idx * 16 + 640,
                  name: "Withdrawn+"
                },
                {
                  value: idx++ * 8 + 1280,
                  name: "Transit"
                }
              ]
            }
          ]
        },
        {
          series: [
            {
              name: "状态（数据纯属虚构）",
              type: "pie",
              data: [
                {
                  value: idx * 128 + 80,
                  name: "Accepted"
                },
                {
                  value: idx * 64 + 160,
                  name: "Processing"
                },
                {
                  value: idx * 32 + 320,
                  name: "Rejected"
                },
                {
                  value: idx * 16 + 640,
                  name: "Withdrawn"
                },
                {
                  value: idx++ * 8 + 1280,
                  name: "Transit"
                }
              ]
            }
          ]
        },
        {
          series: [
            {
              name: "状态（数据纯属虚构）",
              type: "pie",
              data: [
                {
                  value: idx * 128 + 80,
                  name: "Accepted"
                },
                {
                  value: idx * 64 + 160,
                  name: "Processing"
                },
                {
                  value: idx * 32 + 320,
                  name: "Rejected"
                },
                {
                  value: idx * 16 + 640,
                  name: "Withdrawn"
                },
                {
                  value: idx++ * 8 + 1280,
                  name: "Transit"
                }
              ]
            }
          ]
        },
        {
          series: [
            {
              name: "状态（数据纯属虚构）",
              type: "pie",
              data: [
                {
                  value: idx * 128 + 80,
                  name: "Accepted"
                },
                {
                  value: idx * 64 + 160,
                  name: "Processing"
                },
                {
                  value: idx * 32 + 320,
                  name: "Rejected"
                },
                {
                  value: idx * 16 + 640,
                  name: "Withdrawn"
                },
                {
                  value: idx++ * 8 + 1280,
                  name: "Transit"
                }
              ]
            }
          ]
        },
        {
          series: [
            {
              name: "状态（数据纯属虚构）",
              type: "pie",
              data: [
                {
                  value: idx * 128 + 80,
                  name: "Accepted"
                },
                {
                  value: idx * 64 + 160,
                  name: "Processing"
                },
                {
                  value: idx * 32 + 320,
                  name: "Rejected"
                },
                {
                  value: idx * 16 + 640,
                  name: "Withdrawn"
                },
                {
                  value: idx++ * 8 + 1280,
                  name: "Transit"
                }
              ]
            }
          ]
        }
      ]
    };
    this.initChart();
  },
  methods: {
    initChart() {
      const chart = this.$echarts.init(this.$refs.chart);
      chart.setOption(this.option);
    }
  }
};
</script>
<style scoped>
#color-pie {
  width: 100%;
  height: 100%;
}
</style>

