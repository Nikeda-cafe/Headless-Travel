<template>
    <div>
        <header class="s__header w-full bg-white px-2 py-2 z-50 pb-4 md:py-8">
            <div class="md:max-w-xl py-2 text-center text-lg font-bold text-gray-500">旅で人生を少し素敵に</div>
            <div class="mx-auto md:flex md:items-center flex">
                <div class="w-1/2 md:justify-around md:w-3/5 md:flex mx-auto px-6 md:px-0 flex justify-between items-center h-16">
                    <h1>
                        <nuxt-link
                            to="/"
                            class="text-center md:flex text-black text-lg lg:text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap"
                        ><p class="md:mr-2">Headless</p>
                        <p>Travel</p>
                        </nuxt-link>
                    </h1>
                </div>
                <div class="flex justify-between items-center w-3/5 md:w-7/12">
                    <nuxt-link to="/favorite/">
                        <div class="texr-black ">
                            <div class="text-center leading-none">
                                <svg xmlns="http://www.w3.org/2000/svg" class="m-auto" height="28px" viewBox="0 0 24 24" width="28px" fill="lightpink"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                            </div>
                            <span class="md:text-xl">お気に入り</span>
                        </div>
                    </nuxt-link>
                    <nuxt-link to="/history/" class="md:mx-8">
                        <div class="texr-black">
                            <div class="text-center leading-none">
                                <svg xmlns="http://www.w3.org/2000/svg" class="m-auto" height="28px" viewBox="0 0 24 24" width="28px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                            </div>
                            <span class="md:text-xl">履歴</span>
                        </div>
                    </nuxt-link>
                    <div class="text-black mr-4">
                        <button class="md:hidden focus:outline-none" @click="$store.commit('toggleMenu')">
                            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                <path
                                    v-show="!$store.state.isMenuActive"
                                    d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"
                                />
                                <path
                                    v-show="$store.state.isMenuActive"
                                    d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
                                />
                            </svg>
                        </button>
                        <nav
                            class="w-full md:block absolute left-0 md:static bg-white md:bg-none z-20 top-28"
                            :class="$store.state.isMenuActive ? 'block' : 'hidden'"
                        >
                            <ul class="md:flex md:justify-end md:items-end">
                                <li class="w-full md:w-auto md:ml-5 border-b border-gray-300 md:hover:border-gray-800">
                                    <nuxt-link to="/news/" class="text-black md:block inline-block md:py-0 py-5 px-5 md:px-0 w-full md:text-gray-400  md:hover:text-gray-800"
                                    >記事一覧</nuxt-link>
                                </li>
                                <li class="w-full md:w-auto md:ml-5 border-b border-gray-300 md:hover:border-gray-800">
                                    <nuxt-link to="/search/" class="text-black md:block inline-block md:py-0 py-5 px-5 md:px-0 w-full md:text-gray-400  md:hover:text-gray-800"
                                    >カテゴリ一覧</nuxt-link>
                                </li>
                                <li class="w-full md:w-auto md:ml-5 border-b border-gray-300 md:hover:border-gray-800">
                                    <nuxt-link to="/contact/" class="text-black md:block inline-block md:py-0 py-5 px-5 md:px-0 w-full md:text-gray-400  md:hover:text-gray-800"
                                    >お問い合わせ</nuxt-link>
                                </li>
                                <li class="w-full md:w-auto md:ml-5 border-b border-gray-300 md:hover:border-gray-800">
                                    <nuxt-link to="/creater/" class="text-black md:block inline-block md:py-0 py-5 px-5 md:px-0 w-full md:text-gray-400  md:hover:text-gray-800"
                                    >制作者情報</nuxt-link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'LayoutHeader',
    data() {
        return {
            isOpen: false,
            showModal: false,
            viewHistory: {}
        }
    },

    methods: {
        refresh: function(){
            this.$fetch();
            this.showModal = true
        }
    },

    beforeRouteLeave(to,from,next){
        this.isOpen = false
        next();
    }

}
</script>

<style lang="scss">
    .s__header{
        border-bottom: 1px solid lightgray;
    }
</style>
