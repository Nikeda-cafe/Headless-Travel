<template lang="">
    <div>
        <AreaSelect :list="prefList" ></AreaSelect>
    </div>
</template>

<script>
import AreaSelect from '../../components/AreaSelect.vue';
export default {
    async asyncData({ params, $config, $axios }) {
        const res = await $axios.$get('https://opendata.resas-portal.go.jp/api/v1/prefectures',
            {
                headers: {
                    'X-API-KEY': 'ZJ0M1oUrGqbFg8zVS1gGvYUyZm4KYm6YJTpfVeoL',
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            }
        )
        return { prefList: res.result }
    },
    components: {AreaSelect}
}

</script>
