/**
* @author  sparkHou
* @date 2021-04-23 15:06
* @Description:
*/

<template>
  <div class="LeftTwo">
    <div class="box boxSide">
      <div class="title">
        投资进度
      </div>
      <div class="content">
        <div class="left">
          <div class="chartBox">
            <div class="chartF">
              <div id="chart"></div>
              <div id="chart2"></div>
            </div>
            <div class="legend">
              <div class="item item1">
                <div>
                  计划总投资
                </div>
                <div class="unit">
                  49.8 <span>亿</span>
                </div>
              </div>
              <div class="item item2">
                <div>
                  实际投资
                </div>
                <div class="unit">
                  49.8 <span>亿</span>
                </div>
              </div>
            </div>
          </div>
          <div class="today">
            <div class="title-a">今日产值</div>
            <div class="val">
              0.18<span>亿</span>
            </div>
          </div>
        </div>
        <div class="right">
          <!--          <v-chart class="LeftTwoColumn" :option="option"/>-->
          <div id="LeftTwoColumn">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {defineComponent, onMounted} from 'vue';
  import {Pie} from '@antv/g2plot';

  export default defineComponent({
    name: 'LeftTwo',
    setup() {
      //环图
      const renderChart = () => {
        const data = [
          {type: '分类一', value: 100},
        ];
        const piePlot = new Pie('chart', {
          width: 207,
          height: 207,
          appendPadding: 1,
          data,
          angleField: 'value',
          colorField: 'type',
          radius: 1,
          legend: false,
          innerRadius: 0.8,
          label: {
            type: 'inner',
            offset: '-50%',
            content: '',
          },
          pieStyle: {
            lineWidth: 0,
            fill: 'l(0) 0:#4C60F7 1:#4F61FC',
          },
          interactions: [{type: 'element-selected'}, {type: 'element-active'}],
          statistic: {
            title: false,
            content: {
              style: {
                whiteSpace: 'pre-wrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              },
              formatter: () => '',
            },
          }


        });
        piePlot.render();
      }
      const renderChart2 = () => {
        const data = [
          {type: '实际投资', value: 22},
          {type: '还未完成', value: 78},
        ];
        const piePlot = new Pie('chart2', {
            width: 170,
            height: 170,
            appendPadding: 1,
            data,
            angleField: 'value',
            colorField: 'type',
            radius: 1,
            legend: false,
            innerRadius: 0.8,
            color: ['#19D9C0', '#1D1F40'
            ],
            label: {
              type: 'inner',
              offset:
                '-50%',
              content:
                '',
            }
            ,
            pieStyle: {
              lineWidth: 0,
            }
            ,
            interactions: [{type: 'element-selected'}, {type: 'element-active'}],
            statistic:
              {
                title: {
                  // @ts-ignore
                  style: () => ({
                    fontSize: 30,
                    color: '#ABADD3',
                    lineHeight: 1,
                  }),
                  // @ts-ignore
                  customHtml: (container, view, datum, data = []) => {
                    return `<div style="padding-bottom: 10px">${data[0].value.toFixed(1) || 0}%</div>`;
                  },
                },
                content:
                  {
                    // @ts-ignore
                    style: () => ({
                      fontSize: 20,
                      color: '#7D7FBA',
                      lineHeight: 1,
                    }),
                    // @ts-ignore
                    customHtml: () => {
                      return `已完成投资`;
                    },
                  }
                ,
              }
            ,
          })
        ;

        piePlot.render();
      }
      onMounted(() => {
        renderChart()
        renderChart2()

      })
      //柱状图
      const option = {
        grid: {
          left: 50,
          right: 0,
          top: 30,
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
          data: ['本年度计划投资', '截止上月计划投资', '截止上月实际投资']
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
            data: [120, 200, 150],
            type: 'bar',
            barWidth: 20,
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
                    {offset: 0, color: '#A154FB'},                   //柱图渐变色
                    {offset: 1, color: '#4F61FC'},                   //柱图渐变色
                  ]
                )
              }
            }
          }
        ]
      }
      const renderLeftTwoColumn = () => {
        const myChart = window.$echart.init(document.getElementById('LeftTwoColumn'));
        myChart.setOption(option)
      }
      onMounted(() => {
        renderLeftTwoColumn()
      })
      return {}
    }
  });
</script>

<style lang="less" scoped>
  @chart1-size: 207px;
  .LeftTwo {
    .content {
      height: 380px;
      padding: 0 26px 0 33px;
      display: flex;
      justify-content: space-between;

      .left {
        width: 362px;

        .chartBox {
          margin-top: 54px;
          display: flex;
          justify-content: space-between;

          .chartF {
            width: @chart1-size;
            height: @chart1-size;
            position: relative;
          }

          #chart {
            width: @chart1-size;
            height: @chart1-size;
          }

          #chart2 {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
          }

          .legend {
            .item {
              width: 130px;
              border-left: 2px solid #4362ED;
              padding-left: 18px;
              font-size: 18px;
              font-weight: 800;

              .unit {
                padding-top: 10px;

                span {
                  font-size: 16px;
                  padding-left: 5px;
                }
              }
            }

            .item1 {
              border-left: 4px solid #4362ED;
              color: #4362ED;
            }

            .item2 {
              margin-top: 26px;
              border-left: 4px solid #1BD7C3;
              color: #1BD7C3;
            }
          }
        }

        .today {
          margin-top: 32px;
          width: 362px;
          height: 54px;
          background: rgba(70, 79, 167, 0.15);
          border-radius: 10px;
          display: flex;
          align-items: center;

          .title-a {
            padding-left: 34px;
            font-size: 20px;
            font-weight: 400;
            color: #7D7FBA;
          }

          .val {
            padding-left: 22px;
            font-size: 26px;
            font-weight: bold;
            color: #19D9C0;

            span {
              padding-left: 4px;
              font-size: 18px;
            }
          }
        }
      }

      .right {
        #LeftTwoColumn {
          margin-top: 30px;
          width: 430px;
          height: 300px;
        }
      }
    }
  }
</style>
