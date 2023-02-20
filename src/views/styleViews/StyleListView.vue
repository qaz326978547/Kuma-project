<template>
    <!-- 風格產品內頁 -->
    <nav-component></nav-component>
    <div class="container">
        <div class="row gy-3 ">
            <div class=" col-md-8 ">
                <img :src="portfolio.imageUrl" alt="">
                <div class="row mt-3 g-3">
                    <div class="col-4" v-for="item in portfolioList" :key="item.id">
                        <img :src="item.imageUrl" alt="">
                    </div>
                </div>
            </div>
            <div class="col-md-4  mt-3">
                <h3>{{ portfolio.title }}</h3>
                <hr>
                <p>{{ portfolio.content }}</p>
            </div>
        </div>

        <h4 class="mt-5 mb-4">Related items</h4>
        <div class="row gy-3 ">
            <div class="col-md-3" v-for="item in relatedItem">
                <router-link @click="gotop" class="text-dark" :to="`${item.id}`">
                    <img :src="item.imageUrl" alt="">
                    <p class="text-dark my-2">{{ item.id }}</p>
                    <p>{{ item.title }}</p>
                </router-link>
            </div>
        </div>
    </div>

</template>




<script>

import dataList from '../../dataList.json'
import NavComponent from '../../components/NavComponent.vue'
import FooterComponent from '../../components/FooterComponent.vue'

export default {
    data() {
        return {
            id: '',
            portfolio: [],
            portfolioList: [],
            relatedItem: [],
        }
    },
    components: {
        NavComponent,
        FooterComponent,
    },
    methods: {
        //找到對應id 資料
        getDataList() {
            const { id } = this.$route.params
            this.id = id
            const portfolio = dataList.data.find((item) => item.id === this.id)
            this.portfolio = portfolio
        },
        //內頁 圖片
        getPortfolioList() {
            this.portfolioList = []
            for (let i = 0; i < 4; i++) {
                const portfolio = { id: i, imageUrl: this.portfolio.imageUrl }
                this.portfolioList.push(portfolio)
            }
        },
        //推薦風格 不包含自己
        getRelatedItem() {
            this.relatedItem = []
            const relatedItem = dataList.data.filter(item => item.id !== this.id)
            for (let i = 0; i < 4; i++) {
                this.relatedItem.push(relatedItem[i])
            }
        },
        gotop() {
            window, scrollTo(0, 0)
        }
    },
    watch: {
        $route() {
            this.id = this.$route.params
            this.getDataList()
            this.getPortfolioList()
            this.getRelatedItem()
        }
    },
    mounted() {
        this.getDataList()
        this.getPortfolioList()
        this.getRelatedItem()

    }
}


</script>