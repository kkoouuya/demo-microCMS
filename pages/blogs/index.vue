import axios from 'axios';
<template>
  <div class="child">
    <div class="childMainVisual">
      <div class="container container--lg">
        <h1 class="childMainVisual__title">Posts</h1>
        <p>記事一覧</p>
      </div>
    </div>
    <div class="container">
      <ol class="row works">
        <li class="works__item" v-for="blog in contents" :key="blog.id">
          <nuxt-link :to="`/blogs/${blog.id}`" class="works__inner">
            <figure class="works__image">
              <img :src="blog.thumbnail.url" :alt="blog.alt" />
            </figure>
            <div class="works__text">
              <p class="works__name">{{ blog.title }}</p>
              <p class="works__date">
                <time
                  :datetime="blog.createdAt"
                  v-text="
                    $dateFns.format(new Date(blog.createdAt), 'yyyy.MM.dd')
                  "
                ></time>
              </p>
            </div>
          </nuxt-link>
        </li>
      </ol>
    </div>
  </div>
</template>
<script>
// blogの一覧ページ
export default {
  async asyncData({ $microcms }) {
    const blogs = await $microcms.get({
      endpoint: "blogs",
    });
    return blogs;
  },
};
</script>

<style lang="scss" scoped>
.childMainVisual {
  text-align: center;
  padding: 5em 0;
  background-color: $base-color-secondary;
  margin-bottom: 2.5em;

  @include mq() {
    margin-bottom: 5em;
  }

  &__title {
    font-family: $font-ubuntu;
    font-size: fz(40);
    margin-bottom: 0.25em;
  }
}

.works {
  list-style: none;

  &__item {
    width: 100%;

    @include mq() {
      width: calc((100% - 2.5em) / 2);
    }
  }

  &__item + &__item {
    margin-top: 1.5em;

    @include mq() {
      margin: 0;
    }
  }

  &__inner {
    display: block;
  }

  &__image {
    margin-bottom: 0.5em;

    img {
      width: 100%;
    }
  }

  &__name {
    font-weight: bold;
  }

  &__date {
    font-size: fz(14);
  }
}
</style>
