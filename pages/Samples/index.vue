<template>
    <div>
        <AreaSelect></AreaSelect>
        <p>{{getXxx}}</p>
    </div>
</template>

<script>
import AreaSelect from '../../components/AreaSelect.vue';
export default {
    components: {AreaSelect},
    computed: {
       getXxx(){
           return this.$store.getters.getFilteredItems
       }
    }
}

</script>
