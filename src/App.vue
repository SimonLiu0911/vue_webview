<template>
  <Page />
  <loading v-model:active="isLoading"
    :can-cancel="true"
    :on-cancel="onCancel"
    :is-full-page="fullPage"/>
</template>

<script>
import { ref } from 'vue';
import Page from '@/views/Page.vue';
import Loading from 'vue-loading-overlay';
// import useCommon from '@/libs/Composition/global'

export default {
  name: 'App',
  components: {
    Page,
    Loading
  },
  setup () {
    // const { store } = useCommon();

    const isLoading = ref(false);
    const fullPage = ref(true);

    const onCancel = () => {
      console.log('User cancelled the loader.')
    }

    return {
      isLoading,
      fullPage,
      onCancel
    }
  }
}
</script>

<style>
</style>
