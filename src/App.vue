<template>
<div id="app">
  <global-header/>
  <part-header/>
  <item-search/>
  <router-view name="side"/>
  <router-view name="main"/>
  <global-footer/>
</template>

<script>
</script>

<style>
  import PartHeader from '@/components/PartHeader';
  import ItemHeader from '@/components/ItemHeader';
  import GlobalHeader from '@/components/GlobalHeader';
  import GlobalFooter from '@/components/GlobalFooter';

  @import "assets/css/bootstrap.min.css";
  @import "assets/css/fontello.css";
  @import "assets/css/site1.css";

  export default {
    components: {
      PartHeader,
      ItemHeader,
      GlobalHeader,
      GlobalFooter
    }
  }

</style>
