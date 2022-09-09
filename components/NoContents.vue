<template>
    <section class="flex items-center h-full dark:bg-gray-900 dark:text-gray-100">
        <div class="container flex flex-col items-center justify-center px-5 mx-auto">
            <div class="max-w-md text-center">
                <p class="text-2xl font-semibold md:text-3xl my-6">{{message}}</p>
                <div class="mb-8">
                    <nuxt-link
                        rel="noopener noreferrer"
                        to="/"
                        class="px-8 py-3 font-semibold text-xl border-none bg-gray-200 rounded dark:bg-violet-400 dark:text-gray-900"
                    >トップへ戻る</nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'NoContents',
    props: {
        message: {
            type: String,
            required: true
        }
    }
}

</script>
