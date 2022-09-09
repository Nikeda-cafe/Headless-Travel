<template lang="">
   <nuxt-link :to="to">
        <div v-if="thumbnail" class="relative w-full h-28 md:h-60 hover:opacity-80">
            <picture>
                <source :srcset="src" type="image/webp" />
                <img
                    :src="thumbnail.url"
                    alt=""
                    class="h-28 md:h-48 object-cover w-full rounded-md shadow-xl"
                />
            </picture>
            <span class="absolute text-xl text-gray-100 font-bold top-1/4 left-2">{{name}}</span>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    name:'CategoryCard',
    props: {
        id: {
            type: String,
            required: true
        },
        name:{
            type: String,
            required: true
        },
        thumbnail: {
            type: Object,
            required: true
        },
        category: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            to: `/news/${this.category}/${this.id}/`,
            src: `${this.thumbnail.url}?fm=webp`
        }
    },
}
</script>

