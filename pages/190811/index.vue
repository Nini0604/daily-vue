<template>
  <div class="content">
    <div class="content__header">
      <div class="buttonWrap">
        <button class="buttonWrap__item" :class="{active:layout=='line'}" @click="buttonActive('line')">
          ☰
        </button>
        <button class="buttonWrap__item" :class="{active:layout=='grid'}" @click="buttonActive('grid')">
          ☷
        </button>
      </div>
    </div>
    <FilteredArticles
      :items="articles"
      :isGridStyled="isGridSelected"
    />
  </div>
</template>

<script>
import FilteredArticles from '~/components/190807/FilteredArticles.vue'
export default {
  components: { FilteredArticles },
  data() {
    return {
      layout: 'line',
      isGridSelected: false
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
  },
  methods: {
    buttonActive(selected) {
      this.layout = selected
      if (selected === 'grid') {
        this.isGridSelected = true
      } else {
        this.isGridSelected = false
      }
    }
  }
}
</script>

<style lang="scss">
.content {
  width: 400px;
  margin: 45px auto;
  &__header {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 42px;
    margin-bottom: 20px;
    background-color: #5c9bb7;
    box-shadow: 0 1px 1px #ccc;
    border-radius: 2px;
  }
  .buttonWrap {
    overflow: hidden;
    float: right;
    padding: 5px;
    &__item {
      float: left;
      width: 32px;
      height: 32px;
      margin-right: 5px;
      background: #4987a1 center center no-repeat;
      border-radius: 2px;
      font-size: 22px;
      color: #fff;
      cursor: pointer;
      &.active {
        background-color: #c14694;
      }
    }
  }
  .articleItem {
    height: 120px;
    padding: 10px;
    &__image {
      width: 120px;
      height: 120px;
    }
    &__title {
      padding-left: 140px;
    }
  }
}
.gridList {
  overflow: hidden;
  .articleItem {
    float: left;
    width: 50%;
    height: auto;
    padding: 2px;
    box-sizing: border-box;
    border-bottom: 0 none;
    &__image {
      position: static;
      width: 100%;
      height: 196px;
    }
    &__title {
      display: none;
    }
  }
}
</style>
