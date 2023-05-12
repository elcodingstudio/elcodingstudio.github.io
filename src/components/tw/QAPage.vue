<template>
  <div class="container pt-3">
    <div class="py-4" style="background-color: rgba(0, 0, 0, .9)">
      <div class="row text-start mb-3" v-for="(item, index) in qa" :key="index">
        <div class="col-md mt-1">
          <h4 class="ms-4 text-question">Q{{index+1}}: {{ item.question }}</h4>
          <h4 class="ms-4 text-white">A{{index+1}}: {{ item.answer }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {qaCollection} from '@/database/qa'
export default {
  data() {
    return {
      qa: qaCollection,
    }
  },
}
</script>

<style>
.text-question {
  color: rgb(197, 197, 197);
}
</style>