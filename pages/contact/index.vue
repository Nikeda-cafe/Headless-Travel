<template>
    <section v-if="finished" class="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
		<div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
			<div class="max-w-md text-center">
                <PageTitle englishText="COMPLETE" japaneseText="送信完了" />
				<p class="text-2xl font-semibold md:text-3xl md:mt-16">お問い合わせありがとうございます。</p>
				<p class="mt-4 mb-8 dark:text-gray-400"></p>
				<nuxt-link
                    rel="noopener noreferrer"
                    to="/"
                    class="px-8 py-3 font-semibold text-xl border-none bg-gray-200 rounded dark:bg-violet-400 dark:text-gray-900"
                >トップへ戻る</nuxt-link>
			</div>
		</div>
	</section>
    <div v-else class="text-center m-auto bg-gray-100 py-4">
        <PageTitle englishText="CONTACT" japaneseText="お問い合わせ" />
        <div class="w-full bg-gray-100">
        <ValidationObserver ref="myform">
        <form class="flex w-11/12 max-w-xl space-x-3 m-auto mb-8" name="contact" hidden @submit.prevent="handleSubmit()">
            <div class="w-full max-w-2xl px-5 py-10 m-auto bg-white rounded-lg shadow dark:bg-gray-800">
                <div class="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
                    入力フォーム
                </div>
                <div class="grid max-w-xl grid-cols-2 gap-4 m-auto">
                    <div class="col-span-2 lg:col-span-1">
                        <div class=" relative ">
                            <p class="text-left text-lg font-bold m-1">お名前*</p>
                            <ValidationProvider v-slot="{ errors }" rules="required" name="お名前">
                            <input
                                v-model="name"
                                type="text"
                                id="contact-form-name"
                                class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                                placeholder="フロント太郎"
                                required
                            />
                            <div class="error text-left text-red-400">{{ errors[0] }}</div>
                            </ValidationProvider>
                        </div>
                    </div>
                    <div class="col-span-2 lg:col-span-1">
                        <div class=" relative ">
                            <p class="text-left text-lg font-bold m-1">メールアドレス*</p>
                            <ValidationProvider v-slot="{ errors }" rules="required|email" name="メールアドレス">
                            <input
                                v-model="email"
                                type="email"
                                id="contact-form-email"
                                class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                                placeholder="example@gmail.com"
                            />
                            <div class="error text-left text-red-400">{{ errors[0] }}</div>
                            </ValidationProvider>
                        </div>
                    </div>
                    <div class="col-span-2">
                        <p class="text-left text-lg font-bold ml-1">お問い合わせ内容*</p>
                        <label class="text-gray-700" for="name">
                            <ValidationProvider v-slot="{ errors }" rules="required" name="お問い合わせ">
                            <textarea
                                v-model="comment"
                                class="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                                id="comment"
                                placeholder=""
                                rows="5"
                                cols="60"
                                required
                            >
                            </textarea>
                            <div class="error text-left text-red-400">{{ errors[0] }}</div>
                            </ValidationProvider>
                        </label>
                    </div>
                    <div class="col-span-2 text-right">
                        <button
                            type="submit"
                            @click="handleSubmit"
                            class="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                        >
                            送信
                        </button>
                    </div>
                </div>
            </div>
        </form>
        </ValidationObserver>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactPage',
    head(){
        return{
            title: 'お問い合わせ',
        }
    },
    data: function(){
        return {
            name: '',
            email: '',
            comment: '',
            // botfield: '',
            finished: false,
            submitFlag: true
        }
    },
    methods: {
        async  handleSubmit() {
            if(this.name === ''){
                this.submitFlag = false
            }else{
                this.submitFlag = true
            }
            if(this.email === ''){
                this.submitFlag = false
            }else{
                this.submitFlag = true
            }
            if(this.comment === ''){
                this.submitFlag = false
            }else{
                this.submitFlag = true
            }
            if(this.submitFlag){
                const response = await this.$axios.$post(
                    `${process.env.API_URL_EXPRESS}/sendmail/?name=${this.name}&email=${this.email}&comment=${this.comment}`
                )
                this.finished = true
            }
        },
    },
    fetch({ store }) {
        store.commit("resetMenu");
    },
}
</script>
