/**
* @author  sparkHou
* @date 2021-04-25 19:00
* @Description:
*/

<template>
  <div class="RightThree">
    <div class="box boxSide">
      <div class="title">
        重大问题清单
      </div>
      <div class="content">
        <div class="list"
             v-show="index<3"
             v-for="(item,index) in list"
             :key="index">
          <div class="index">
            {{index+1}}
          </div>
          <div class="text-child">
            <div class="title-child">
              {{item.title}}
            </div>
            <a-tooltip placement="topLeft">
              <template #title>
                <div
                  style="width: 500px;font-size: 16px;line-height: 1.3;padding: 10px;background-color: black;border-radius: 5px">
                  {{item.content}}
                </div>
              </template>
              <div class="content-child">
                <span>当前进展：</span>{{item.content}}
              </div>
            </a-tooltip>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {defineComponent, ref, onMounted} from 'vue';
  import p from './provider'

  export default defineComponent({
    name: 'RightThree',
    setup() {
      let list = ref(
        [
          {
            title: '杭州侧预制场临时用地未落实',
            content: '9月3日，省交通厅洪秀敏副厅长调研项目期间，对当前急于解决的杭州侧预制场临时用地问题 进行协调，明确在萧山区党湾镇和对当前急于解决的杭州侧预制场临时用地问题 进行协调，明确在萧山区党湾镇和'
          },
          {
            title: '杭州侧预制场临时用地未落实',
            content: '9月3日，省交通厅洪秀敏副厅长调研项目期间，对当前急于解决的杭州侧预制场临时用地问题 进行协调，明确在萧山区党湾镇和对当前急于解决的杭州侧预制场临时用地问题 进行协调，明确在萧山区党湾镇和'
          },
          {
            title: '杭州侧预制场临时用地未落实',
            content: '9月3日，省交通厅洪秀敏副厅长调研项目期间，对当前急于解决的杭州侧预制场临时用地问题 进行协调，明确在萧山区党湾镇和对当前急于解决的杭州侧预制场临时用地问题 进行协调，明确在萧山区党湾镇和'
          },
        ]
      )
      onMounted(async () => {
        await p.getMajorIssuesList()
          .then(res => {
            if (res.data) {
              list.value = []
              res.data.problemList.forEach((item: any) => {
                let obj = {
                  title: '',
                  content: ''
                }
                obj.title = item.problemName
                obj.content = item.problemDesc
                list.value.push(obj)
              })
            }
          })

        console.log(list)
      })
      return {list}
    }
  });
</script>

<style lang="less" scoped>
  .RightThree {
    .box {
      .content {
        height: 380px;
        padding: 37px 48px 0 60px;

        .list {
          margin-bottom: 30px;
          display: flex;
          height: 84px;

          .index {
            width: 92px;
            height: 84px;
            background: url("../../assets/img/home/index.png");
            background-size: cover;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
            font-weight: normal;
            color: #1BD8C4;
          }

          .text-child {
            flex: 1;
            padding-left: 31px;
            padding-top: 10px;

            .title-child {
              font-size: 14px;
              font-weight: bold;
              color: #ACAEDB;
              padding-bottom: 13px;
            }

            .content-child {
              font-size: 14px;
              line-height: 1.2;
              font-weight: 400;
              color: #9193DD;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;

              span {
                color: #1BD8C4;
              }
            }
          }
        }
      }
    }
  }
</style>
