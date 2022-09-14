<template>
    <div class="wrapper text-center">
        <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
        <ul class="pager">
            <li v-if="current > 1" class="page arrow top-1 left-1.5 relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                <nuxt-link :to="`/news${getPath(current - 1)}`" class="">
                    <span class="sr-only">Previous</span>
                    <!-- Heroicon name: mini/chevron-left -->
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
                    </svg>
                </nuxt-link>
            </li>
            <li v-if="3 < current" class="page relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20">
                <nuxt-link :to="`/news${getPath(1)}`" class="">
                    1
                </nuxt-link>
            </li>
            <li v-if="4 < current" class="omission relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">
                ...
            </li>
            <li
                v-for="p in pager"
                v-show="current - 3 <= p && p <= current + 1"
                :key="p"
                class="page relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                :class="{ 'bg-gray-100': current === p + 1 }"
            >
                <nuxt-link :to="`/news${getPath(p + 1)}`">
                    {{ p + 1 }}
                </nuxt-link>
            </li>
            <li v-if="current + 3 < pager.length" class="omission relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">
                ...
            </li>
            <li v-if="current + 2 < pager.length" class="page relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                <nuxt-link :to="`/news${getPath(pager.length)}`" class="">
                    {{ pager.length }}
                </nuxt-link>
            </li>
            <li v-if="current < pager.length" class="page arrow top-1 right-1.5 relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
            <nuxt-link :to="`/news${getPath(current + 1)}`" class="">
                <span class="sr-only">Next</span>
                <!-- Heroicon name: mini/chevron-right -->
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                </svg>
            </nuxt-link>
            </li>
        </ul>
        </nav>
    </div>
</template>

<script>
export default {
    props: {
        pager: {
            type: Array,
            required: false,
            default: () => [],
        },
        current: {
            type: Number,
            required: true,
        },
        category: {
            type: Object,
            required: false,
            default: undefined,
        },
    },
    methods: {
        getPath(p) {
        return `/${
            this.category !== undefined ? `category/${this.category.id}/` : ''
        }page/${p}`;
        },
    },
};
</script>
