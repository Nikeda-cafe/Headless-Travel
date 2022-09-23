<template>
    <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 shadow-md mb-5">
        <nuxt-link :to="`/information/${id}/`" class="block px-4 py-3">
            <div class="w-14 mb-1" v-if="emergency_flag === '1'">
                <TagIcon>{{emergency_flag === '1' ? '緊急' : ''}}</TagIcon>
            </div>
            <time class="text-gray-700 text-base mb-1 block md:w-1/6">
                {{createdAt}}
            </time>
            <div class="md:w-10/12">
                {{title}}
            </div>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    name: 'InformationList',
    props: {
        id: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        createdAt: {
            type: String,
            required: true
        },
        emergency_flag: {
            type: Number
        }
    }
}

</script>
