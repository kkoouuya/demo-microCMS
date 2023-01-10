<template>
  <div>
    <div class="mainVisual">
      <picture>
        <source
          srcset="https://placehold.jp/375x530.png"
          media="(max-width: 767px)"
        />
        <img src="https://placehold.jp/1440x436.png" alt="" />
      </picture>
    </div>
    <section id="about" class="sectionPrimary">
      <div class="container">
        <h2 class="headingPrimary">about</h2>
        <div class="profile">
          <div class="profile__upper">
            <div class="profile__text">
              <p class="profile__name">
                岩渕康也<span lang="en">Iwabuchi Koya</span>
              </p>
              <dl class="profile__item">
                <dt class="profile__title">技術スタック</dt>
                <dd>HTML / CSS / jQuery / JavaScript / Nuxt</dd>
              </dl>
              <dl class="profile__item">
                <dt class="profile__title">趣味</dt>
                <dd>HTML / CSS / jQuery / JavaScript / Nuxt</dd>
              </dl>
            </div>
            <figure class="profile__image">
              <img src="https://placehold.jp/260x260.png" alt="your name" />
            </figure>
          </div>
        </div>
        <p class="profile__message">
          自己紹介を入れましょう。出身や経歴と現在の仕事の内容を簡単に話すも良し。<br />数年後の目標や今学んでいること、活動している内容を入れるのも良いかと思います。
        </p>
      </div>
    </section>
    <section class="sectionPrimary background--gray">
      <div class="container">
        <h2 class="headingPrimary">Recent Post</h2>
        <ol class="row works">
          <li v-for="blog in contents" :key="blog.id">
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
        <p class="button-area">
          <nuxt-link to="/blogs" class="buttonPrimary">view more</nuxt-link>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  async asyncData({ $microcms }) {
    const blogs = await $microcms.get({
      endpoint: "blogs",
      queries: { limit: 2 },
    });
    return blogs;
  },
};
</script>

<style lang="scss" scoped>
.mainVisual {
  img {
    width: 100%;
  }
}

.profile {
  &__upper {
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 0.5em;

    @include mq() {
      flex-direction: row-reverse;
      justify-content: space-between;
      margin-bottom: 2em;
    }
  }

  &__text {
    @include mq() {
    }
  }

  &__name {
    font-size: fz(24);
    font-weight: bold;
    margin-bottom: 0.5em;

    @include mq() {
      font-size: fz(28);
      margin-bottom: 0.857em;
    }

    [lang="en"] {
      font-size: fz(18);

      &::before {
        content: "/";
        margin: 0 0.5em;
      }
    }
  }

  &__item {
    margin-bottom: 0.5em;

    @include mq() {
      margin-bottom: 1em;
    }
  }

  &__title {
    font-size: fz(18);
    font-weight: bold;
    margin-bottom: 0.222em;

    @include mq() {
      margin-bottom: 0.444em;
    }
  }

  &__image {
    width: 100%;
    margin-bottom: 1.75em;

    @include mq() {
      width: 40%;
      margin: 0 2em 0 0;
    }

    img {
      width: 100%;
    }
  }

  &__message {
    white-space: pre-wrap;
  }
}

.works {
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

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
