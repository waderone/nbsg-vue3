/**
* @author  sparkHou
* @date 2021-04-25 09:51
* @Description:
*/

<template>
  <div class="LeftThree">
    <div class="box boxSide">
      <div class="title">
        节点工程
      </div>
      <div class="content">
        <div id="LeftThreeBar">

        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {defineComponent, onMounted} from 'vue';

  export default defineComponent({
    name: 'LeftThree',
    setup() {
      //柱状图
      const option = {
        grid: {
          left: 200,
          right: 50,
          top: 50,
          bottom: 20
        },
        yAxis: {
          name: '节点进度：%',
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
            lineStyle: {
              color: "#2B2D5C"
            }
          },
          axisLabel: {
            textStyle: {
              fontSize: '12px',
              fontWeight: '800',
              color: '#7D7FBA',
            },
            margin: 40,
            formatter: function (value: any) {
              value = value.replace(' ', '\n')
              return value
            }

          },
          data: ['XX桥梁工程右幅2# 墩2-1#钻孔灌注桩',
            'XX桥梁工程右幅2# 墩2-2#钻孔灌注桩',
            'XX桥梁工程右幅2# 墩2-3#钻孔灌注桩']
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
        },
        series: [
          {
            data: [80.88, 96.00, 44],
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
                  show: true,//是否展示
                  position: 'right',	//在上方显示
                  textStyle: {	    //数值样式
                    color: '#ABADD3',
                    fontSize: 16
                  }
                },
                color: function (params: any) {
                  if (params.value < 80) {
                    return '#FF106E'
                  } else {
                    return '#5470ED'
                  }

                },
                //color: '#5470ED'
              }
            }
          }
        ]
      }
      const renderLeftTwoColumn = () => {
        const myChart = window.$echart.init(document.getElementById('LeftThreeBar'));
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
  .LeftThree {
    .box {
      .content {
        height: 380px;
        padding: 0;
        display: flex;
        justify-content: space-between;

        #LeftThreeBar {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
