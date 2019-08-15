<template>
  <div id="app">
    <NCard
      v-for="card in cards"
      :key="card.id"
      :title="card.title"
      :description="card.description"
      :round="card.round"
      :color="card.color"
      :shadow="card.shadow"
    />
  </div>
</template>

<script>
import NCard from '~/components/190815/NCard.vue'

export default {
  name: 'App',
  components: {
    NCard
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          title: '프론트엔드 개발자 채용',
          description: '프론트엔드 개발 잘하는 사람 오세요.',
          round: true,
          color: 'blue'
        },
        {
          id: 2,
          title: '데브옵스 채용',
          description: 'CD, CI 등을 잘하는 사람 오세요.',
          color: 'red',
          shadow: true
        },
        {
          id: 3,
          title: '웹 디자이너 채용',
          description: 'UX, UI 디자인 잘하는 사람 오세요.'
        },
        {
          id: 4,
          title: '프로젝트 매니저 채용',
          description: '프로젝트 매니징 잘하는 사람 오세요.',
          round: true,
          color: 'green',
          shadow: true
        },
        {
          id: 5,
          title: '기획자 채용',
          description: '서비스 기획 잘하는 사람 오세요.',
          color: 'blue'
        },
        {
          id: 6,
          title: '마케터 채용',
          description: '마케팅 잘하는 사람 오세요.',
          color: 'green'
        },
        {
          id: 7,
          title: '프론트엔드 개발자 채용',
          description: '프론트엔드 개발 잘하는 사람 오세요.',
          color: 'red'
        },
        {
          id: 8,
          title: '데브옵스 채용',
          description: 'CD, CI 등을 잘하는 사람 오세요.',
          shadow: true
        },
        {
          id: 9,
          title: '웹 디자이너 채용',
          description: 'UX, UI 디자인 잘하는 사람 오세요.',
          round: true,
          color: 'blue'
        },
        {
          id: 10,
          title: '프로젝트 매니저 채용',
          description: '프로젝트 매니징 잘하는 사람 오세요.'
        },
        {
          id: 11,
          title: '기획자 채용',
          description: '서비스 기획 잘하는 사람 오세요.',
          color: 'blue',
          shadow: true
        },
        {
          id: 12,
          title: '마케터 채용',
          description: '마케팅 잘하는 사람 오세요.',
          round: true,
          color: 'red'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
#app {
  display: flex;
  flex-wrap: wrap;
}
</style>
