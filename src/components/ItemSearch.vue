<!--


-->
<template>
  <div id="side_search" class="row no-gutters p-2">
    <div class="col-9 input-group-sm">
      <input type="text" v-model="keyword" class="form-control" id="inlineFormInput" placeholder="商品検索" v-on:keyup.enter="search">
    </div>
    <div class="col-3">
      <button type="submit" class="btn btn-sm w-100"><i class="icon-search"></i></button>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        keyword: ""
      }
    },
    methods: {
      search: function () {
        this.$router.push({name: "search", params: {Keyword: this.keyword}});      
      }
    }
  }  
</script>
