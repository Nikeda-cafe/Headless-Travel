<template>
    <div class="mt-8 mb-8 w-11/12 m-auto lg:mt-24 md:flex md:justify-between md:w-11/12">
        <article class="md:w-9/12 ">
            <PageTitle englishText="INFORMATION" japaneseText="お知らせ情報" />
            <section class="md:w-11/12 md:m-auto md:mt-16">
                <h2 class="bg-gray-200 py-2 px-4 rounded-md text-2xl mb-2 md:mb-4">{{res.title}}</h2>
                <time class="flex items-center" datetime="">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-1" height="18px" viewBox="0 0 24 24" width="18px" fill="#333"><path d="M0 0h24v24H0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                    <span>{{res.createdAt}}</span>
                </time>
                <div class="information__article" v-html="$md.render(res.content)"></div>
            </section>
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
        const result = await $axios.$get(`${process.env.API_URL_EXPRESS}/information/?id=${params.id}`);
        return {
            res: result[0],
        };
    },
    components: { PageTitle }
}
</script>

<style lang="scss">
    .information__article{
        h2{
            padding-left: 7px;
            border-left: 5px solid #333;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
            margin-top: 35px;
        }
        > ul > li{
            margin-bottom: 10px;
            &::before{
                content: '・';
            }
            > ul > li{
                padding-left: 20px;
            }
        }
        a{
            color: rgb(113, 152, 252);
            padding-bottom: 2px;
            border-bottom: 1px solid blue;
            margin-top: 10px;
            &:hover{
                opacity: .7;
            }
        }
        p{
            margin-bottom: 15px;
        }
    }
    @media screen and (min-width: 640px){
        .information__article{
            h2{
                margin-top: 50px;
            }
            > ul > li{
                margin-bottom: 10px;
            }
        }
    }
</style>
