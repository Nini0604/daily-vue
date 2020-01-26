<template>
  <ul :class="{'gridList':isGridStyled}">
    <FilteredArticlesItem
      v-for="item in items"
      :key="item.id"
      :title="item.title"
      :url="item.url"
      :imageUrl="item.image"
    />
  </ul>
</template>

<script>
import FilteredArticlesItem from '~/components/filteredSearh/FilteredArticlesItem.vue'
export default {
  name: 'FilterArticles',
  components: { FilteredArticlesItem },
  props: {
    items: {
      type: Array,
      required: true
    },
    isGridStyled: {
      type: Boolean,
      required: false
    }
  }
}
</script>
