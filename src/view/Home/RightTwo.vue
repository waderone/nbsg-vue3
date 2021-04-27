/**
* @author  sparkHou
* @date 2021-04-25 19:00
* @Description:
*/

<template>
  <div class="RightTwo">
    <div class="box boxSide">
      <div class="title">
        检查闭环
      </div>
      <div class="content">
        <div class="left-child">
          <div class="chartBox">
            <div class="title-a">
              <img src="../../assets/img/home/green-bar.png" alt=""/>
              质量检查
            </div>
            <div class="chartContainer">
              <div style="padding-top: 14px"></div>
              <div class=" circle circle-one">
                <div id="RightTwoChartOne">

                </div>
              </div>
              <div class="text">
                超时未完成数量
              </div>
            </div>
          </div>
          <div class="chartBox">
            <div class="title-a">
              <img src="../../assets/img/home/green-bar.png" alt=""/>
              安全检查
            </div>
            <div class="chartContainer">
              <div style="padding-top: 14px"></div>
              <div class=" circle circle-two">
                <div id="RightTwoChartTwo">

                </div>
              </div>
              <div class="text">
                超时未完成数量
              </div>
            </div>
          </div>
        </div>
        <div class="right-child">
          <div class="chartBox" style="padding-right: unset">
            <div class="title-a">
              <img src="../../assets/img/home/green-bar.png" alt=""/>
              合同履约检查
            </div>
            <div class="chartContainer">
              <div id="RightTwoChartThree">

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {defineComponent, onMounted} from 'vue';
  import {Liquid} from '@antv/g2plot';
  import provider from './provider'

  export default defineComponent({
    name: 'RightTwo',
    setup() {
      // chart1-质量检查
      const color1 = "#3244F1"
      let optionOne = {
        autoFit: true,
        percent: 0.33,
        radius: 1,
        outline: {
          border: 1,
          distance: 0,
          style: {
            stroke: color1
          }

        },
        wave: {
          length: 128,
        },
        liquidStyle: {
          fill: color1,
          fillOpacity: 0.3,
          opacity: 0.3,
        },
        statistic: {
          content: {
            style: () => ({
              fontSize: 24,
              lineHeight: 1,
            }),
            // @ts-ignore
            customHtml: (container, view, {percent}) => {
              const text = `${percent}`;
              return `<div style="color:#ABADD3">${text}</div>`;
            },
          },
        }
      }
      const RightTwoChartOne = () => {
        // @ts-ignore
        const liquidPlot = new Liquid('RightTwoChartOne', optionOne);
        liquidPlot.render();
      }
      onMounted(() => {
        RightTwoChartOne()
      })
      // chart2-安全检查
      const color2 = "#00BEAB"
      let optionTwo = {
        autoFit: true,
        percent: 0.33,
        radius: 1,
        outline: {
          border: 1,
          distance: 0,
          style: {
            stroke: color2
          }

        },
        wave: {
          length: 128,
        },
        liquidStyle: {
          fill: color2,
          fillOpacity: 0.3,
          opacity: 0.3,
        },
        statistic: {
          content: {
            style: () => ({
              fontSize: 24,
              lineHeight: 1,
            }),
            // @ts-ignore
            customHtml: (container, view, {percent}) => {
              const text = `${percent}`;
              return `<div style="color:#ABADD3">${text}</div>`;
            },
          },
        }
      }
      const RightTwoChartTwo = () => {
        // @ts-ignore
        const liquidPlot = new Liquid('RightTwoChartTwo', optionTwo);
        liquidPlot.render();
      }
      onMounted(() => {
        RightTwoChartTwo()
      })
      //chart3-人员考勤
      let dataThreeOne = [80.88, 96.00, 44, 55, 77]
      let dataThreeTwo = [80.88, 96.00, 44, 55, 77]
      let titleThree = ['03-31', '04-01', '04-02', '04-03', '04-05']
      let legendThree = ['施工单位', '监理单位']
      let barWidth = 14;
      const RightTwoChartThree = () => {
        const myChart = window.$echart.init(document.getElementById('RightTwoChartThree'));
        myChart.setOption({
          grid: {
            left: 55,
            right: 30,
            top: 60,
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
            data: titleThree
          },
          yAxis: {
            name: '人员出勤率：%',
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
          },
          legend: {
            top: '0',
            right: '30',
            padding: [5, 0, 0, 0],   //可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
            data: legendThree,
            textStyle: {
              fontSize: '12px',
              fontWeight: 400,
              color: '#ABADD3',
            }
          },
          series: [
            {
              name: legendThree[0],
              type: 'bar',
              barWidth: barWidth,
              data: dataThreeOne,
              itemStyle: {
                color: new window.$echart.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: '#2042F9'},                   //柱图渐变色
                    {offset: 1, color: '#5C68F8'},                   //柱图渐变色
                  ]
                )
              },
            },
            {
              name: legendThree[1],
              type: 'bar',
              barWidth: barWidth,
              data: dataThreeTwo,
              itemStyle: {
                color: new window.$echart.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: '#02AFBA'},                   //柱图渐变色
                    {offset: 1, color: '#17A970'},                   //柱图渐变色
                  ]
                )
              },
            }
          ]
        })
      }
      onMounted(async () => {
        await provider.getAttendanceList()
          .then(res => {
            if (res.data) {
              titleThree = res.data.construction.attendanceDate
              dataThreeOne = res.data.construction.attendanceRate
              dataThreeTwo = res.data.supervisor.attendanceRate
            }
          })
        console.log(titleThree, dataThreeOne, dataThreeTwo)
        RightTwoChartThree()
      })
      return {}
    }
  });
</script>

<style lang="less" scoped>
  .RightTwo {
    .box {
      .content {
        height: 380px;
        padding: 0;
        display: flex;

        .left-child {
          width: 200px;

          .chartBox {
            height: 190px;
          }
        }

        .right-child {
          width: 688px;
        }


        .chartBox {
          padding: 0 36px;
          padding-top: 20px;
          position: relative;

          .title-a {

            display: flex;
            align-items: center;
            font-size: 18px;
            font-weight: bold;
            color: #7D7FBA;
            position: relative;

            img {
              display: block;
              height: 19px;
              margin-right: 11px;
            }
          }

          .chartContainer {
            position: relative;

            .text {
              font-size: 15px;
              font-weight: 400;
              color: #7D7FBA;
              text-align: center;
              padding-top: 8px;
            }
          }
        }
      }

    }

    .circle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 104px;
      height: 104px;
      margin: 0 auto;
    }

    .circle-one {
      background: url("../../assets/img/home/circleTwo.png");
    }

    .circle-two {
      background: url("../../assets/img/home/circleOne.png");
    }

    #RightTwoChartOne {
      width: 86px;
      height: 86px;
    }

    #RightTwoChartTwo {
      width: 86px;
      height: 86px;
    }

    #RightTwoChartThree {
      width: 650px;
      height: 340px;
    }
  }
</style>
