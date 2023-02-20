<template>
    <div class="mb-7 flex-column flex-md-row  d-flex justify-content-md-between py-8 px-5 align-items-center"
        style="background-color: #FBFBFB; ">
        <h2 class="mb-0 h1">{{ path }}</h2>
        <ul class="d-flex justify-content-center ps-0   mb-0 text-primary my-md-0 my-3 ">
            <li class="px-2">Home</li>
            <li class="px-2">></li>
            <li class="px-2">{{ path }}</li>
            <template v-if="id">
                <li class="px-2">></li>
                <li class="px-2">{{ id }}</li>
            </template>
        </ul>
    </div>
</template>


<script>
export default {
    data() {
        return {
            path: '',
            id: ''
        }
    },
    mounted() {
        this.path = this.$route.name;
        const { id } = this.$route.params
        this.id = id
    }
}

</script>