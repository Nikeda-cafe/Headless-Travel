<template>
    <div class="mt-8 mb-8 w-11/12 m-auto lg:mt-24 md:flex md:justify-between md:w-11/12">
        <article class="md:w-9/12 ">
            <PageTitle englishText="INFORMATION" japaneseText="お知らせ情報" />
            <h2>{{res.title}}</h2>
            <time datetime="">{{res.createdAt}}</time>
            <div v-html="$md.render(res.content)"></div>
        </article>
        <aside class="hidden md:block md:w-3/12">
            <LayoutSideNav />
        </aside>
    </div>
</template>

<script>
import PageTitle from '../../components/PageTitle.vue';
export default {
    fetch() {
        this.$store.commit("resetMenu");
    },
    head() {
        return {
            title: "お知らせ情報",
        };
    },
    async asyncData({ params, $config, $axios }) {
        const result = await $axios.$get(`https://localhost:3001/api/v1/information/?id=${params.id}`);
        return {
            res: result[0],
        };
    },
    components: { PageTitle }
}
</script>
