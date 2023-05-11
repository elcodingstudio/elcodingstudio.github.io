<template>
  <div class="container w-100">
    <MainHeader />
      <div class="mx-5 px-5">
      <div v-if="lang === 'zh-tw'">
        <div v-if="tab === 'intro'">
          <IntroPage />
        </div>
        <div v-if="tab === 'projects'">
          <ProjectPageTW />
        </div>
        <div v-if="tab === 'contact'">
          <ContactPageTW />
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
import ContactPageTW from './components/tw/ContactPage.vue';
import IntroPage from './components/tw/IntroPage.vue';
import MainHeader from './components/tw/MainHeader.vue';
import ProjectPageTW from './components/tw/ProjectPage.vue';

export default {
  components: {
    ContactPageTW,
    ProjectPageTW,
    MainHeader,
    IntroPage
  },
  computed: {
    tab() {
      return this.$route.query.tab;
    },
    lang() {
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

</style>