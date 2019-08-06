<template>
  <div v-cloak class="content">
    <h1 class="content__title">
      Services
    </h1>
    <ul class="serviceList">
      <li
        v-for="service in services"
        :key="service.id"
        class="serviceList__item"
        :class="{'active':service.active}"
        @click="toggleActive(service)"
      >
        {{ service.name }}<span class="priceText">{{ service.price | currency }}</span>
      </li>
    </ul>
    <div class="total">
      Total: <span class="priceText">{{ total() | currency }}</span>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    currency(value) {
      value = '$' + value.toFixed(2)
      return value
    }
  },
  data() {
    return {
      services: [
        {
          id: 1,
          name: 'Web Development',
          price: 300,
          active: false
        },
        {
          id: 2,
          name: 'Design',
          price: 400,
          active: false
        },
        {
          id: 3,
          name: 'Integration',
          price: 250,
          active: false
        },
        {
          id: 4,
          name: 'Training',
          price: 220,
          active: false
        }
      ]
    }
  },
  methods: {
    toggleActive(select) {
      select.active = !select.active
    },
    total() {
      let total = 0
      this.services.forEach((service) => {
        if (service.active) {
          total += service.price
        }
      })
      return total
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  width: 400px;
  margin: 50px auto;
  padding: 35px 60px;
  background-color: #61a1bc;
  border-radius: 2px;
  box-shadow: 0 1px 1px #ccc;
  &__title {
    font-family: 'Cookie', cursive;
    font-size: 64px;
    font-weight: 400;
    line-height: 1;
    color: #fff;
    text-shadow: 0 3px 0 rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  .serviceList {
    margin: 20px 0 15px;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    &__item {
      overflow: hidden;
      margin-bottom: 8px;
      padding: 20px 30px;
      background-color: #e35885;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      &.active {
        background-color: #8ec16d;
      }
    }
  }
  .priceText {
    float: right;
  }
  .total {
    padding: 15px 30px;
    border-top: 1px solid #fff;
    font-size: 20px;
    font-weight: 700;
    text-align: left;
    color: #fff;
  }
}
</style>
