/**
* @author  sparkHou
* @date 2021-04-14 17:00
* @Description:
*/
<template>
  <div class="Home">
    <div class="top">
      <div class="left topItem">
        <div class="button g-cursor"
             v-for="(item,index) in topButtonLeft"
             :class="item.index===buttonIndex?'active':''"
             :key="index"
             @click="changeButton(item.index)">
          {{item.text}}
        </div>
      </div>
      <div class="right topItem">
        <div class="button g-cursor"
             v-for="(item,index) in topButtonRight"
             :class="item.index===buttonIndex?'active':''"
             :key="index"
             @click="changeButton(item.index)">
          {{item.text}}
        </div>
        <div class="waitTodo g-cursor">
          <a-badge count="5">
            <img src="../../assets/img/home/waitToDo.png" alt=""/>
          </a-badge>
        </div>
      </div>
    </div>
    <div class="body">
      <div class="left">
        <LeftOne/>
        <LeftTwo/>
        <LeftThree/>
        <LeftFour/>
      </div>
      <div class="center">
        <CenterOne/>
        <CenterTwo/>
        <CenterThree/>
      </div>
      <div class="right">
        <RightOne/>
        <RightTwo/>
        <RightThree/>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
  import {defineComponent, ref} from 'vue';
  import LeftOne from './LeftOne.vue'
  import LeftTwo from './LeftTwo.vue'
  import LeftThree from './LeftThree.vue'
  import LeftFour from './LeftFour.vue'
  import CenterOne from './CenterOne.vue'
  import CenterTwo from './CenterTwo.vue'
  import CenterThree from './CenterThree.vue'
  import RightOne from './RightOne.vue'
  import RightTwo from './RightTwo.vue'
  import RightThree from './RightThree.vue'

  export default defineComponent({
    name: 'Home',
    components: {LeftOne,
      LeftTwo,
      LeftThree,
      LeftFour,
      CenterOne,
      CenterTwo,
      CenterThree,
      RightOne,
      RightTwo,
      RightThree,
    },
    setup() {
      //表头按钮
      let buttonIndex = ref(1)
      let topButtonLeft: Array<any> = [
        {
          text: '综合看板',
          index: 1
        },
        {
          text: '指挥长看板',
          index: 2
        },
        {
          text: '党建看板',
          index: 3
        },
      ]
      let topButtonRight: Array<any> = [
        {
          text: '进度看板',
          index: 4
        },
        {
          text: '质量看板',
          index: 5
        },
        {
          text: '安全看板',
          index: 6
        },
      ]
      const changeButton = (index: number): void => {
        buttonIndex.value = index
      }
      return {
        topButtonLeft,
        topButtonRight,
        changeButton,
        buttonIndex,
      }
    }
  });
</script>

<style lang="less" scoped>
  .Home {
    width: @global-width;
    height: @global-height;
    background: url("../../assets/img/bg.jpg");
    background-size: cover;

    .top {
      width: 100%;
      height: 157px;
      background: url("../../assets/img/home/top.png") center;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .topItem {
        width: 1500px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 48px 80px 0 80px;
      }

      .button {
        width: 240px;
        height: 64px;
        font-weight: 400;
        color: #ABADD3;
        line-height: 64px;
        font-size: 30px;
        text-align: center;
      }

      .button.active {
        color: #48C0F8;
        background: url("../../assets/img/home/button-bg.png");
        background-size: cover;
      }

    }

    .body {
      padding: 51px 60px 0 60px;
      display: flex;
      justify-content: space-between;

      .left {
        width: 892px;
      }

      .right {
        width: 892px;
      }

      .center {
        width: 1834px;
      }
    }
  }
</style>
<style lang="less">
  .Home {
    .body {
      .box {
        margin-top: 38px;

        .title {
          font-size: 30px;
          font-weight: bold;
          color: #D2D4E6;
          line-height: 72px;
          height: 72px;
          padding-left: 29px;
        }
      }

      .boxSide {
        width: 892px;
        overflow: hidden;

        .title {
          background: url("../../assets/img/home/box-header.png");
          background-size: cover;
        }

        .content {
          background: rgba(77, 80, 138, 0.15);
          border: 1px solid #565AB6;
          border-top: unset;
        }
      }

      .boxCenter {
        width: 1834px;
        overflow: hidden;

        .title {
          background: url("../../assets/img/home/box-header-long.png");
          background-size: cover;
        }

        .content {
          background: rgba(77, 80, 138, 0.15);
          border: 1px solid #565AB6;
          border-top: unset;
        }
      }
    }
  }
</style>
