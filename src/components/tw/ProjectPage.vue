<template>
  <!-- 頁面標題 -->
  <div class="container pt-3 pb-1">
    <h2 class="text-center text-dark mb-4">專案擷圖</h2>

    <!-- 作品列表 -->
    <div class="row mb-4" v-for="(item, index) in samples" :key="index">
      <div class="mx-0 row row-cols-1 row-cols-sm-2 row-cols-md-3">
        <div class="col mb-2" v-for="(k, v) in item" :key="v">
          <div class="card h-100">
            <div class="card-header bg-primary bg-gradient text-white" style="font-weight: 900; font-size: 24px;">
              {{ k.title }}
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
<style>
.card-img-top {
  object-fit: cover;
  width: 100%;
  height: 200px; /* 設置您期望的圖片高度 */
}

</style>