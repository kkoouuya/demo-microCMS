<template>
  <main class="main">
    <h1 class="title">{{ title }}</h1>
    <p class="publishedAt">{{ publishedAt }}</p>
    <div class="post" v-html="body"></div>
  </main>
</template>

<script>
import axios from "axios";

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://roasting.microcms.io/api/v1/blogs/${params.slug}`,
      {
        headers: {
          "X-MICROCMS-API-KEY": "c43a04daca4f4e96b9397b0add526afead37",
        },
      }
    );
    return data;
  },
};
</script>
