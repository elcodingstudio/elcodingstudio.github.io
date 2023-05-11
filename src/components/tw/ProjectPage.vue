<template>
  <!-- 頁面標題 -->
  <div class="container pt-3">
    <h3 class="text-center">專案擷圖</h3>

    <!-- 作品列表 -->
    <div class="row mb-5" v-for="(item, index) in samples" :key="index">
      <div class="row mb-3 mx-0">
        <div class="col-12 bg-secondary bg-gradient text-white">
          <h3 class="my-3">{{ index }}</h3>
        </div>
      </div>
      <div class="mx-0 row row-cols-1 row-cols-sm-2 row-cols-md-3">
        <div class="col" v-for="(k, v) in item" :key="v">
          <div class="card text-start h-100">
            <div class="card-header">
              >{{ k.title }}
            </div>
            <a :href="k.image" target="_blank">
            <img class="card-img-top" :src="k.image">
            </a>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import {samples} from '@/database/projects'
export default {
  data() {
    return {
      samples: samples,
    }
  },
  methods: {
  }
}
</script>
  