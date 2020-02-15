<template>
<div id="app">
  <global-header/>
  <part-header/>
  <div class="container">
    <div class="row flex-xl-nowrap">
      <router-view name="mainview"/>
    <div class="order-2 order-md-1 col-12 col-md-3 px-0 bd-sidebar">
      <item-search/>
      <router-view name="side"/>
    </div>
  </div>
  <global-footer/>
</div>
</div>
</template>

<script>
  import PartHeader from '@/components/PartHeader';
  import ItemSearch from '@/components/ItemSearch';
  import GlobalHeader from '@/components/GlobalHeader';
  import GlobalFooter from '@/components/GlobalFooter';

  export default {
    name: 'App',
    components: {
      PartHeader,
      ItemSearch,
      GlobalHeader,
      GlobalFooter
    }
  }
</script>

<style>
  @import "assets/css/bootstrap.min.css";
  @import "assets/css/fontello.css";
  @import "assets/css/site1.css";
</style>
