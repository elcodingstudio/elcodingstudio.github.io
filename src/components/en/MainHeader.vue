<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark text-bg-dark py-0">
      <a class="navbar-brand ms-4 me-0 me-md-3" href="/">
        <img src="../../assets/images/icon.png"/>
      </a>
      <h3 class="my-auto">
        EL Programming Studio
      </h3>
      <button class="navbar-toggler collapsed" type="button" ref="navbarToggler"
        data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav" ref="navbarNav">
        <ul class="navbar-nav">
          
          <!--關於我們-->
          <li class="nav-item">
            <a class="nav-link" href="#" @click="hanleChangeTab('intro')" :class="{ active: tab === 'intro' }">
              <div>
                <span class="material-symbols-outlined">home</span>
                <div>About</div>
              </div>
            </a>
          </li>
          <!--作品/專案-->
          <li class="nav-item">
            <a class="nav-link" href="#" @click="hanleChangeTab('projects')" :class="{ active: tab === 'projects' }">
              <div>
                <span class="material-symbols-outlined">work_history</span>
                <div>Projects</div>
              </div>
            </a>
          </li>
          <!--聯絡我們-->
          <li class="nav-item">
            <a class="nav-link" href="#" @click="hanleChangeTab('contact')" :class="{ active: tab === 'contact' }">
              <div>
                <span class="material-symbols-outlined">send</span>
                <div>Contact</div>
              </div>
            </a>
          </li>
          <!--Q & A-->
          <!-- <li class="nav-item">
            <a class="nav-link" href="#" @click="hanleChangeTab('qa')" :class="{ active: tab === 'qa' }">
              <div>
                <span class="material-symbols-outlined">live_help</span>
                <div>Q & A</div>
              </div>
            </a>
          </li> -->

        </ul>
      </div>
    </nav>
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
      this.$refs.navbarNav.classList.remove('show');
      this.$refs.navbarToggler.setAttribute('aria-expanded', 'false');
      this.$refs.navbarToggler.classList.add('collapsed');
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
    lang() {
      console.log(this.$route.query.tab);
      return this.$route.query.lang;
    }
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