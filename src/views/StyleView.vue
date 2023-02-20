<template>

  <nav-component></nav-component>
  <!-- 風格類別導覽列 -->
  <ul class="px-0 d-flex justify-content-center mb-5">
    <li class="nav-item px-2" v-for="category in  categorys" :key="category.id">
      <a class="nav-link pb-2 category" href="#" :class="{ active: currentCategoryId === category.id }"
        @click.prevent="changeCategory(category.name, category.id)">{{ category.name }}</a>
    </li>
  </ul>
  <!-- 菜單內容 -->
  <section class="container ">
    <!-- 產品清單 -->
    <div class="row  gy-3 gx-3">
      <template v-for="item in filterDataList">
        <category-product :dataList="item"></category-product>
      </template>
    </div>


    <pagination-component :pagination="pagination" :change-page="changePage"
      class="d-flex justify-content-center mt-5"></pagination-component>
  </section>


</template>


<script>
import dataList from '../dataList.json'
import CategoryProduct from '../components/CategoryProduct.vue'
import NavComponent from '../components/NavComponent.vue'
import PaginationComponent from '../components/PaginationComponent.vue'
export default {
  data() {
    return {
      dataList: {},
      filterDataList: [],
      categorys: [],
      currentCategory: "",
      currentCategoryId: 0, //active使用
      pagination: {
        current_page: 1,
        total_pages: 2,
        has_next: true,
        has_pre: false
      }
    }
  },
  components: {
    NavComponent,
    CategoryProduct,
    PaginationComponent
  },
  methods: {
    getDataCategorys() {
      this.categorys = dataList.categoryList
    },
    // 切換菜單類別
    changeCategory(category = 'all', id = 0) {
      this.currentCategory = category
      this.currentCategoryId = id
      this.getfilterDataList()

    },
    getfilterDataList() {
      // this.filterDataList = []
      // 取得目前選取的 '類別代號'
      const pageItem = 6; //一頁有6筆
      const pageIndexStart = (this.pagination.current_page - 1) * pageItem
      const pageIndexEnd = this.pagination.current_page * pageItem

      if (this.currentCategory == 'all') {
        this.filterDataList = []
        const limitDataNum = []
        //頁數 商品小於六筆 顯示剩餘數量
        for (var i = pageIndexStart; i < pageIndexEnd; i++) {
          if (i >= dataList.data.length) { break; }
          limitDataNum.push(dataList.data[i])
        }
        this.filterDataList = limitDataNum
        this.getPagination()

      } else {
        this.filterDataList = []
        const newDataList = dataList.data.filter((item) => item.category == this.currentCategory)
        this.filterDataList = newDataList
      }
      this.getPagination()

    },
    //總分頁數
    getPagination() {
      if (this.currentCategory == 'all') {
        const total_pages = Math.ceil(dataList.data.length / 6)
        this.pagination.total_pages = total_pages
      } else {
        const total_pages = Math.ceil(this.filterDataList.length / 6)
        this.pagination.total_pages = total_pages
      }
    },
    //更改分頁 
    changePage(page = 1) {
      this.pagination.current_page = page
      if (this.pagination.current_page < this.pagination.total_pages) {
        this.pagination.has_next = true
        this.pagination.has_pre = false
        this.getfilterDataList()

      } else {
        this.pagination.has_next = false
        this.pagination.has_pre = true
        this.getfilterDataList()
      }
      window, scrollTo(0, 0)

    }
  },
  mounted() {
    this.getDataCategorys() //取所有類別
    this.changeCategory() //初始化菜單類別

  }
}

</script>