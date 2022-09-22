<template>
    <div class="mt-8 mb-8 lg:mt-24 md:flex md:justify-between md:w-11/12">
        <div class="md:w-9/12 ">
            <PageTitle englishText="CREATER" japaneseText="制作者情報" />
            <section class="bg-gray-50 py-8 md:mt-16 mb-8 md:py-10 md:ml-8 md:mr-8">
                <div class="w-11/12 m-auto">
                    <div class="bg-white dark:bg-gray-800 w-11/12 shadow-lg mx-auto rounded-xl p-4">
                        <div class="flex items-center mt-4 mb-4">
                            <a href="#" class="block relative">
                                <img alt="profil" src="~/assets/avater.png" class="mx-auto object-cover rounded-full h-16 w-18 "/>
                            </a>
                            <div class="flex flex-col ml-4 justify-between">
                                <span class="font-semibold text-indigo-500 text-2xl">
                                    Naoto Ikeda
                                </span>
                            </div>
                        </div>
                        <p class="text-gray-600 dark:text-white text-md">
                            <span class="mb-4">東京理科大学を卒業後、ITソリューション会社で物流、倉庫管理システムの開発に従事。</span><br>
                            <span class="mb-4">その後、名古屋の大手Webベンチャー企業でフロントエンドエンジニアとしてNuxt.js、AWSを使いポータルサイト、メディアサイトの開発を経験。</span><br>
                            <span class="mb-4">現在は東京の事業会社でPHPエンジニアとしてポータルサイトの開発をしています。</span>
                        </p>
                    </div>
                </div>
            </section>
            <section class="w-11/12 m-auto">
                <p class="font-bold text-xl mb-5">業務経験・スキル</p>
                <div class="mb-8">
                    <BarChart
                        :chart-data="chartData1"
                        :options="options1"
                    />
                </div>
                <div class="mb-8">
                    <BarChart
                        :chart-data="chartData2"
                        :options="options2"
                    />
                </div>
            </section>
            <section class="bg-gray-50 py-4 md:py-10 md:ml-8 md:mr-8">
                <div class="w-11/12 m-auto">
                    <div class="flex justify-between items-center md:justify-end">
                        <a href="https://github.com/Nikeda-cafe/Headless-Travel" target="_blank" class="s__writer__sns--button">
                            <button type="button"  class=" py-4 px-8 flex items-center bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="mr-2" viewBox="0 0 1792 1792">
                                    <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z">
                                    </path>
                                </svg>
                                GitHub
                            </button>
                        </a>
                        <nuxt-link to="/contact/" class="md:ml-10">
                            <button class="font-bold text-lg text-gray-800 border-none px-8 py-4 rounded-lg shadow-lg bg-blue-100 my-2 ">
                                お問い合わせ
                            </button>
                        </nuxt-link>
                    </div>
                </div>
            </section>
        </div>
        <aside class="hidden md:block md:w-3/12">
            <LayoutSideNav />
        </aside>
    </div>
</template>

<script>
import PageTitle from '../../components/PageTitle.vue';
import LayoutSideNav from '/components/LayoutSideNav.vue';
import BarChart from '~/components/BarChart.vue'

export default {
    fetch(){
        this.$store.commit('resetMenu')
    },
    head() {
        return {
            title: '制作者情報',
        }
    },
    data() {
        return {
            chartData1: {
                labels: ['VanillaJS', 'jQuery', 'Nuxt.js', 'ZendFramework', 'Codeigniter'],
                datasets: [
                    {
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                        ],
                        data: [3.5, 3.5, 1.5, 2, 1]
                    }
                ]
            },
            options1: {
                title: {
                    display: true,
                    fontSize: 18,
                    text: 'フレームワーク、ライブラリ経験年数'
                },
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    position: 'top',
                    display: false
                },
                layout: {
                    padding: 0
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            stepSize: 0.5,
                            min: 0,
                            max: 4
                        }
                    }]
                }
            },
            chartData2: {
                labels: ['Linux', 'MySQL', 'PostgreSQL', 'AWS', 'Firebase'],
                datasets: [
                    {
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                        ],
                        data: [3.5, 3.5, 1.5, 1.2, 1]
                    }
                ]
            },
            options2: {
                title: {
                    display: true,
                    fontSize: 18,
                    text: 'クラウド・サーバー環境経験年数'
                },
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    position: 'top',
                    display: false
                },
                layout: {
                    padding: 0
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            stepSize: 0.5,
                            min: 0,
                            max: 4
                        }
                    }]
                }
            }
        }
    },
    components: { PageTitle, LayoutSideNav, BarChart }
}

</script>
