<template>
  <div class="container streams">
    <Title>
      <template #span>streams</template>
      <template #hidden>HMASLLC</template>
    </Title>
    <div v-if="!specificError && !specificStreams.length">
      <spinner />
    </div>
    <div v-else-if="specificError">
      <error-message />
    </div>
    <div class="card-holder" v-else>
      <template v-for="(item, index) in specificStreams" :key="index">
        <card
          :img="item.stream_icon"
          :cateName="item.name"
          :stream_id="item.stream_id"
        />
      </template>
      <div class="btn">
        <q-btn
          color="secondary"
          label="Back to categories"
          @click="toCategories"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

//  components
import Spinner from "src/components/Spinner.vue";
import Card from "src/components/Card.vue";
import Title from "src/components/Title.vue";
import ErrorMessage from "src/components/ErrorMessage.vue";

export default {
  components: { Spinner, Card, Title, ErrorMessage },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const streams = ref([]);
    const specificError = ref("");
    const specificStreams = ref([]);

    // filter all data to get specific streams depending on category_id
    const getSpecificStreams = () => {
      specificStreams.value = streams.value.filter((ele) => {
        return ele.category_id === route.params.category_id;
      });
    };

    // navigate to categories page
    const toCategories = () => {
      router.push("/");
    };

    onMounted(() => {
      fetch(
        "http://magic-tv.live:2095/player_api.php?username=hmaser&password=hmaserv1987&action=get_live_streams"
      )
        .then((response) => response.json())
        .then((data) => (streams.value = data))
        .then(() => {
          getSpecificStreams();
          specificError.value = "";
        })
        .catch(
          (err) =>
            (specificError.value = "Server issue , Please try again later")
        );
    });
    return {
      specificStreams,
      specificError,
      toCategories,
    };
  },
};
</script>

<style lang="scss">
.streams {
  min-height: 100vh;
  text-align: center;

  .card-holder {
    margin-bottom: 50px;
    .btn {
      padding: 50px 20px;
    }
  }
}
</style>
