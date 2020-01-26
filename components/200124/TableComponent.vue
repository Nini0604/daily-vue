<template>
  <div>
    <table>
      <tbody>
        <slot />
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TableComponent'
}
</script>

<style lang="scss">
table {
  border-collapse: collapse;
  td {
    width: 100px;
    height: 100px;
    border: 5px solid #333;
    font-size: 50px;
    text-align: center;
    line-height: 100px;
  }
}
</style>
