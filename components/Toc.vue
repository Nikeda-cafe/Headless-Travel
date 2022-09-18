<template>
    <ul class="toc my-8 p-4 rounded-xl border-none shadow-lg bg-gray-50">
        <p class="text-blue-500 font-bold text-xl mb-4">Contents</p>
        <li class="mb-4 text-xl" :class="`list ${item.name}`" v-for="(item,index) in toc" :key="item.id">
            <n-link v-scroll-to="`#${item.id}`" to>
                {{index + 1}} | {{ item.text }}
            </n-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'Toc',
    props: {
        toc: {
            type: Array,
            required: true
        }
    }
}
</script>
