/**
* @author  sparkHou
* @date 2021-04-25 19:00
* @Description:
*/

<template>
  <div class="RightOne">
    <div class="box boxSide" style="margin-top: unset">
      <div class="title">
        物联网重大超标预警
      </div>
      <div class="content">
        <div class="chartBox">
          <div class="title-a">
            <img src="../../assets/img/home/green-bar.png" alt=""/>
            超标趋势图
            <div class="selectBox">
              <div v-for="(item,index) in selectList"
                   class="item"
                   :class="item.name===active?'active':''"
                   @click="changeSelect(item)"
                   :key="index">{{item.name}}
              </div>
            </div>
          </div>
          <div class="chartContainer">
            <div id="RightOneChartOne">

            </div>
          </div>
        </div>
        <div class="floorTwo">
          <div class="left-child">
            <div class="chartBox">
              <div class="title-a">
                <img src="../../assets/img/home/green-bar.png" alt=""/>
                超标统计
              </div>
              <div class="chartContainer g-flex-between">
                <div class="countBox">
                  <div class="num">
                    575
                  </div>
                  <div class="unit">
                    总盘数
                  </div>
                </div>
                <div class="countBox">
                  <div class="num">
                    868.1320200
                  </div>
                  <div class="unit">
                    总方量
                  </div>
                </div>
              </div>
            </div>
            <div class="chartBox" style="margin-top: 30px">
              <div class="title-a g-flex-between">
                <div class="title-a">
                  <img src="../../assets/img/home/green-bar.png" alt=""/>
                  高级超标统计
                </div>

                <div class="progress">
                  <a-progress :percent="percent" :show-info="false"/>
                  <div class="tip" :style="getTip">
                    <div>
                      {{percent}}%
                    </div>
                    <img src="../../assets/img/home/tip.png" alt=""/>
                  </div>
                </div>
              </div>
              <div class="chartContainer">
              </div>
            </div>
          </div>
          <div class="right-child">
            <div class="chartBox">
              <div class="title-a">
                <img src="../../assets/img/home/green-bar.png" alt=""/>
                拌合机超标总数
              </div>
              <div class="chartContainer">
                <div id="RightOneChartTwo">

                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="chartBox">
          <div class="title-a">
            <img src="../../assets/img/home/green-bar.png" alt=""/>
            标准差控制图
          </div>
          <div class="chartContainer">
            <div id="RightOneChartThree">

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {defineComponent, onMounted, ref, computed} from 'vue';

  export default defineComponent({
    name: 'RightOne',
    setup() {
      // chart1
      let titleOne = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      let dataOne = [150, 230, 224, 218, 135, 147, 260]
      let optionOne = {
        grid: {
          left: 40,
          right: 40,
          top: 20,
          bottom: 20
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
          data: titleOne
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
        series: [{
          data: dataOne,
          symbol: 'circle',     //设定为实心点
          symbolSize: 8,   //设定实心点的大小
          type: 'line',
          color: '#4464F3',
          lineStyle: {
            normal: '#4464F3'
          },
          itemStyle: {
            normal: '#4464F3'
          },
          areaStyle: {
            normal: {
              color: new window.$echart.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  {offset: 0, color: '#2B387A'},                   //柱图渐变色
                  {offset: 1, color: '#1F2243'},                   //柱图渐变色
                ]
              ),
            }
          }, //填充区域样式

        }]
      }
      const RightOneChartOne = () => {
        const myChart = window.$echart.init(document.getElementById('RightOneChartOne'));
        myChart.setOption(optionOne)
      }
      onMounted(() => {
        RightOneChartOne()
      })
      let selectList = [{name: '拌合站'}, {name: '实验室'}, {name: '张拉机'}, {name: '压浆机'}]
      let active = ref('拌合站')
      const changeSelect = (item: any) => {
        active.value = item.name
      }
      //floor2
      let percent = ref<number>(50)
      let getTip = computed(() => {
        return `left:calc(${percent.value}% - 30px)`
      })
      // chart 2
      let dataTwo = [
        {
          value: 22,
          name: '已闭合',
          label: {
            show: false,
          },
        },
        {
          value: 78,
          name: '未闭合',
          label: {
            show: false,
          },
        },
      ]
      const optionTwo = {
        title: {
          show: true, //显示策略，默认值true,可选为：true（显示） | false（隐藏）
          text: '闭合率', //主标题文本，'\n'指定换行
          bottom: '0',
          left: 'center',
          padding: [10, 0, 0, 0],
          textStyle: {
            fontSize: '16px',
            fontWeight: 400,
            color: '#7D7FBA',
          }
        },
        tooltip: {
          trigger: 'item'
        },
        graphic: {//环形中间的字
          elements: [
            {
              type: "text",
              left: "center",
              top: "center",
              style: {
                text: `${dataTwo[0].value}%`,
                textAlign: "center",
                fill: "#B6B7E3",
                fontSize: 30
              }
            }
          ]
        },
        series: [
          {
            name: '拌合机超标总数',
            type: 'pie',
            color: ['#FF2C7F', '#3A3D68'],
            radius: ['60%', '80%'],
            avoidLabelOverlap: false,
            labelLine: {
              normal: {
                show: true,   //引导线显示
              }
            },
            data: dataTwo
          }
        ]
      }
      const RightOneChartTwo = () => {
        const myChart = window.$echart.init(document.getElementById('RightOneChartTwo'));
        myChart.setOption(optionTwo)
      }
      onMounted(() => {
        RightOneChartTwo()
      })
      //chart 4
      let titleThree = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      let dataThreeOne = [150, 230, 224, 218, 135, 147, 260]
      let dataThreeTwo = [123, 233, 123, 434, 231, 123, 443]
      let legendThree = ['指标1', '指标2']
      let optionThree = {
        grid: {
          left: 40,
          right: 40,
          top: 30,
          bottom: 20
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
          data: titleThree
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
            name: legendThree[0],
            data: dataThreeOne,
            symbol: 'circle',     //设定为实心点
            symbolSize: 8,   //设定实心点的大小
            type: 'line',
            color: '#4464F3',
            lineStyle: {
              normal: '#4464F3'
            },
            itemStyle: {
              normal: '#4464F3'
            },
          },
          {
            name: legendThree[1],
            data: dataThreeTwo,
            symbol: 'circle',     //设定为实心点
            symbolSize: 8,   //设定实心点的大小
            type: 'line',
            color: '#FF106E',
            lineStyle: {
              normal: '#FF106E'
            },
            itemStyle: {
              normal: '#FF106E'
            },
          },
        ]
      }
      const RightOneChartThree = () => {
        const myChart = window.$echart.init(document.getElementById('RightOneChartThree'));
        myChart.setOption(optionThree)
      }
      onMounted(() => {
        RightOneChartThree()
      })
      return {
        selectList,
        active,
        changeSelect,
        percent,
        getTip
      }
    }
  });
