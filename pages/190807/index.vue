<template>
  <div class="content">
    <div class="content__inputBox">
      <input
        v-model="searchString"
        class="content__input"
        type="text"
        placeholder="Enter your search terms"
      >
    </div>
    <FilteredArticles
      :items="filteredArticles"
    />
  </div>
</template>

<script>
import FilteredArticles from '~/components/190807/FilteredArticles.vue'
export default {
  components: { FilteredArticles },
  data() {
    return {
      searchString: '',
      articles: ''
    }
  },
  computed: {
    filteredArticles() {
      let { searchString, articles } = this
      if (!searchString) {
        return articles
      }
      searchString = searchString.trim().toLowerCase()
      articles = articles.filter((article) => {
        if (article.title.toLowerCase().indexOf(searchString) > 0) {
          return article
        }
      })
      return articles
    }
  },
  created() {
    this.articles = [
      {
        id: 1,
        title: 'What You Need To Know About CSS Variables',
        url: 'https://tutorialzine.com/2016/03/what-you-need-to-know-about-css-variables/',
        image: 'https://tutorialzine.com/media/2016/03/css-variables.jpg'
      },
      {
        id: 2,
        title: 'Freebie: 4 Great Looking Pricing Tables',
        url: 'https://tutorialzine.com/2016/02/freebie-4-great-looking-pricing-tables/',
        image: 'https://tutorialzine.com/media/2016/02/great-looking-pricing-tables.jpg'
      },
      {
        id: 3,
        title: '20 Interesting JavaScript and CSS Libraries for February 2016',
        url: 'https://tutorialzine.com/2016/02/20-interesting-javascript-and-css-libraries-for-february-2016/',
        image: 'https://tutorialzine.com/media/2016/02/interesting-resources-february.jpg'
      },
      {
        id: 4,
        title: 'Quick Tip: The Easiest Way To Make Responsive Headers',
        url: 'https://tutorialzine.com/2016/02/quick-tip-easiest-way-to-make-responsive-headers/',
        image: 'https://tutorialzine.com/media/2016/02/quick-tip-responsive-headers.png'
      },
      {
        id: 5,
        title: 'Learn SQL In 20 Minutes',
        url: 'https://tutorialzine.com/2016/01/learn-sql-in-20-minutes/',
        image: 'https://tutorialzine.com/media/2016/01/learn-sql-20-minutes.png'
      },
      {
        id: 6,
        title: 'Creating Your First Desktop App With HTML, JS and Electron',
        url: 'https://tutorialzine.com/2015/12/creating-your-first-desktop-app-with-html-js-and-electron/',
        image: 'https://tutorialzine.com/media/2015/12/creating-your-first-desktop-app-with-electron.png'
      }
    ]
  }
}
</script>

<style scoped lang="scss">
.content {
  width: 400px;
  margin: 45px auto;
  &__inputBox {
    position: relative;
    margin-bottom: 20px;
    padding: 14px;
    background-color: #5c9bb7;
    background-image: linear-gradient(#5c9bb7, #5392ad);
    background-image: -moz-linear-gradient(#5c9bb7, #5392ad);
    background-image: -webkit-linear-gradient(#5c9bb7, #5392ad);
    box-shadow: 0 1px 1px #ccc;
    border-radius: 2px;
  }
  &__input {
    width: 100%;
    padding: 11px 0;
    border: 0 none;
    border-radius: 2px;
    font-size: 14px;
    font-weight: 700;
    color: #738289;
    line-height: 19px;
    text-indent: 30px;
    outline: none;
    box-shadow: 0 2px 8px #c4c4c4 inset;
  }
}
</style>
