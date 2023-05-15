<template>
  <div class="container pt-3">
    <div class="py-4">
      <div class="row text-start mb-3" v-for="(item, index) in qa" :key="index">
        <div class="col-md mt-1">
          <div class="ms-4 text-primary" style="font-weight: 900; font-size: large;">Q{{index+1}}: {{ item.question }}</div>
          <!-- <div class="ms-4 text-dark text-answer">A{{index+1}}: {{ item.answer }}</div> -->
          <div class="ms-4 text-answer">
          <table class="text-dark text-dark">
            <tr class="align-top">
              <td>A{{index+1}}: </td>
              <td>{{ item.answer }}</td>
            </tr>
          </table>
          </div>
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
.text-answer {
  background-color: rgb(229, 229, 229);
}
</style>