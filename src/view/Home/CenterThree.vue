/**
* @author  sparkHou
* @date 2021-04-25 17:33
* @Description:
*/

<template>
  <div class="CenterThree">
    <div class="box boxCenter">
      <div class="title">
        各施工单位统计数字
      </div>
      <div class="content">
        <div class="chartBox">
          <div class="title-a">
            <img src="../../assets/img/home/green-bar.png" alt=""/>
            产业工人数
          </div>
          <div class="chartContainer">
            <div id="CenterThreeChartOne" class="pieChart">

            </div>
          </div>
        </div>
        <div class="chartBox">
          <div class="title-a">
            <img src="../../assets/img/home/green-bar.png" alt=""/>
            班组数
          </div>
          <div class="chartContainer">
            <div id="CenterThreeChartTwo" class="pieChart">

            </div>
          </div>
        </div>
        <div class="chartBox">
          <div class="title-a">
            <img src="../../assets/img/home/green-bar.png" alt=""/>
            设备数
          </div>
          <div class="chartContainer">
            <div id="CenterThreeChartThree" class="pieChart">

            </div>
          </div>
        </div>
        <div class="chartBox">
          <div class="title-a">
            <img src="../../assets/img/home/green-bar.png" alt=""/>
            平安守护指数
          </div>
          <div class="chartContainer">
            <div id="CenterThreeChartFour">

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {defineComponent, onMounted} from 'vue';

  export default defineComponent({
    name: 'CenterThree',
    setup() {
      //派图通用尺寸
      let radius = ['50%', '70%']
      let center = ['32%', '50%']
      //图表1
      let oneData = [
        {value: 22, name: '总部'},
        {value: 78, name: '一分部'},
        {value: 78, name: '二分部'},
        {value: 78, name: '三分部'},
        {value: 78, name: '四分部'},
        {value: 78, name: '五分部'},
        {value: 78, name: '六分部'},
        {value: 78, name: '七分部'},
      ]
      let title = '产业工人数'
      let colorOne = ['#056C93', '#0CD69B', '#F06CDF', '#8573FF', '#4450B5', '#0266FB', '#01F9FE', '#029ECA']
      const optionOne = {
        tooltip: {
          trigger: 'item'
        },
        grid: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        },
        legend: {
          orient: "vartical",
          top: "center",
          right: "20",
          itemWidth: 8, //图形宽度
          itemHeight: 12, //图形高度
          textStyle: {
            align: "right",
            fontSize: 16,
            color: '#7D7FBA',
            rich: {
              percent: {
                color: "#ABADD3",
                fontSize: 16
              }
            }
          },
          formatter: function (val: any) {
            let num
            oneData.forEach(item => {
              if (item.name === val) {
                num = item.value
              }
            })
            return val + ' ' + "{percent|" + num + "}"

          }
        },
        series: [
          {
            name: title,
            type: 'pie',
            radius: radius,
            center: center,
            avoidLabelOverlap: false,
            color: colorOne,
            label: {
              show: false
            },
            labelLine: {
              normal: {
                show: false,   //引导线显示
              }
            },
            data: oneData
          }
        ]
      }
      const CenterThreeChartOne = () => {
        const myChart = window.$echart.init(document.getElementById('CenterThreeChartOne'));
        myChart.setOption(optionOne)
      }
      onMounted(() => {
        CenterThreeChartOne()
      })
      //图表2
      let twoData = [
        {value: 22, name: '总部'},
        {value: 78, name: '一分部'},
        {value: 78, name: '二分部'},
        {value: 78, name: '三分部'},
        {value: 78, name: '四分部'},
        {value: 78, name: '五分部'},
        {value: 78, name: '六分部'},
        {value: 78, name: '七分部'},
      ]
      let titleTwo = '班组数'
      let colorTwo = ['#056C93', '#0CD69B', '#F06CDF', '#8573FF', '#4450B5', '#0266FB', '#01F9FE', '#029ECA']
      const optionTwo = {
        tooltip: {
          trigger: 'item'
        },
        grid: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        },
        legend: {
          orient: "vartical",
          top: "center",
          right: "20",
          itemWidth: 8, //图形宽度
          itemHeight: 12, //图形高度
          textStyle: {
            align: "right",
            fontSize: 16,
            color: '#7D7FBA',
            rich: {
              percent: {
                color: "#ABADD3",
                fontSize: 16
              }
            }
          },
          formatter: function (val: any) {
            let num
            twoData.forEach(item => {
              if (item.name === val) {
                num = item.value
              }
            })
            return val + ' ' + "{percent|" + num + "}"

          }
        },
        series: [
          {
            name: titleTwo,
            type: 'pie',
            radius: radius,
            center: center,
            avoidLabelOverlap: false,
            color: colorTwo,
            label: {
              show: false
            },
            labelLine: {
              normal: {
                show: false,   //引导线显示
              }
            },
            data: twoData
          }
        ]
      }
      const CenterThreeChartTwo = () => {
        const myChart = window.$echart.init(document.getElementById('CenterThreeChartTwo'));
        myChart.setOption(optionTwo)
      }
      onMounted(() => {
        CenterThreeChartTwo()
      })
      //图表3
      let dataThree = [
        {value: 22, name: '总部'},
        {value: 78, name: '一分部'},
        {value: 78, name: '二分部'},
        {value: 78, name: '三分部'},
        {value: 78, name: '四分部'},
        {value: 78, name: '五分部'},
        {value: 78, name: '六分部'},
        {value: 78, name: '七分部'},
      ]
      let titleThree = '班组数'
      let colorThree = ['#056C93', '#0CD69B', '#F06CDF', '#8573FF', '#4450B5', '#0266FB', '#01F9FE', '#029ECA']
      const optionThree = {
        tooltip: {
          trigger: 'item'
        },
        grid: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        },
        legend: {
          orient: "vartical",
          top: "center",
          right: "20",
          itemWidth: 8, //图形宽度
          itemHeight: 12, //图形高度
          textStyle: {
            align: "right",
            fontSize: 16,
            color: '#7D7FBA',
            rich: {
              percent: {
                color: "#ABADD3",
                fontSize: 16
              }
            }
          },
          formatter: function (val: any) {
            let num
            dataThree.forEach(item => {
              if (item.name === val) {
                num = item.value
              }
            })
            return val + ' ' + "{percent|" + num + "}"

          }
        },
        series: [
          {
            name: titleThree,
            type: 'pie',
            radius: radius,
            center: center,
            avoidLabelOverlap: false,
            color: colorThree,
            label: {
              show: false
            },
            labelLine: {
              normal: {
                show: false,   //引导线显示
              }
            },
            data: dataThree
          }
        ]
      }
      const CenterThreeChartThree = () => {
        const myChart = window.$echart.init(document.getElementById('CenterThreeChartThree'));
        myChart.setOption(optionThree)
      }
      onMounted(() => {
        CenterThreeChartThree()
      })
      //图标4
      let dataFour = [12, 12, 23, 34, 56, 67, 78, 89]
      let titleFour = ['总部', '一分部', '二分部', '三分部', '四分部', '五分部', '六分部', '七分部']
      const optionFour = {
        grid: {
          left: 50,
          right: 50,
          top: 30,
          bottom: 50
        },
        xAxis: {
          type: 'category',
          axisTick: {
            length: 0
          },
          axisLabel: {
            textStyle: {
              fontSize: '12px',
              fontWeight: '800',
              color: '#7D7FBA',
            }
          },
          data: titleFour
        },
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: "#7D7FBA"
            }
          },
          splitLine: {
            lineStyle: {
              color: "#2B2D5C"
            }
          }
        },
        tooltip: {//提示框组件
          trigger: 'axis',
        },
        series: [
          {
            data: dataFour,
            type: 'bar',
            barWidth: 14,
            //顶部数字展示pzr
            itemStyle: {
              //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
              emphasis: {
                barBorderRadius: 30
              },
              normal: {
                //柱形图圆角，初始化效果
                barBorderRadius: 20,
                label: {
                  show: false,//是否展示
                },
                color: new window.$echart.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: '#19D9C0'},                   //柱图渐变色
                    {offset: 1, color: '#3E9FF9'},                   //柱图渐变色
                  ]
                )
              }
            }
          }
        ]
      }
      const CenterThreeChartFour = () => {
        const myChart = window.$echart.init(document.getElementById('CenterThreeChartFour'));
        myChart.setOption(optionFour)
      }
      onMounted(() => {
        CenterThreeChartFour()
      })
      return {}
    }
  });
</script>

<style lang="less" scoped>
  .CenterThree {
    .box {
      .content {
        height: 380px;
        padding: 0;
        display: flex;
      }

      .chartBox {
        padding-left: 36px;
        position: relative;

        .title-a {
          padding-top: 40px;
          display: flex;
          align-items: center;
          font-size: 18px;
          font-weight: bold;
          color: #7D7FBA;

          img {
            display: block;
            height: 19px;
            margin-right: 11px;
          }
        }

        .select {
          position: absolute;
          top: 25px;
          right: 50px;
          width: 80px !important;

          .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
            background-color: #1B1A3A;
            border: 1px solid #2B2D5C;
            border-radius: 4px;
          }
        }
      }

      .chartContainer {
        position: relative;
      }

      .pieChart {
        height: 316px;
        width: 360px;
      }

      #CenterThreeChartFour {
        height: 316px;
        width: 608px;
      }
    }
  }
</style>
