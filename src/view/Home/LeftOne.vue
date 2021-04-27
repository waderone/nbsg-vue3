/**
* @author  sparkHou
* @date 2021-04-23 14:04
* @Description:
*/

<template>
  <div class="LeftOne">
    <div class="box boxSide" style="margin-top: unset">
      <div class="title">
        项目基础信息
      </div>
      <div class="content">
        <div class="item">
          <div class="chartBox blue-border">
            <div id="LeftOneChart1" class="Chart">
            </div>
          </div>
          <div class="text">
            <div class="val">
              {{dataMap.totalMileage}}<span>km</span>
            </div>
            <div class="unit">
              里程
            </div>
          </div>
        </div>
        <div class="item">
          <div class="chartBox green-border">
            <div id="LeftOneChart2" class="Chart">
            </div>
          </div>
          <div class="text">
            <div class="val">
              {{dataMap.totalInvestment}}<span>亿</span>
            </div>
            <div class="unit">
              项目总投资
            </div>
          </div>
        </div>
        <div class="item">
          <div class="chartBox red-border">
            <div id="LeftOneChart3" class="Chart">
            </div>
          </div>
          <div class="text">
            <div class="val">
              {{dataMap.totalConstructionPeriod}}<span>天</span>
            </div>
            <div class="unit">
              工期
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {defineComponent, onMounted, reactive} from 'vue';
  import {Liquid} from '@antv/g2plot';
  import provider from './provider'

  interface DataMap {
    [key: string]: number
  }

  export default defineComponent({
    name: 'LeftOne',
    setup() {
      let dataMap = reactive<DataMap>({
        totalMileage: 0,//总里程
        curFinishMileage: 0,//当前完成里程
        totalInvestment: 0,//总投资
        curFinishInvestment: 0,//当前投资
        totalConstructionPeriod: 0,//总工期
        curConstructionPeriod: 0,//当前工期
      })
      const getPercentage = (val1: number, val2: number): number => {
        return Number((val1 / val2).toFixed(2))
      }


      const renderOne = () => {
        const color1 = "#05AEFD"
        const liquidPlot = new Liquid('LeftOneChart1', {
          autoFit: true,
          percent: getPercentage(dataMap.curFinishMileage,dataMap.totalMileage),
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
              // @ts-ignore
              style: () => ({
                fontSize: 36,
                lineHeight: 1,
              }),
              // @ts-ignore
              customHtml: (container, view, {percent}) => {
                const text = `${(percent * 100).toFixed(2)}`;
                return `<div style="color:${color1}">${text}</div>`;
              },
            },
          }
        });
        liquidPlot.render();
      }
      const renderTwo = () => {
        const color1 = "#1CFE96"
        const liquidPlot = new Liquid('LeftOneChart2', {
          autoFit: true,
          percent: getPercentage(dataMap.curFinishInvestment,dataMap.totalInvestment),
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
              // @ts-ignore
              style: () => ({
                fontSize: 36,
                lineHeight: 1,
              }),
              // @ts-ignore
              customHtml: (container, view, {percent}) => {
                const text = `${(percent * 100).toFixed(2)}`;
                return `<div style="color:${color1}">${text}</div>`;
              },
            },
          }
        });
        liquidPlot.render();
      }
      const renderThree = () => {
        const color1 = "#FD4A6A"
        const liquidPlot = new Liquid('LeftOneChart3', {
          autoFit: true,
          percent: getPercentage(dataMap.curConstructionPeriod,dataMap.totalConstructionPeriod),
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
              // @ts-ignore
              style: () => ({
                fontSize: 36,
                lineHeight: 1,
              }),
              // @ts-ignore
              customHtml: (container, view, {percent}) => {
                const text = `${(percent * 100).toFixed(2)}`;
                return `<div style="color:${color1}">${text}</div>`;
              },
            },
          }
        });
        liquidPlot.render();
      }
      onMounted(async () => {
        await provider.getProjectInfo({})
          .then(res => {
            if (res.data) {
              for (let key in dataMap) {
                dataMap[key] = res.data[key]
              }
            }
          })
        renderOne()
        renderTwo()
        renderThree()
      })
      return {dataMap}
    }
  });
</script>

<style lang="less" scoped>
  .LeftOne {
    .box {
      .content {
        height: 380px;
        padding: 32px 64px 0 64px;
        display: flex;
        justify-content: space-between;

        .chartBox {
          width: 226px;
          height: 226px;
          border-radius: 50%;
          position: relative;

          .Chart {
            width: 170px;
            height: 170px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
          }
        }

        .blue-border {
          border: 1px dashed #05AEFD;
        }

        .green-border {
          border: 1px dashed #1CFE96;
        }

        .red-border {
          border: 1px dashed #FD4A6A;
        }

        .item {
          .text {
            text-align: center;

            .val {
              margin-top: 18px;
              font-size: 36px;
              height: 27px;
              font-weight: 800;
              color: #FFFFFF;

              span {
                font-size: 20px;
              }
            }
          }

          .unit {
            height: 22px;
            margin-top: 12px;
            font-size: 24px;
            font-weight: 400;
            color: #7D7FBA;
          }
        }
      }
    }
  }
</style>
