/**
* @author  sparkHou
* @date 2021-04-25 14:35
* @Description:
*/

<template>
  <div class="CenterTwo">
    <div class="box boxCenter">
      <div class="title">
        形象进度
      </div>
      <div class="content">
        <div class="chartBox">
          <div class="title-a">
            <img src="../../assets/img/home/green-bar.png" alt=""/>
            形象进度（亿元）
          </div>
          <div class="chartContainer">
            <div id="CenterTwoChartOne">

            </div>
          </div>
        </div>
        <div class="chartBox">
          <div class="title-a">
            <img src="../../assets/img/home/green-bar.png" alt=""/>
            分类形象进度（%）
          </div>
          <div class="chartContainer">
            <div id="CenterTwoChartTwo">

            </div>
            <a-select
              v-model:value="chartTwoSelect"
              class="select"
              style="width: 120px"
              @focus="focus"
              size="small"
              ref="select"
              @change="chartTwoSelectChange"
            >
              <a-select-option v-for="(item,index) in chartTwoSelectList"
                               :key="index"
                               :value="item.val">{{item.val}}
              </a-select-option>
            </a-select>
          </div>
        </div>
        <div class="chartBox">
          <div class="title-a">
            <img src="../../assets/img/home/green-bar.png" alt=""/>
            总体形象进度
          </div>
          <div class="chartContainer">
            <div id="CenterTwoChartThree">

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {defineComponent, onMounted, ref, reactive} from 'vue';

  export default defineComponent({
    name: 'CenterTwo',
    setup() {
      //图表一
      let data = [317.18, 39.80, 49.80, 117.18, 117.18, 117.18, 117.18]
      let title = ['项目总产值', '截止本月底计划产值', '开工累计产值', '本年度计划产值', '本年度实际产值', '本月度计划产值', '本月度实际产值']
      title = title.reverse()
      data = data.reverse()
      const option = {
        grid: {
          left: 150,
          right: 50,
          top: 20,
          bottom: 20
        },
        yAxis: {
          nameTextStyle: {
            fontSize: '16px',
            fontWeight: 400,
            color: '#7D7FBA',
          },
          type: 'category',
          axisTick: {
            length: 0
          },
          splitLine: {
            show: false
          },
          axisLine: {
            show: false,
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
          data: title,
        },
        xAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: "#7D7FBA"
            }
          },
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          }
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
            data: data,
            type: 'bar',
            barWidth: 10,
            z: 1,
            showBackground: true,
            backgroundStyle: {
              color: '#2C2D4E'
            },
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
                  show: true,//是否展示
                  position: 'right',	//在上方显示
                  textStyle: {	    //数值样式
                    color: '#ABADD3',
                    fontSize: 16
                  }
                },
                color: new window.$echart.graphic.LinearGradient(
                  0, 0, 1, 0,
                  [
                    {offset: 0, color: '#1B1D3E'},                   //柱图渐变色
                    {offset: 1, color: '#00BAF9'},                   //柱图渐变色
                  ]
                ),
              }
            }
          },
          {
            name: "阴影椭圆",
            type: 'pictorialBar',
            symbolSize: 16,
            symbolOffset: [0, 0],
            symbolPosition: 'end',
            z: 2,
            "label": {
              "show": false,
            },
            itemStyle: {
              normal: {
                color: '#00BAF9',
              }
            },
            data: data
          },
        ]
      }
      const CenterTwoChartOne = () => {
        const myChart = window.$echart.init(document.getElementById('CenterTwoChartOne'));
        myChart.setOption(option)
      }
      onMounted(() => {
        CenterTwoChartOne()
      })
      //图标二
      let twoDataOne = [44, 44, 44, 44, 44, 44, 44, 44, 44]
      let twoDataTwo = [66, 66, 66, 66, 66, 66, 66, 66, 66]
      let twoTitle = ['土建', '路基', '路面', '桥涵', '隧道', '交安', '绿化', '机电', '房建']
      let twoLegend = ['计划进度', '实际进度']
      const optionTwo = {
        grid: {
          left: 30,
          right: 30,
          top: 70,
          bottom: 50
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          x: 'left',      //可设定图例在左、右、居中
          y: 'top',     //可设定图例在上、下、居中
          padding: [30, 0, 0, 0],   //可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
          data: twoLegend,
          textStyle: {
            fontSize: '12px',
            fontWeight: 400,
            color: '#ABADD3',
          }
        },
        xAxis: [
          {
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
            data: twoTitle
          }
        ],
        yAxis: [
          {
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
          }
        ],
        series: [
          {
            name: '计划进度',
            type: 'bar',
            barWidth: 20,
            showBackground: true,
            backgroundStyle: {
              color: '#2C2D4E'
            },
            stack: '广告',
            emphasis: {
              focus: 'series'
            },
            itemStyle: {
              normal: {
                label: {
                  show: false,//是否展示
                },
                color: new window.$echart.graphic.LinearGradient(
                  0, 1, 0, 0,
                  [
                    {offset: 0, color: '#1F2246'},                   //柱图渐变色
                    {offset: 1, color: '#1A71F7'},                   //柱图渐变色
                  ]
                )
              }
            },
            data: twoDataOne
          },
          {
            name: '实际进度',
            type: 'bar',
            barWidth: 20,
            stack: '广告',
            emphasis: {
              focus: 'series'
            },
            itemStyle: {
              normal: {
                label: {
                  show: false,//是否展示
                },
                color: new window.$echart.graphic.LinearGradient(
                  0, 1, 0, 0,
                  [
                    {offset: 0, color: '#1F2246'},                   //柱图渐变色
                    {offset: 1, color: '#0BF5C7'},                   //柱图渐变色
                  ]
                )
              }
            },
            data: twoDataTwo
          },
        ]
      }
      const CenterTwoChartTwo = () => {
        const myChart = window.$echart.init(document.getElementById('CenterTwoChartTwo'));
        myChart.setOption(optionTwo)
      }
      onMounted(() => {
        CenterTwoChartTwo()
      })
      let chartTwoSelect = ref('a')
      let chartTwoSelectList = reactive([
        {val: '累计', id: '1'}
      ])
      const chartTwoSelectChange = (val: any) => {
        console.log(val, '=')
      }

      //图标三
      let threeData = [
        {
          value: 22,
          name: '完成',
          label: {
            show: true,
            position: 'outside',
            formatter: '{color1|{d}%}',
            rich: {
              color1: {
                color: '#FF2C7F',
                fontSize: 30
              },
            }
          },
        },
        {
          value: 78, name: '未完成', label: {
            show: false,
          },
        },
      ]
      const optionThree = {
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
                text: `${threeData[0].value}%`,
                textAlign: "center",
                fill: "#B6B7E3",
                fontSize: 30
              }
            }
          ]
        },
        series: [
          {
            name: '总体形象进度',
            type: 'pie',
            color: ['#FF2C7F', '#3A3D68'],
            radius: ['60%', '80%'],
            avoidLabelOverlap: false,
            labelLine: {
              normal: {
                show: true,   //引导线显示
              }
            },
            data: threeData
          }
        ]
      }
      const CenterTwoChartThree = () => {
        const myChart = window.$echart.init(document.getElementById('CenterTwoChartThree'));
        myChart.setOption(optionThree)
      }
      onMounted(() => {
        CenterTwoChartThree()
      })
      return {chartTwoSelect, chartTwoSelectChange, chartTwoSelectList}
    }
  });
</script>

<style lang="less" scoped>
  .CenterTwo {
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

      #CenterTwoChartOne {
        height: 316px;
        width: 630px;
      }

      #CenterTwoChartTwo {
        height: 316px;
        width: 630px;
      }

      #CenterTwoChartThree {
        height: 316px;
        width: 460px;
      }
    }
  }
</style>
<style lang="less">
  .CenterTwo {
    .select {
      .ant-select-selector {
        background-color: #1B1A3A !important;
        border: 1px solid #2B2D5C !important;
        border-radius: 4px !important;
        color: #9294D3;

      }

      .ant-select-arrow {
        color: #9294D3 !important;
      }

    }


  }

  .ant-select-dropdown {
    background-color: #1B1A3A !important;
    color: #9294D3;

    .ant-select-item {
      background-color: #1B1A3A !important;
      color: #9294D3;
    }

    .ant-select-item-option-active {
      color: white;
    }

    .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
      color: white;
    }
  }
</style>

