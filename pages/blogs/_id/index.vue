<template>
  <div class="child">
    <div class="worksMainVisual">
      <div class="container container--lg worksMainVisual__inner">
        <div class="worksMainVisual__contents">
          <h1 class="worksMainVisual__title">{{ post.title }}</h1>
          <dl class="worksMainVisual__item">
            <dt class="worksMainVisual__itemName">リリース日</dt>
            <dd>
              <time :datetime="post.createdAt">{{ post.createdAt }}</time>
            </dd>
          </dl>
          <dl class="worksMainVisual__item">
            <dt class="worksMainVisual__itemName">制作期間</dt>
            <dd>3ヶ月</dd>
          </dl>
          <p>
            複素数体であれば、任意のCM-タイプの A
            は、実際、数体である定義体（英語版）(field of
            definition)を持っている。自己準同型環の可能なタイプは、対合（ロサチの対合（英語版）(Rosati
            involution）をもつ環として既に分類されていて、
          </p>
        </div>
        <figure class="worksMainVisual__thumbnail">
          <img :src="post.thumbnail.url" :alt="post.alt" />
        </figure>
      </div>
    </div>
    <p class="button-area">
      <nuxt-link to="/blogs" class="buttonPrimary buttonPrimary--leftArrow"
        >back</nuxt-link
      >
    </p>
  </div>
</template>
<script>
export default {
  async asyncData({ $microcms, params }) {
    const post = await $microcms.get({
      endpoint: `blogs/${params.id}`,
    });
    console.log(post);
    return {
      post,
    };
  },
};
</script>
<style lang="scss" scoped>
.worksMainVisual {
  padding: 5em 0;
  background-color: $base-color-secondary;
  margin-bottom: 2.5em;

  @include mq() {
    margin-bottom: 5em;
  }

  &__inner {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: column-reverse;

    @include mq() {
      flex-direction: row;
    }
  }

  &__contents {
    @include mq() {
      width: 39.58%;
    }
  }

  &__thumbnail {
    width: 100%;
    margin-bottom: 1.75em;

    @include mq() {
      width: 56.25%;
    }

    img {
      width: 100%;
    }
  }

  &__title {
    font-size: fz(32);
    margin-bottom: 0.125em;
  }

  &__item {
    margin-bottom: 0.5em;
  }

  &__itemName {
    font-size: fz(18);
    font-weight: bold;
    margin-bottom: 0.222em;
  }
}

.worksItem {
  &__title {
    font-size: fz(24);
    font-weight: bold;
    margin-bottom: 0.333em;
  }

  &__contents {
    white-space: pre-wrap;

    span + span {
      &::before {
        content: "/";
        display: inline-block;
        margin: 0 0.5em;
      }
    }
  }

  + .worksItem {
    margin-top: 1.5em;
  }
}
</style>
