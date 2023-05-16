<template>
  <div class="container w-100 px-1">
    <MainHeaderTW v-if="lang === 'zh-tw'" />
    <MainHeaderEN v-if="lang === 'en'" />
    
    <div class="main-background" style="min-height: 700px">
      <div class="mx-0 px-0">
        <div v-if="tab === 'intro'">
          <IntroPageTW v-if="lang === 'zh-tw'" />
          <IntroPageEN v-if="lang === 'en'" />
        </div>
        <div v-if="tab === 'projects'">
          <ProjectPageTW v-if="lang === 'zh-tw'" />
          <ProjectPageEN v-if="lang === 'en'" />
        </div>
        <div v-if="tab === 'contact'">
          <ContactPageTW v-if="lang === 'zh-tw'" />
          <ContactPageEN v-if="lang === 'en'" />
        </div>
        <div v-if="tab === 'qa'">
          <QAPageTW v-if="lang === 'zh-tw'" />
          <QAPageEN v-if="lang === 'en'" />
        </div>
      </div>
    </div>

    <!-- <MainFooterTW v-if="tab !== 'contact'"/> -->
  </div>
</template>

<script>
import ContactPageTW from './components/tw/ContactPage.vue';
import IntroPageTW from './components/tw/IntroPage.vue';
// import MainFooterTW from './components/tw/MainFooter.vue';
import MainHeaderTW from './components/tw/MainHeader.vue';
import ProjectPageTW from './components/tw/ProjectPage.vue';
import QAPageTW from './components/tw/QAPage.vue';

import ContactPageEN from './components/en/ContactPage.vue';
import IntroPageEN from './components/en/IntroPage.vue';
// import MainFooterEN from './components/en/MainFooter.vue';
import MainHeaderEN from './components/en/MainHeader.vue';
import ProjectPageEN from './components/en/ProjectPage.vue';
import QAPageEN from './components/en/QAPage.vue';

export default {
  components: {
    // 中文
    ContactPageTW,
    ProjectPageTW,
    MainHeaderTW,
    IntroPageTW,
    QAPageTW,
    // MainFooterTW,
    // 英文
    ContactPageEN,
    IntroPageEN,
    MainHeaderEN,
    ProjectPageEN,
    QAPageEN,
    //MainFooterEN,
  },
  computed: {
    tab() {
      if (!this.$route.query.tab) {
        return "intro"
      }
      return this.$route.query.tab;
    },
    lang() {
      if (!this.$route.query.lang) {
        return "zh-tw"
      }
      return this.$route.query.lang;
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style>
.main-background {
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%23e9e9e9' fill-opacity='0.4'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>