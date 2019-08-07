<template>
  <li class="articleItem">
    <a :href="url" class="articleItem__link">
      <img :src="imageUrl" class="articleItem__image" alt="thumbnail">
      <span class="articleItem__title">{{ title }}</span>
    </a>
  </li>
</template>

<script>
export default {
  name: 'FilterdArticlesItem',
  props: {
    title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.articleItem {
  overflow: hidden;
  height: 60px;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  &__link {
    display: table;
    position: relative;
    width: 100%;
    height: 100%;
  }
  &__image {
    position: absolute;
    width: 60px;
    height: 60px;
    border: none;
  }
  &__title {
    display: table-cell;
    padding-left: 75px;
    font-weight: 700;
    color: #6e7a7f;
    vertical-align: middle;
  }
}
</style>
