<template lang="">
    <div class=" m-auto text-center my-8 md:my-4">
        <p class="text-4xl">{{englishText}}</p>
        <h1 class="text-md">{{japaneseText}}</h1>
    </div>
</template>

<script>

export default {
    name: 'PageTitle',
    props: {
        englishText: {
            type: String,
            required: true
        },
        japaneseText: {
            type: String,
            required: true
        }
    }
}

</script>
