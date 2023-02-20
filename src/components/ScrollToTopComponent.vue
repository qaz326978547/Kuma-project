<template>
    <div>
        <font-awesome-icon :class="{ 'd-none': scroll }" class="goTop-icon" @click="scrollTop"
            icon="fa-solid fa-circle-up" />
    </div>
</template>


<script>
export default {
    data() {
        return {
            scroll: true,
        }
    },
    methods: {
        scrollTop() {
            window, scrollTo(0, 0)
        },
        handleScroll() {
            //或者使用document.querySelector('.class或者#id').scrollTop
            this.scroll = document.documentElement.scrollTop > 200 ? false : true
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    }
}


</script>