<template>
    <header class="s__header w-full bg-white px-2 py-2 z-50 pb-4">
        <div class="md:max-w-lg py-2 text-center text-lg font-bold text-gray-500">旅で人生を少し素敵に</div>
        <div class="md:max-w-5xl mx-auto md:flex md:items-center flex">
            <div class="w-1/2 md:w-3/5 md:flex mx-auto px-6 md:px-0 flex justify-between items-center h-16">
                <h1>
                    <nuxt-link
                        to="/"
                        class="text-black text-lg lg:text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap"
                    >Headless Travel
                    </nuxt-link>
                </h1>
            </div>
            <div class="flex justify-between items-center w-2/5">
                <div class="texr-black md:hidden">
                    <span class="material-icons">
                        favorite_border
                    </span>
                </div>
                <div class="texr-black md:hidden">
                    <span class="material-icons">
                        restore
                    </span>
                </div>
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
                        class="w-full md:block absolute left-0 md:static bg-white md:bg-none z-20"
                        :class="$store.state.isMenuActive ? 'block' : 'hidden'"
                    >
                        <ul class="md:flex md:justify-end md:items-end">
                            <li class="w-full md:w-auto md:ml-5">
                                <nuxt-link to="/news/" class="text-black md:block inline-block md:py-0 py-5 px-5 md:px-0 w-full"
                                >記事一覧</nuxt-link>
                            </li>
                            <li class="w-full md:w-auto md:ml-5">
                                <nuxt-link to="/search/" class="text-black md:block inline-block md:py-0 py-5 px-5 md:px-0 w-full"
                                >カテゴリ一覧</nuxt-link>
                            </li>
                            <li class="w-full md:w-auto md:ml-5">
                                <nuxt-link to="/contact/" class="text-black md:block inline-block md:py-0 py-5 px-5 md:px-0 w-full"
                                >お問い合わせ</nuxt-link>
                            </li>
                            <li class="w-full md:w-auto md:ml-5">
                                <a href="/information/" class="text-black md:block inline-block md:py-0 py-5 px-5 md:px-0 w-full"
                                >お知らせ</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

        </div>
    </header>
</template>

<script>
export default {
    name: 'LayoutHeader',
    data() {
        return {
            isOpen: false,
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
