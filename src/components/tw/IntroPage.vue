<template>
  <div class="container pt-3">
    <h3 class="text-center mb-3">有簡單或新奇的構思想寫成程式</h3>
    <h2 class="text-center mb-3">卻不知如何下手嗎？</h2>
    <h1 class="text-center mb-5">也許，我們可以幫你實現</h1>
    
    <div class="row mb-5 row-cols-1 row-cols-sm-2 row-cols-md-3">
      <div class="col mb-3" v-for="(item, index) in whatWeCanDo" :key="index">
        
        <div class="card h-100">
          <div class="card-header">
            {{ item.title }}
          </div>
          <div class="card-body">
            <h5 class="card-title mb-4">{{ item.description.slogan }}</h5>
            <div class="card-text text-start mb-1 ms-2 border-bottom" v-for="(txt, i) in item.description.details" :key="i">{{ txt }}</div>
          </div>
          <!-- <div class="card-footer text-muted">
            <a href="#" class="btn btn-sm btn-primary">詳細資料</a>
          </div> -->
        </div>

      </div>
    </div>

    <div class="py-4" style="background-color: rgba(0, 0, 0, .6)">
      <h4 class="text-white">
        EL程式設計工作坊致力於為您提供最專業並客製化的程式設計服務。<br>歡迎隨時與我們聯繫，讓我們成為您的最佳合作夥伴！
      </h4>
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