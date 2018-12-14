<template>
  <div id="chart" ref="chart"></div>
</template>
<script>
import { colorHslToRgb, colorRgbToHsl } from "./util";
// import { data } from "./3ddata";
// import {data} from './results';
import * as $ from "jquery";
export default {
  mounted() {
    const chart = this.$echarts.init(this.$refs.chart);
    const result = [];
    $.getJSON("/static/results.json", function(data) {
      debugger;
      data.x.forEach((x, i) => {
        data.y.forEach((y, j) => {
          const point = [x, y, data.z[i][j]];
          result.push(point);
        });
      });
      // var data = [];
      // for (var i = 0; i < 10000; i++) {
      //   // var r = imgData.data[i * 4];
      //   // var g = imgData.data[i * 4 + 1];
      //   // var b = imgData.data[i * 4 + 2];

      //   // var lum = 255 - (0.2125 * r + 0.7154 * g + 0.0721 * b);
      //   // lum = (lum - 125) / 10 + 50;
      //   const lum = this.luminateColor({ r: 216, g: 125, b: 99 }, i);
      //   data.push([i % 1000, height - Math.floor(i / 1000), lum]);
      // }
      chart.setOption({
        backgroundColor: "#fff",
        xAxis3D: {
          type: "value"
        },
        yAxis3D: {
          type: "value"
        },
        zAxis3D: {
          type: "value",
          min: 0,
          max: 100
        },
        grid3D: {
          axisPointer: {
            show: false
          },
          viewControl: {
            distance: 100
          },
          postEffect: {
            enable: true
          },
          light: {
            main: {
              shadow: true,
              intensity: 2
            },
            ambientCubemap: {
              texture: "data-gl/asset/canyon.hdr",
              exposure: 2,
              diffuseIntensity: 0.2,
              specularIntensity: 1
            }
          }
        },
        series: [
          {
            type: "surface",
            silent: true,
            wireframe: {
              show: false
            },
            // itemStyle: {
            //   color: function(params) {
            //     var i = params.dataIndex;
            //     var r = imgData.data[i * 4];
            //     var g = imgData.data[i * 4 + 1];
            //     var b = imgData.data[i * 4 + 2];
            //     return "rgb(" + [r, g, b].join(",") + ")";
            //   }
            // },
            data: result
          }
        ]
      });
    });
  },
  methods: {
    luminateColor(color, idx) {
      colorRgbToHsl(color);
      color.l += 0.15 * idx;
      colorHslToRgb(color);
    }
  }
};
</script>
<style scoped>
#chart {
  width: 100%;
  height: 100%;
}
</style>