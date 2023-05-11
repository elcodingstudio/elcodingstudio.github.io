<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark text-bg-dark py-0">
      <a class="navbar-brand ps-4" href="/">
        <img src="../../assets/images/icon.png"/>
      </a>
      <button class="navbar-toggler" type="button"
        data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          
          <!--關於我們-->
          <li class="nav-item">
            <a class="nav-link" href="#" @click="hanleChangeTab('intro')" :class="{ active: tab === 'intro' }">
              <div>
                <span class="material-symbols-outlined">home</span>
                <div>關於我們</div>
              </div>
            </a>
          </li>
          <!--作品/專案-->
          <li class="nav-item">
            <a class="nav-link" href="#" @click="hanleChangeTab('projects')" :class="{ active: tab === 'projects' }">
              <div>
                <span class="material-symbols-outlined">work_history</span>
                <div>作品/專案</div>
              </div>
            </a>
          </li>
          <!--聯絡我們-->
          <li class="nav-item">
            <a class="nav-link" href="#" @click="hanleChangeTab('contact')" :class="{ active: tab === 'contact' }">
              <div>
                <span class="material-symbols-outlined">send</span>
                <div>聯絡方式</div>
              </div>
            </a>
          </li>
          <!--關於我們-->
          <li class="nav-item">
            <a class="nav-link" href="#" @click="hanleChangeTab('qa')" :class="{ active: tab === 'qa' }">
              <div>
                <span class="material-symbols-outlined">live_help</span>
                <div>QA問答</div>
              </div>
            </a>
          </li>

        </ul>
      </div>
    </nav>
    <!-- <div class="px-3 py-0 text-bg-dark">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" class="d-flex align-items-center my-0 me-lg-auto text-white text-decoration-none">
            <img src="../../assets/images/icon.png"/>
          </a>

          <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li class="nav-link" @click="hanleChangeTab('intro')" :class="{ active: tab === 'intro' }">
              <a href="#" class="text-decoration-none text-white">
                <div>
                  <span class="material-symbols-outlined">home</span>
                  <div>關於我們</div>
                </div>
              </a>
            </li>
            <li class="nav-link"  @click="hanleChangeTab('projects')" :class="{ active: tab === 'projects' }">
              <a href="#" class="text-decoration-none text-white">
                <div>
                  <span class="material-symbols-outlined">work_history</span>
                  <div>作品/專案</div>
                </div>
              </a>
            </li>
            <li class="nav-link" @click="hanleChangeTab('contact')" :class="{ active: tab === 'contact' }">
              <a href="#" class="text-decoration-none text-white">
                <div>
                  <span class="material-symbols-outlined">send</span>
                  <div>聯絡我們</div>
                </div>
              </a>
            </li>
            <li class="nav-link" @click="hanleChangeTab('qa')" :class="{ active: tab === 'qa' }">
              <a href="#" class="text-decoration-none text-white">
                <div>
                  <span class="material-symbols-outlined">live_help</span>
                  <div>QA問答</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div> -->
  </header>
</template>

<script>
export default {
  mounted() {
    if (!this.tab || !this.lang) {
      this.hanleChangeQuery(this.tab || 'intro', this.lang || 'zh-tw');
    }
  },
  methods: {
    hanleChangeQuery(toTab, toLang) {
      this.$router.replace({ path: `/`, query: { tab: toTab, lang: toLang } });
    },
    hanleChangeTab(toTab) {
      this.hanleChangeQuery(toTab || 'intro', this.lang || 'zh-tw');
    },
    hanleChangeLang(toLang) {
      this.hanleChangeQuery(this.tab || 'intro', toLang || 'zh-tw');
    }
  },
  computed: {
    tab() {
      console.log(this.$route.query.tab);
      return this.$route.query.tab;
    },
  }
}
</script>

<style>
.nav-link {
  margin: 0px;
  padding-top: 8px;
  padding-bottom: 8px;
}
.nav-link:hover {
  background: darkgrey;
}
.nav-link:hover div {
  color: black;
}
.nav-link.active {
  background: darkgrey;
}
.nav-link.active div {
  color: black;
}
</style>