</script>

<style lang="less" scoped>
  .RightOne {
    .box {
      .content {
        height: 870px;
        padding: 0;

        .chartBox {
          padding: 0 36px;
          padding-top: 30px;
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

            .countBox {
              margin-top: 20px;
              width: 256px;
              height: 80px;
              background: rgba(70, 79, 167, 0.15);
              border-radius: 10px;
              text-align: center;

              .num {
                padding-top: 15px;
                font-size: 24px;
                font-weight: bold;
                color: #4464F3;
              }

              .unit {
                padding-top: 13px;
                font-size: 18px;
                font-weight: 400;
                color: #7D7FBA;
              }
            }
          }

          .progress {
            width: 380px;
            display: flex;
            position: relative;

            .tip {
              text-align: center;
              position: absolute;
              top: -40px;
              width: 60px;
              font-size: 18px;
              font-weight: 400;
              color: #ABADD3;

              img {
                display: inline-block;
                width: 10px;
                height: 10px;
                margin: 0 auto;
              }
            }
          }
        }

        .floorTwo {
          display: flex;

          .left-child {
            width: 600px;
          }

          .right-child {
            width: 289px;
          }
        }
      }

      .selectBox {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        display: flex;
        align-items: center;

        .item {
          cursor: pointer;
          width: 74px;
          height: 32px;
          border-radius: 10px;
          line-height: 32px;
          text-align: center;
          color: #7D7FBA;
        }

        .item.active {
          background: #1BD8C4;
          color: white;
        }
      }
    }

    #RightOneChartOne {
      width: 100%;
      height: 230px;
    }

    #RightOneChartThree {
      width: 100%;
      height: 230px;
    }

    #RightOneChartTwo {
      width: 100%;
      height: 240px;
    }
  }
</style>
<style lang="less">
  .RightOne {
    .ant-progress-inner {
      background-color: rgba(70, 79, 167, 0.15);

    }

    .ant-progress-success-bg, .ant-progress-bg {
      background-color: rgba(68, 100, 243, 1);
      height: 12px !important;
    }
  }
</style>
