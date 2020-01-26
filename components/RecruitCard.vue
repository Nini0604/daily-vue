<template>
  <div
    class="card"
    :class="[{'is-round':round,'is-shadow':shadow},'is-'+color]"
  >
    <h2 class="card__title">
      {{ title }}
    </h2>
    <p class="card__description">
      {{ description }}
    </p>
  </div>
</template>

<script>

export default {
  name: 'RecruitCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    round: {
      type: Boolean,
      required: false
    },
    color: {
      type: String,
      default: 'blue'
    },
    shadow: {
      type: Boolean,
      required: false
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">
$white: #fff;
$gray-dark: #333;

@mixin is($modifier) {
  @at-root {
    &.is-#{$modifier} {
      @content;
    }
  }
}

.card {
  overflow: hidden;
  width: 300px;
  height: 400px;
  margin-top: 10px;
  margin-left: 10px;
  padding: 10px;
  background-color: $white;
  border: 1px solid $gray-dark;

  &__title {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  &__description {
    margin-top: 151px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @include is(yellow) {
    background-color: #FCF232;
  }

  @include is(blue) {
    background-color: #2AB6FC;
  }

  @include is(green) {
    background-color: #35C646;
  }

  @include is(shadow) {
    box-shadow: 4px 4px 2px 2px rgba(0, 0, 0, .2);
  }

  @include is(round) {
    border-radius: 15px;
  }
}
</style>
