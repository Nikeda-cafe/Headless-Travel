<template lang="">
    <div class="text-center m-auto bg-gray-100 py-4">
        <PageTitle englishText="CONTACT" japaneseText="お問い合わせ" />
        <div class="w-full bg-gray-100">
        <form class="flex w-11/12 max-w-xl space-x-3 m-auto mb-8">
            <div class="w-full max-w-2xl px-5 py-10 m-auto bg-white rounded-lg shadow dark:bg-gray-800">
                <div class="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
                    入力フォーム
                </div>
                <div class="grid max-w-xl grid-cols-2 gap-4 m-auto">
                    <div class="col-span-2 lg:col-span-1">
                        <div class=" relative ">
                            <p class="text-left text-lg font-bold m-1">お名前*</p>
                            <input
                                type="text"
                                id="contact-form-name"
                                class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                                placeholder="フロント太郎"
                                required
                            />
                        </div>
                    </div>
                    <div class="col-span-2 lg:col-span-1">
                        <div class=" relative ">
                            <p class="text-left text-lg font-bold m-1">メールアドレス*</p>
                            <input
                                type="email"
                                id="contact-form-email"
                                class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                                placeholder="example@gmail.com"
                                required
                            />
                        </div>
                    </div>
                    <div class="col-span-2">
                        <p class="text-left text-lg font-bold ml-1">お問い合わせ内容*</p>
                        <label class="text-gray-700" for="name">
                            <textarea
                                class="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                                id="comment"
                                placeholder=""
                                name="comment"
                                rows="5"
                                cols="60"
                                required
                            >
                            </textarea>
                        </label>
                    </div>
                    <div class="col-span-2 text-right">
                        <button
                            type="submit"
                            class="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                        >
                            送信
                        </button>
                    </div>
                </div>
            </div>
        </form>
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

        }
    },
    fetch({ store }) {
        store.commit("resetMenu");
    },
}
</script>
