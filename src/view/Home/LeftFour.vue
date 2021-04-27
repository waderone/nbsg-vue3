/**
* @author  sparkHou
* @date 2021-04-25 10:58
* @Description:
*/

<template>
  <div class="LeftFour">
    <div class="box boxSide">
      <div class="title">
        征迁完成百分比
      </div>
      <div class="content">
        <div id="LeftFourBar">

        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {defineComponent, onMounted} from 'vue';
  import p from './provider'

  export default defineComponent({
    name: 'LeftFour',
    setup() {
      //柱状图
      let data = [80.88, 96.00, 44, 55, 77]
      let shadowYData = [100, 100, 100, 100, 100]
      let titleData = ['征地进度', '房屋拆迁进度', '企业拆迁进度', '坟墓迁移进度', '管杆线迁移进度']
      let color = ["#738CFB", "#67F4FD", "#43E3A9", "#FD9B00", "#FD6BA6"];
      let shadowColor = ["#232856", "#103D5F", "#124441", "#543821", "#5B1343"];
      let barWidth = 30;
      const renderLeftFourBar = () => {
        const option = {
          grid: {
            left: 80,
            right: 80,
            top: 50,
            bottom: 50
          },
          xAxis: {
            type: 'category',
            axisTick: {
              length: 0
            },
            splitLine: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "#2B2D5C"
              }
            },
            axisLabel: {
              textStyle: {
                fontSize: '15px',
                fontWeight: '800',
                color: '#7D7FBA',
              },
              margin: 20,

            },
            data: titleData
          },
          yAxis: {
            name: '单位：%',
            type: 'value',
            nameTextStyle: {
              fontSize: '16px',
              fontWeight: 400,
              color: '#7D7FBA',
            },
            axisLine: {
              lineStyle: {
                color: "#7D7FBA"
              }
            },
            axisLabel: {
              show: true
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#2B2D5C"
              }
            },

          },
          tooltip: {//提示框组件
            trigger: 'axis',
            formatter: function (params: any) {
              let name1 = params[0].name;
              let value = params[0].value;
              let str = `<div>${name1}:${value}%</div>`;
              return str;
            },
          },
          series: [
            {
              name: "数据上椭圆",
              type: 'pictorialBar',
              symbolSize: [barWidth, 10],
              symbolOffset: [0, -6],
              symbolPosition: 'end',
              z: 15,
              data: data,
              itemStyle: {
                normal: {
                  color: function (params: any) {
                    return color[params.dataIndex]
                  },
                }
              }
            },
            {
              name: '下椭圆',
              type: 'pictorialBar',
              symbolSize: [barWidth, 10],
              symbolOffset: [0, 7],
              z: 12,
              itemStyle: {
                normal: {
                  color: function (params: any) {
                    return color[params.dataIndex]
                  },
                }
              },
              "data": data
            },
            {
              name: '真实数据',
              type: 'bar',
              "barWidth": barWidth,
              barGap: '10%', // Make series be overlap
              barCateGoryGap: '10%',
              z: 14,
              itemStyle: {
                normal: {
                  color: function (params: any) {
                    return color[params.dataIndex]
                  },
                }
              },
              data: data
            },
            {
              name: "阴影椭圆",
              type: 'pictorialBar',
              symbolSize: [barWidth, 10],
              symbolOffset: [0, -6],
              symbolPosition: 'end',
              z: 12,
              "label": {
                "show": false,
              },
              itemStyle: {
                normal: {
                  color: function (params: any) {
                    return color[params.dataIndex]
                  },
                }
              },
              data: shadowYData
            },
            {
              name: "阴影柱体",
              type: 'bar',
              "barWidth": barWidth,
              barCateGoryGap: '10%',
              "zlevel": 0,
              "barGap": "-100%",
              itemStyle: {
                normal: {
                  color: function (params: any) {
                    return shadowColor[params.dataIndex]
                  },
                }
              },
              data: shadowYData
            },
          ]
        }
        const myChart = window.$echart.init(document.getElementById('LeftFourBar'));
        myChart.setOption(option)
      }
      onMounted(async () => {
        await p.getDemolitionInfo()
          .then(res => {
            if (res.data) {
              titleData=res.data.demolitionType
              data=res.data.demolitionProgress
            }
          })
        renderLeftFourBar()
      })
      return {}
    }
  });
</script>

<style lang="less" scoped>
  .LeftFour {
    .box {
      .content {
        height: 380px;
        padding: 0;
        display: flex;
        justify-content: space-between;

        #LeftFourBar {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
