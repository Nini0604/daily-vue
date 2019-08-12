<template>
  <li>
    <button class="item__button" :class="{'item__button--active': isActive}" @click="select">
      {{ text }} {{ count }}
    </button>
  </li>
</template>

<script>
export default {
  name: 'FilteredListItem',
  props: {
    name: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      default: 0
    },
    clickEvent: {
      type: Function,
      required: true
    },
    filterName: {
      type: String,
      required: true
    },
    allNames: {
      type: Array,
      required: true
    }
  },
  computed: {
    isActive() {
      const { name, filterName, allNames } = this

      const currentFilter = this.$route.query[filterName]
      const isNoFilterName = !currentFilter || !allNames.includes(currentFilter)
      if (isNoFilterName && name === 'all') {
        return true
      }
      return currentFilter === name
    }
  },
  methods: {
    select() {
      const { name, clickEvent, filterName } = this
      clickEvent(name)

      const filterQuery = {}
      filterQuery[filterName] = name
      this.$router.push({
        query: {
          ...this.$route.query,
          ...filterQuery
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.item {
  &__button {
    &--active {
      color: #8fb024;
    }
    &:hover {
      color: #8fb024;
    }
  }
}
</style>
