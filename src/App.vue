<template>
  <div class="App" :class="theme">
    <div class="g-bgColor">
      <a-switch v-if="false" checked-children="明" un-checked-children="暗" v-model:checked="checked"/>
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
  import {defineComponent, ref, watch, computed} from 'vue';
  import {useStore} from '@/store'

  export default defineComponent({
    name: 'App',
    setup() {
      let store = useStore()
      // 切换主题
      let checked = ref<boolean>(true)
      let theme = computed(() => store.state.theme.type)
      watch(checked, (val) => {
        if (val) {
          store.dispatch('theme/changeType', 'light')
        } else {
          store.commit('theme/CHANGE_TYPE', 'dark')
        }
      })
      return {
        checked,
        theme,
      }
    }
  });
</script>

<style lang="less" scoped>
  .App {
    width: @global-width;
    height: @global-height;
    overflow: hidden;
  }
</style>
