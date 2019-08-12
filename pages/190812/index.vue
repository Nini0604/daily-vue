<template>
  <section>
    <h1>채용리스트</h1>
    <div>
      <FilteredList filterName="category" :items="filterCategories" :clickEvent="setActiveCategory" />
      <ul>
        <li v-for="(post,index) in filteredPosts" :key="index">
          <p>{{ post.category }}</p>{{ post.title }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import FilteredList from '~/components/190812/FilteredList.vue'
export default {
  components: { FilteredList },
  data() {
    return {
      activeCategory: 'all',
      filterCategories: [],
      hirePosts: [
        {
          'category': 'tutoring',
          'title': '프론트 개발 담당자 쥬니어 / 시니어'
        },
        {
          'category': 'tutoring',
          'title': '백엔드 개발 담당자 쥬니어 / 시니어'
        },
        {
          'category': 'wematch',
          'title': '프론트 개발 담당자 쥬니어 / 시니어'
        },
        {
          'category': 'wematch',
          'title': '백엔드 개발 담당자 쥬니어 / 시니어'
        },
        {
          'category': 'md',
          'title': '커머스 디자이너 2년 이상 ~ 5년 미만'
        },
        {
          'category': 'md',
          'title': '프론트 개발 담당자 쥬니어 / 시니어'
        }
      ]
    }
  },
  computed: {
    filteredPosts() {
      const { hirePosts, activeCategory } = this
      if (activeCategory === 'all') {
        return hirePosts
      }
      return hirePosts.filter(post => post.category === activeCategory)
    }
  },
  created() {
    this.filterCategories = [
      {
        name: 'all',
        text: '전체',
        count: this.hirePosts.length
      },
      {
        name: 'tutoring',
        text: '튜터링',
        count: this.hirePosts.filter(post => post.category === 'tutoring').length
      },
      {
        name: 'wematch',
        text: '위매치',
        count: this.hirePosts.filter(post => post.category === 'wematch').length
      },
      {
        name: 'md',
        text: '엠디서비스',
        count: this.hirePosts.filter(post => post.category === 'md').length
      }
    ]

    const currentQueryCategory = this.$route.query.category
    this.activeCategory = this.filterCategories.map(o => o.name).includes(currentQueryCategory) ? this.$route.query.category : 'all'
  },
  methods: {
    setActiveCategory(category) {
      this.activeCategory = category
    }
  }
}
</script>

<style scoped lang="scss">
  section {
    h1 {
      font-weight: 800;
    }
  }
</style>
