<template>
  <div class="q-pa-md row items-start q-gutter-md card">
    <q-card class="my-card">
      <q-item>
        <q-item-section>
          <q-item-label> <strong>Name :</strong> {{ cateName }} </q-item-label>
          <q-item-label caption>
            <strong>ID :</strong> {{ stream_id }}
          </q-item-label>
        </q-item-section>
      </q-item>
      <img :src="img" v-if="img" @error="handelImgError($event)" class="img" />
      <img src="../assets/not-found.png" v-else class="img" />
    </q-card>
  </div>
</template>

<script>
export default {
  props: ["stream_id", "cateName", "img"],

  setup() {
    // replace a failed images with a ( not found )image
    const handelImgError = (e) => {
      e.target.src = require("../assets/not-found.png");
    };
    return {
      handelImgError,
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: inline-block;
}
.my-card {
  width: 200px;
  // max-width: 250px;
}
.img {
  height: 200px;
  width: 200px;
}
</style>
