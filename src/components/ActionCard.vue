<template>
  <div class="q-pa-md row items-start q-gutter-md action-card">
    <q-card class="my-card">
      <q-card-section class="cate-section text-white">
        <div class="text-h6">{{ cateName }}</div>
        <!-- <div class="text-subtitle2">by John Doe</div> -->
      </q-card-section>

      <q-card-actions vertical align="center">
        <q-btn flat @click="$emit('getData', category_id)">Click here</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  props: ["cateName", "category_id"],
};
</script>

<style lang="scss">
.action-card {
  display: inline-block;
  width: 40%;
  .cate-section {
    background-color: $secondary;
    text-align: center;
  }
  @media (max-width: 700px) {
    width: 75%;
  }
}
</style>
