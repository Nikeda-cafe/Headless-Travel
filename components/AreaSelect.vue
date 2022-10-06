<template>
    <div>
        <div v-show="areaShow === false" class="w-11/12 m-auto my-5">
            <p class="mb-4 text-2xl">都道府県を選択してください</p>
            <ul class="flex flex-wrap">
                <li
                    v-for="(item,index) in list"
                    :key="item.prefCode"
                    @click="getAreaByPrefectureId(item.prefCode)"
                    class="mb-3 mr-3 py-1 px-2 bg-blue-200 rounded-lg "
                >{{item.prefName}}</li>
            </ul>
        </div>
        <transition name="area">
            <SlideArea ref="child" v-show="areaShow" @parent-back="areaShow = !areaShow" />
        </transition>
    </div>
</template>

<script>
import SlideArea from './SlideArea.vue';
export default {
    data: function () {
        return {
            areas: [],
            areaShow: false,
        };
    },
    props: {
        list: {
            type: Array,
            require: true
        }
    },
    methods: {
        getAreaByPrefectureId(prefectureId) {
            this.$refs.child.refresh(prefectureId)
            this.areaShow = true;
        }
    },
    components: { SlideArea }
}
</script>

<style lang="scss" scoped>
    .xxx{
        width: 100%;
        height: 300px;
        border: 1px solid;
    }
    .area-enter-active, .area-leave-active {
        transform: translate(0px, 0px);
        transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    }

    .area-enter, .area-leave-to {
        transform: translateX(100vw) translateX(0px);
    }
</style>


