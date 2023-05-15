<template>
  <div class="modal fade" id="IntroDetailModal" tabindex="-1" aria-labelledby="IntroDetailModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header bg-success bg-gradient text-white">
          <h5 class="modal-title mx-auto" id="IntroDetailModalLabel"> {{ detail?.title }}</h5>
        </div>
        <div class="modal-body text-start">
          <!-- <h5>{{ detail?.description.slogan }}</h5> -->
          Details:
          <ul class="list-group list-group-flush pt-0 mt-0 ">
            <li class="list-group-item" v-for="(txt, index) in detail?.description.details" :key="index">
              <b> {{ txt }} </b>
            </li>
          </ul>

          <div class="mt-3">
            Skills:
            <ul class="list-inline ms-3 mt-1">
              <li class="list-inline-item mb-1" v-for="(skill, index) in detail?.tool" :key="index">
                <span class="badge bg-info text-dark" style="font-size: 1rem;"> {{ skill }} </span>
              </li>
            </ul>
            <!-- <div class="me-3" v-for="(skill, index) in detail?.tool" :key="index"> {{ skill }} </div> -->
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detail: null,
    }
  },
  methods: {
    setDetail(item) {
      this.detail = item;
    }
  }
}
</script>

<style>

</style>