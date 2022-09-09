<template lang="">
    <div class="mt-8 mb-8 lg:mt-24">
        <article class="">
            <section class="s__thumbnail w-11/12 lg:w-7/12 m-auto">
                <img class="max-w-full h-auto rounded-md" :src="`${res.thumbnail.url}?fm=webp`" alt="">
            </section>
            <section class="s__title my-8 w-11/12 lg:w-7/12 m-auto">
                <div class="flex flex-wrap justify-starts items-center mt-4 relative">
                    <TagIcon bgBlueColor="true">{{res.area.name}}</TagIcon>
                    <TagIcon v-for="(item,index) in res.jenre">{{item.jenre_name}}</TagIcon>
                    <span
                        v-if="favoFlag"
                        class="material-icons absolute right-5 top-0.5 text-3xl"
                        :class="favoColor"
                        @click="deleteFavo(res.id)"
                    >{{getFavoIcon}}
                    </span>
                    <span
                        v-else
                        class="material-icons absolute right-5 top-0.5 text-3xl"
                        :class="favoColor"
                        @click="insertFavo(res.id,res.title,res.thumbnail.url,$dateFns.format(new Date(), 'yyyy/MM/dd'))"
                    >{{getFavoIcon}}
                    </span>

                </div>
                <p class="my-2">公開日：{{$dateFns.format(new Date(res.publishedAt), 'yyyy/MM/dd')}}</p>
                <h1 class="lg:text-4xl text-2xl">{{res.title}}</h1>
            </section>

            <section class="s__writer lg:mb-20 mb-8 bg-gray-100 w-full py-8">
                <div class="w-11/12 lg:w-7/12 m-auto">
                    <Writer />
                </div>
            </section>

            <section class="s__contents--description w-11/12 lg:w-7/12 m-auto">
                <p class="text-2xl leading-relaxed">{{res.description}}</p>
            </section>

            <section class="s__contents--body w-11/12 lg:w-7/12 m-auto">
                <div class="" v-html="res.body"></div>
            </section>

            <vue-final-modal v-model="showModal" classes="flex justify-center items-center w-full">
                <div v-if="favoFlag" class="p-4 rounded text-2xl bg-red-300 text-white py-8">
                    <p>{{modalText}}</p>
                    <div class="text-center mt-4 flex items-center justify-center">
                        <span class="material-icons">
                            favorite
                        </span>
                        <span class="mb-2">×{{getCountFavo}}</span>
                    </div>
                </div>
                <div v-else class="p-4 rounded text-2xl py-8 bg-gray-400 text-white">
                    <p>{{modalText}}</p>
                    <div class="text-center mt-4 flex items-center justify-center">
                        <span class="material-icons">
                            favorite_border
                        </span>
                        <span class="mb-2">×{{getCountFavo}}</span>
                    </div>
                </div>
            </vue-final-modal>

        </article>

    </div>
</template>

<script>
import Writer from '/components/Writer.vue';
export default {
    fetch ({store}) {
        store.commit('resetMenu')
    },
    async asyncData({ params,$config,$axios}) {
        const result = await $axios.$get(`${$config.apiUrl}/news/${params.id}`, {
            headers: { "X-API-KEY": "691867be-4a35-4006-90c1-9b0856070900" },
        });
        return {
            res: result
        };
    },
    data: function(){
        return {
            postId: '',
            favoFlag: false,
            favoList: JSON.parse(localStorage.getItem('favo_posts')) ?? [],
            favoColor: '',
            showModal: false,
            modalText: '',
        }
    },
    mounted() {
        this.postId = this.$route.params.id
        this.favoFlag = this.favoList.find((v) => v.postId === this.$route.params.id) !== undefined ? true : false
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
    head() {
        return {
            title: this.res.title,
        }
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
