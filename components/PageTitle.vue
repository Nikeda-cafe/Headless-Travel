<template lang="">
    <div class="lg:w-2/6 m-auto text-center mb-14">
        <h2 class="text-4xl">{{englishText}}</h2>
        <p class="text-md">{{japaneseText}}</p>
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
