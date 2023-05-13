<template>
  <div class="container pt-3 pb-3">
    <h4 class="text-center text-dark mb-3 text-nowrap">有簡單或新奇的構思想寫成程式</h4>
    <h3 class="text-center text-dark mb-3">卻不知如何下手嗎？</h3>
    <h2 class="text-center text-dark mb-5">也許，我們可以幫你實現</h2>

    <h2 class="mx-auto py-2 bg-success bg-gradient col-6 col-sm-3 text-white">服務內容</h2>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
      <div class="col mb-3" v-for="(item, index) in whatWeCanDo" :key="index">
        
        <div class="card h-100">
          <div class="card-header bg-primary bg-gradient text-white" style="font-weight: 900; font-size: 24px;">
            {{ item.title }}
          </div>
          <div class="card-body">
            <img :src="item.img" style="width: 100px; height: 100px;">
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {whatWeCanDo} from '@/database/intro'

export default {
  data() {
    return {
      whatWeCanDo: whatWeCanDo,
    }
  }
};
</script>

<style>

</style>