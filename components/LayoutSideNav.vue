<template>
    <div class="">
        <section class="side__tag md:mb-16">
            <div class="md:my-4 md:pt-8 md:border-bottom-2 md:border-t-2 md:w-full border-black">
                <p class="md:font-bold md:text-xl md:mb-6">
                    <span class="sharp">#</span>人気のタグ
                </p>
                <ul class="md:w-full md:flex md:flex-wrap">
                    <li v-for="(item,index) in areaInfoList"
                        :key="index"
                        class="md:mr-2 md:mb-2 md:text-gray-500  md:hover:text-gray-800"
                    ><nuxt-link :to="`/news/area/${item.id}/`"><span class="text-blue-400">#</span>{{item.name}}</nuxt-link>
                    </li>
                    <li v-for="(item,index) in jenreInfoList"
                        :key="index"
                        class="md:mr-2 md:mb-2 md:text-gray-500  md:hover:text-gray-800"
                    ><nuxt-link :to="`/news/jenre/${item.id}/`"><sapn class="text-blue-400">#</sapn>{{item.jenre_name}}</nuxt-link>
                    </li>
                </ul>
                <div class="md:flex md:justify-end">
                    <nuxt-link
                        class="md:mr-5 md:text-lg md:font-bold md:pb-1 border-b-2 border-black md:text-gray-500 md:hover:text-gray-800"
                        to="/search/">タグ一覧
                    </nuxt-link>
                </div>
            </div>
        </section>

        <section>
            <div class="md:my-4 md:pt-8 md:border-bottom-2 md:border-t-2 md:w-full border-black">
                <p class="md:font-bold md:text-xl md:mb-6">
                    Pickup記事
                </p>
                
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'LayoutSideNav',
    data: function(){
        return {
            areaInfoList: this.$store.state.areaInfoList,
            jenreInfoList: this.$store.state.jenreInfoList,
        }
    },

}

</script>
