<template>
  <ul>
    <li v-for="content in contents" :key="content.id">
      <nuxt-link :to="`/${content.id}`">
        {{ content.title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  name: "IndexPage",
  async asyncData() {
    const { data } = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      "https://roasting.microcms.io/api/v1/blogs",
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: {
          "X-MICROCMS-API-KEY": "c43a04daca4f4e96b9397b0add526afead37",
        },
      }
    );
    return data;
  },
};
</script>
