<template>
  <div class="error-message">
    <h3>Oooops</h3>
    <span>Failed to load the response data</span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.error-message {
  text-align: center;
  color: #fff;
  > span {
    display: inline-block;
    padding: 30px;
    font-size: 2rem;
    text-transform: capitalize;
  }
}
</style>
