<template>
  <div class="container mt-3">
    
    <div class="row">
      <div class="col">
        <div class="card">
          <h5 class="card-header">技能</h5>
          <div class="card-body">
            <div class="row row-cols-3">
              <div class="col align-items-center my-1" v-for="(skill, idx) of skills" :key="idx">
                <button type="button" class="btn btn-success btn-sm w-100 p-2 text-nowrap">{{ skill.name }} ({{ skill.year }}年)</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col">
        <div class="card">
          <h5 class="card-header">平台</h5>
          <div class="card-body">
            <div class="row row-cols-3">
              <div class="col align-items-center my-1" v-for="(platform, idx) of platforms" :key="idx">
                <button type="button" class="btn btn-primary btn-sm d-inline-block w-100 p-2 text-nowrap">{{ platform.name }} ({{ platform.year }}年)</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    
    
    <!-- <h1 class="text-center mb-3">技能</h1>
    <div class="container mb-5" style="max-width: 1000px;">
      <div class="row row-cols-6">
        <div class="col align-items-center my-1" v-for="(skill, idx) of skills" :key="idx">
          <button type="button" class="btn btn-success btn-sm w-100 p-2 text-nowrap">{{ skill.name }} ({{ skill.year }}年)</button>
        </div>
      </div>
    </div>
    <h1 class="text-center mb-3">平台</h1>
    <div class="container mb-5" style="max-width: 1000px;">
      <div class="row row-cols-5">
        <div class="col align-items-center my-1" v-for="(platform, idx) of platforms" :key="idx">
          <button type="button" class="btn btn-primary btn-sm d-inline-block w-100 p-2 text-nowrap">{{ platform.name }} ({{ platform.year }}年)</button>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { mySkills, myPlatforms } from '@/database/experience';

export default {
  data() {
    return {
      skills: mySkills,
      platforms: myPlatforms,
    }
  }
};
</script>
