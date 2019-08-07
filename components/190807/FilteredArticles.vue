<template>
  <ul>
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
import FilteredArticlesItem from '~/components/190807/FilteredArticlesItem.vue'
export default {
  name: 'FilterArticles',
  components: { FilteredArticlesItem },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>
