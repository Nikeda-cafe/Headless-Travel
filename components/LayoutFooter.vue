<template lang="">

<footer class="bg-white dark:bg-gray-800 pt-4 pb-8 xl:pt-8 lg:mt-20 border-t border-gray-200">
    <div class="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-gray-400 dark:text-gray-300">
        <ul class="text-lg font-light pb-8 flex flex-wrap justify-center">
            <li class="w-1/2 md:w-1/3 lg:w-1/3">
                <div class="text-center">
                    <h2 class="text-gray-500 dark:text-gray-200 text-md uppercase mb-4 font-bold">
                        Menu
                    </h2>
                    <ul>
                        <li class="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <nuxt-link to="/news/">
                                News
                            </nuxt-link>
                        </li>
                        <li class="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <nuxt-link to="/search/">
                                Search
                            </nuxt-link>
                        </li>
                        <li class="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <nuxt-link to="/contact/">
                                Contact
                            </nuxt-link>
                        </li>
                        <li class="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <nuxt-link to="/creater/">
                                Creater
                            </nuxt-link>
                        </li>
                        <li class="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <a href="#">
                                information
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
        <div class="pt-8 flex border-t border-gray-200 max-w-xs mx-auto items-center justify-between">

        </div>
        <div class="text-center pt-10 sm:pt-12 font-light flex items-center justify-center">
            @copyright n-ikeda <br>
            ※当サイトは商用目的のサイトではありません。
        </div>
    </div>
</footer>

</template>

<script>
export default {
    name: 'LayoutFooter',
    props: {

    }
}
</script>
<style lang="scss">

</style>
