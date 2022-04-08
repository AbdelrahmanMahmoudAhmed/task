<template>
  <div class="holder">
    <div class="spinner">
      <div>
        <q-spinner-pie color="secondary" size="3em" />
        <q-tooltip :offset="[0, 8]">QSpinnerPie</q-tooltip>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.holder {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  height: 100%;
  background-color: #b4d9d6;
}
.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
