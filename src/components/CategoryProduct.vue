<template>
    <!-- 風格產品列表 -->
    <vue-easy-lightbox :visible="visible" :imgs="dataList.imageUrl" :index="index"
        @hide="handleHide"></vue-easy-lightbox>
    <div class="  col-12 col-sm-6 col-md-4 col-xl-3 ">
        <div class="img-container">
            <img class="image" :src="dataList.imageUrl" style="width:100%" alt="">
            <div class="overlay"></div>
            <div class="link d-flex ">
                <router-link class="text-white" :to="`portfolio/${dataList.id}`">
                    <font-awesome-icon class="icon p-3 mx-2" icon="fa-solid fa-link" />
                </router-link>
                <font-awesome-icon @click="showSingle" class="icon p-3 mx-2" icon="fa-solid fa-magnifying-glass-plus" />
            </div>
        </div>

        <router-link class="text-dark" :to="`portfolio/${dataList.id}`">
            <p class=" text-dark my-1  fw-bold">{{ dataList.id }}</p>
            <h3 class="">
                {{ dataList.title }}
            </h3>
            <p class="ellipsis">{{ dataList.content }}</p>
        </router-link>
    </div>


</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox'

export default {
    props: {
        dataList: {
            type: Object,
            default() {
                return {};
            }
        },
    },
    data() {
        return {
            imgs: '',  // Img Url , string or Array
            visible: false,
            index: 0,   // default
            mouseEvent: false
        }
    },
    components: {
        VueEasyLightbox
    },
    methods: {
        showSingle() {
            this.imgs = 'http://via.placeholder.com/350x150'
            this.show()
        },
        show() {
            this.visible = true
        },
        handleHide() {
            this.visible = false
        }
    }

}



</script>