<!-- 風格產品內頁 -->
<template>
    <nav-component></nav-component>



    <vue-easy-lightbox :visible="visible" :imgs="allPortfolio" :index="index" @hide="handleHide"></vue-easy-lightbox>
    <div class="container">
        <div class="row gy-3 ">
            <div class=" col-md-8 ">
                <img @click="showMultiple" :src="portfolio.imageUrl" alt="" class="main-img">
                <div class="row mt-3 g-3">
                    <div class="col-4" v-for="item in portfolioList" :key="item.id">
                        <img :src="item.imageUrl" alt="">
                    </div>
                </div>
            </div>
            <div class="col-md-4  mt-3">
                <div class="my-3 mt-md-0 d-flex justify-content-between">
                    <router-link :to="`${newId}`">
                        <font-awesome-icon @click="changeLink(false)" class="changeIcon " icon="fa-solid fa-arrow-left" />
                    </router-link>
                    <router-link :to="`${newId}`">
                        <font-awesome-icon @click="changeLink(true)" class="changeIcon" icon="fa-solid fa-arrow-right" />
                    </router-link>
                </div>
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
import VueEasyLightbox from 'vue-easy-lightbox'

export default {
    data() {
        return {
            id: '', //當前路由id
            allPortfolio: [], //Lightbox
            portfolio: [], //對應id 資料 
            portfolioList: [],//內容圖片
            relatedItem: [],//推薦風格
            newId: "", //箭頭 切換頁面
            //Lightbox
            imgs: '',
            visible: false,
            index: 0,
        }
    },
    components: {
        NavComponent,
        FooterComponent,
        VueEasyLightbox
    },
    methods: {
        //找到對應id 資料 
        getDataList() {
            this.allPortfolio = []
            const { id } = this.$route.params
            this.id = id
            const portfolio = dataList.data.find((item) => item.id === this.id)
            this.portfolio = portfolio
            this.allPortfolio.push(portfolio.imageUrl) //lightbox
        },
        //內頁 內容圖片
        getPortfolioList() {
            this.portfolioList = []
            for (let i = 0; i < 4; i++) {
                const portfolio = { id: i, imageUrl: this.portfolio.imageUrl }
                this.portfolioList.push(portfolio)
                this.allPortfolio.push(portfolio.imageUrl) //lightbox
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
        //lightbox
        getAllPortfolio() {
            this.allPortfolio = Object.values(this.allPortfolio)
        },
        showMultiple() {
            this.index = 1  // index of imgList
            this.show()
        },
        show() {
            this.visible = true
        },
        handleHide() {
            this.visible = false
        },
        changeLink(isNext) {

            //找出所有風格id
            //過濾與當前路由id相符index
            //點擊右箭頭 index+1 左箭頭反之
            const allIndex = []
            dataList.data.map(item => {
                allIndex.push(item.id)
            })
            const currentIndex = allIndex.indexOf(this.id)
            if (isNext) {
                const next = dataList.data[currentIndex + 1].id
                this.newId = next
            } else {
                const last = dataList.data[currentIndex - 1].id
                this.newId = last
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
        this.getDataList()//過濾對應風格資料
        this.getPortfolioList()//所有內容圖片
        this.getRelatedItem() //推薦風格
        this.getAllPortfolio()//lightbox

    }
}


</script>