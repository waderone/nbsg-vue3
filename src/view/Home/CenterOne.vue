/**
* @author  sparkHou
* @date 2021-04-25 14:16
* @Description:
*/

<template>
  <div class="CenterOne">
    <div class="box boxCenter" style="margin-top: unset">
      <div class="content">
        <img src="../../assets/img/home/ex.png" alt=""/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {defineComponent} from 'vue';

  export default defineComponent({
    name: 'CenterOne',
    setup() {
      return {}
    }
  });
</script>

<style lang="less" scoped>
  .CenterOne {
    .box {
      .content {
        border: unset !important;
        background-color: rgba(0, 0, 0, 0)!important;
        height: 942px;
        padding: 0;
        display: flex;
        justify-content: space-between;

        img {
          width: 100%;
          object-fit:  scale-down ;
        }
      }
    }
  }
</style>
