<template>
  <div class="content">
    <nav class="nav" :class="active" @click.prevent>
      <a href="#" class="nav__link home" @click="makeActive('home')">Home</a>
      <a href="#" class="nav__link projects" @click="makeActive('projects')">Projects</a>
      <a href="#" class="nav__link services" @click="makeActive('services')">Services</a>
      <a href="#" class="nav__link contact" @click="makeActive('contact')">Contact</a>
    </nav>
    <p class="text">
      You choose <b class="text__select">{{ active }}</b>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 'home'
    }
  },
  methods: {
    makeActive(select) {
      this.active = select
    }
  }
}
</script>

<style scoped lang="scss">
@mixin linkActive($select) {
  .#{$select} {
    .#{$select} {
      background-color: #e35885;
    }
  }
}
.content {
  width: 480px;
  margin: 0 auto;
  text-align: center;
}
.nav {
  overflow: hidden;
  width: 100%;
  height: 52px;
  margin: 60px auto 45px;
  background-color: #5597b4;
  box-shadow: 0 1px 1px #ccc;
  border-radius: 2px;
  &__link {
    float: left;
    width: 25%;
    height: 100%;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    line-height: 52px;
    text-transform: uppercase;
  }
}
.text {
  font-size: 18px;
  font-weight: bold;
  color: #7d9098;
  &__select {
    display: inline-block;
    padding: 5px 10px;
    margin-left: 5px;
    background-color: #c4d7e0;
    font-size: 18px;
    color: #fff;
    border-radius: 2px;
    text-transform: uppercase;
  }
}
@include linkActive('home');
@include linkActive('projects');
@include linkActive('services');
@include linkActive('contact');
</style>
