<template lang="">
    <div class="mt-8 mb-8 lg:mt-24 md:flex md:justify-between md:w-11/12">
        <article class="md:w-9/12 ">
            <section class="s__thumbnail w-11/12 md:w-9/12 m-auto">
                <img class="max-w-full h-auto rounded-md" :src="`${res.thumbnail.url}?fm=webp`" alt="">
            </section>
            <section class="s__title my-8 w-11/12 md:w-9/12 m-auto">
                <div class="flex flex-wrap justify-starts items-center mt-4 relative">
                    <TagIcon bgBlueColor="true">{{res.area.name}}</TagIcon>
                    <TagIcon v-for="(item,index) in res.genre">{{item.genre_name}}</TagIcon>
                    <svg
                        v-if="favoFlag"
                        class="absolute right-5 top-2 text-3xl md:text-5xl cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        height="30px"
                        viewBox="0 0 24 24"
                        width="30px"
                        fill="lightpink"
                        style="&#10; color: brown;&#10;"
                        @click="deleteFavo(res.id)"
                    ><path d="M0 0h24v24H0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    <svg
                        v-else
                        class="absolute right-5 top-2 text-3xl md:text-5xl cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        height="30px"
                        viewBox="0 0 24 24"
                        width="30px"
                        fill="#000000"
                        @click="insertFavo(res.id,res.title,res.thumbnail.url,$dateFns.format(new Date(), 'yyyy/MM/dd'))"
                    ><path d="M0 0h24v24H0z" fill="none"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/>
                    </svg>
                </div>
                <p class="my-2">公開日：{{$dateFns.format(new Date(res.publishedAt), 'yyyy/MM/dd')}}</p>
                <h1 class="lg:text-4xl text-2xl">{{res.title}}</h1>
            </section>

            <section class="s__writer md:mb-20 mb-8 bg-gray-100 md:bg-white w-full py-8 md:py-0">
                <div class="w-11/12 md:w-9/12 m-auto md:bg-gray-100 md:p-8">
                    <Writer />
                </div>
            </section>

            <section class="s__contents--description w-11/12 md:w-9/12 m-auto">
                <p class="text-2xl leading-relaxed">{{res.description}}</p>
            </section>

            <section class="s__contents--toc w-11/12 md:w-9/12 m-auto mb-12">
                <Toc :toc="toc" />
            </section>

            <section class="s__contents--body w-11/12 md:w-9/12 m-auto">
                <div class="" v-html="res.body"></div>
            </section>

            <vue-final-modal v-model="showModal" classes="flex justify-center items-center w-full">
                <div v-if="favoFlag" class="p-4 rounded text-2xl bg-red-300 text-white py-8">
                    <p>{{modalText}}</p>
                    <div class="text-center mt-4 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 0 24 24" width="28px" fill="#fff" style="&#10;    color: brown;&#10;"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                        <span class="mb-2">×{{getCountFavo}}</span>
                    </div>
                </div>
                <div v-else class="p-4 rounded text-2xl py-8 bg-gray-400 text-white">
                    <p>{{modalText}}</p>
                    <div class="text-center mt-4 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 0 24 24" width="28px" fill="#fff"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>
                        <span class="mb-2">×{{getCountFavo}}</span>
                    </div>
                </div>
            </vue-final-modal>

        </article>
        <aside class="hidden md:block md:w-3/12">
            <LayoutSideNav />
        </aside>
    </div>
</template>

<script>
import Writer from '/components/Writer.vue';
import Toc from '/components/Toc.vue';
import LayoutSideNav from '/components/LayoutSideNav.vue';
import Cheerio from 'cheerio';
export default {
    // middleware: 'insertStoreMasterData,
    fetch(){
        this.$store.commit('resetMenu')
    },
    head() {
        return {
            title: this.res.title,
        }
    },
    data: function(){
        return {
            postId: '',
            favoFlag: false,
            favoList: [],
            favoColor: '',
            showModal: false,
            modalText: '',
            historyList: [],
            historyFlag: false
        }
    },
    mounted() {
        this.postId = this.$route.params.id
        this.favoList = JSON.parse(localStorage.getItem('favo_posts')) ?? [],
        this.favoFlag = this.favoList.find((v) => v.postId === this.$route.params.id) !== undefined ? true : false

        this.historyList =JSON.parse(localStorage.getItem('history_posts')) ?? [],
        this.historyFlag = this.historyList.find((v) => v.postId === this.$route.params.id) !== undefined ? true : false
        const date = new Date()
        const historyData = {
                    'postId': this.res.id,
                    'postTitle': this.res.title,
                    'postThumbUrl': this.res.thumbnail.url,
                    'historyDate': date.toLocaleDateString()
                }
        if(!this.historyFlag){
            this.historyList.unshift(historyData);
        }else{
            const deletedHistoryArray = this.historyList.filter((v) => v.postId !== this.postId);
            this.historyList = deletedHistoryArray
            this.historyList.unshift(historyData);
        }
        localStorage.setItem('history_posts',JSON.stringify(this.historyList));

    },
    methods: {
        insertFavo(postId,postTitle,postThumbUrl,favoDate){
            if(!this.favoFlag){
                this.favoList.unshift({postId,postTitle,postThumbUrl,favoDate})
                localStorage.setItem('favo_posts',JSON.stringify(this.favoList));
                this.modalText = 'お気に入りに追加しました！'
                this.favoFlag = this.favoList.find((v) => v.postId === this.$route.params.id) !== undefined ? true : false
                this.showModal = true
            }else{
                return false
            }

        },
        deleteFavo(id){
            if(this.favoFlag){
                const deletedArray = this.favoList.filter((v) => v.postId !== id);
                this.favoList = deletedArray
                localStorage.setItem('favo_posts',JSON.stringify(this.favoList));
                this.modalText = 'お気に入りから削除しました！'
                this.favoFlag = this.favoList.find((v) => v.postId === this.$route.params.id) !== undefined ? true : false
                this.showModal = true
            }
        },
    },
    computed: {
        getFavoIcon(){
            this.favoColor = this.favoFlag ? 'text-pink-200' : ''
            return this.favoFlag ? 'favorite' : 'favorite_border'
        },
        getCountFavo(){
            return this.favoList.length
        }
    },
    async asyncData({ params,$config,$axios}) {
        const result = await $axios.$get(`${process.env.API_URL}/news/${params.id}`, {
            headers: { "X-API-KEY": process.env.API_KEY },
        });

        const $ = Cheerio.load(result.body);
        const headings = $('h1, h2').toArray();
        const toc = headings.map(data => ({
            text: data.children[0].data,
            id: data.attribs.id,
            name: data.name
        }));

        return {
            res: result,
            toc
        };
    },
    components: { Writer, LayoutSideNav, Toc }
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
        h3{
            font-size: 24px;
            font-weight: 600;
            border-bottom: 1px solid gray;
            padding-bottom: 5px;
            margin-bottom: 5px;
            padding-left: 10px;
            border-left: 5px solid #333;
        }
        iframe{
            margin-top: 20px;
            margin-bottom: 20px;
        }
        @media screen and (max-width: 480px){
            iframe{
                width: 100%;
                margin: 0 auto;
            }
            p{
                font-size: 4.5vw;
            }
            h2{
                font-size: 6vw;
                margin-top: 8vw;
                margin-bottom: 4vw;
            }
        }
    }
</style>
