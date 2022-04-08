<template>
  <div class="container categories">
    <Title>
      <template #span>categories</template>
      <template #hidden>HMASLLC </template>
    </Title>
    <div class="categories-holder" v-if="categories.length">
      <template v-for="name in categories" :key="name.category_id">
        <action-card
          :cateName="name.category_name"
          :category_id="name.category_id"
          @getData="getData"
        />
      </template>
    </div>
    <template v-else-if="cateError">
      <error-message />
    </template>
    <template v-else-if="!cateError && !categories.length">
      <spinner />
    </template>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { onMounted } from "@vue/runtime-core";
import { ref } from "vue";

//  components
import Spinner from "src/components/Spinner.vue";
import ActionCard from "src/components/ActionCard.vue";
import Title from "src/components/Title.vue";
import ErrorMessage from "src/components/ErrorMessage.vue";

export default {
  components: { Spinner, ActionCard, Title, ErrorMessage },
  setup() {
    const router = useRouter();
    const categories = ref([]);
    const cateError = ref("");
    const streams = ref();
    onMounted(() => {
      fetch(
        "http://magic-tv.live:2095/player_api.php?username=hmaser&password=hmaserv1987&action=get_live_categories"
      )
        .then((response) => response.json())
        .then((data) => (categories.value = data))
        .then(() => (cateError.value = ""))

        .catch(
          (err) => (cateError.value = "Server issue , Please try again later")
        );
    });

    // navigate to streams page and sending param via url to get specific streams
    const getData = (e) => {
      router.push("/categories/" + e);
    };

    return {
      categories,
      getData,
      streams,
      cateError,
    };
  },
};
</script>

<style lang="scss">
.categories {
  height: 100vh;
  .categories-holder {
    display: flex;
    justify-content: space-around;
    @media (max-width: 700px) {
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
