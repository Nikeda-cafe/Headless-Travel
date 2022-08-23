<template lang="">
    <li class="mb-4">
        <div class="overflow-hidden shadow-lg rounded-lg h-90 lg:w-72 md:w-80 cursor-pointer m-auto">
            <a href="#" class="w-full block h-full">
                <img alt="blog photo" :src="url" class="max-h-40 w-full object-cover"/>
                <div class="bg-white dark:bg-gray-800 w-full p-4">
                    <p class="text-indigo-500 text-md font-medium"></p>
                    <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                        {{title}}
                    </p>
                    <p class="text-gray-400 dark:text-gray-300 font-light text-md" v-html="trimPostBody(body)"></p>
                </div>
            </a>
        </div>
    </li>
</template>

<script>
export default {
  name: 'NewsList',
  props: {
    url: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    }
  },
  methods: {
    trimPostBody(body){
      const trimBody = body.slice(0,50) + '...';
      return trimBody
    }
  },
}

</script>
