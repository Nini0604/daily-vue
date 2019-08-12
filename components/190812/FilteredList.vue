<template>
  <ul>
    <FilteredListItem
      v-for="(item,index) in items"
      :key="index"
      :name="item.name"
      :text="item.text"
      :count="item.count"
      :clickEvent="clickEvent"
      :filterName="filterName"
      :allNames="allNames"
    />
  </ul>
</template>

<script>
import FilteredListItem from '~/components/190812/FilteredListItem.vue'
export default {
  name: 'FilteredList',
  components: { FilteredListItem },
  props: {
    filterName: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    clickEvent: {
      type: Function,
      required: true
    }
  },
  computed: {
    allNames() {
      return this.items.map(item => item.name)
    }
  }
}
</script>
