<template>
  <div class="title">
    <h1>
      <span>
        <slot name="span" />
      </span>
      <slot name="h1" />
    </h1>
    <span class="hidden-title"> <slot name="hidden" /> </span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.title {
  margin: 0 auto;
  width: 100%;
  position: relative;
  padding: 80px 0;
  text-align: center;
  @media (max-width: 578px) {
    h1 {
      font-size: 35px !important;
    }
    .hidden-title {
      display: none;
    }
  }

  h1 {
    font-size: 56px;
    font-weight: 900;
    color: $primary;
    text-transform: uppercase;
    margin: 0;
    span {
      color: #fff;
    }
  }
  .hidden-title {
    font-size: 110px;
    left: 0;
    letter-spacing: 10px;
    line-height: 0.7;
    position: absolute;
    right: 0;
    top: 50%;
    text-transform: uppercase;
    font-weight: 800;
    transform: translateY(-50%);
    color: hsla(0, 0%, 100%, 0.07);
  }
}
</style>
