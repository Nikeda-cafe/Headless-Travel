<template lang="">
    <div class="lg:w-7/12 m-auto">
        <article class="">
            <section class="s__thumbnail">
                <img class="max-w-full h-auto rounded-md" :src="res.thumbnail.url" alt="">
            </section>
            <section class="s__title my-8">
                <div class="flex flex-wrap justify-starts items-center mt-4">
                    <TagIcon :bgColor="`bg-blue-100`">{{res.area.name}}</TagIcon>
                    <TagIcon v-for="(item,index) in res.jenre">{{item.jenre_name}}</TagIcon>
                </div>
                <p class="my-2">公開日：{{$dateFns.format(new Date(res.publishedAt), 'yyyy/MM/dd')}}</p>
                <h1 class="text-4xl">{{res.title}}</h1>
            </section>

            <section class="s__writer mb-20">
                <Writer />
            </section>

            <section class="s__contents--description">
                <p class="text-2xl leading-relaxed">{{res.description}}</p>
            </section>

            <section class="s__contents--body">
                <div class="" v-html="res.body"></div>
            </section>

            <p></p>

        </article>

    </div>
</template>

<script>
import Writer from '/components/Writer.vue';
export default {
    data: function(){
        return {
            id: '',
            res: {}
        }
    },

    mounted() {
        this.id = this.$route.params.id

    },
    async asyncData({ params,$config,$axios}) {
        const result = await $axios.$get(`${$config.apiUrl}/news/${params.id}`, {
            headers: { "X-API-KEY": "691867be-4a35-4006-90c1-9b0856070900" },
        });
        return {
            res: result
        };
    },
    components: { Writer }
}
</script>

<style lang="scss">
    .s__contents--body{
        h2{
            font-size: 28px;
            font-weight: 700;
            background-color: #eee;
            padding: 10px 20px;
            border-radius: 5px;
            margin-top: 60px;
            margin-bottom: 30px;
        }
        p{
            font-size: 20px;
        }
        img{
            border-radius:8px;
        }
    }
</style>
