<template>
    <nav
        class="d-flex flex-md-column align-items-center justify-content-between  flex-row  nav-container px-6 py-3 px-md-6 py-md-3">
        <div>
            <RouterLink class="nav-link p-3" to="/">
                <img class="logo" src="/images/logo.png" alt="">
            </RouterLink>
        </div>
        <ul
            class="d-md-block d-none  navlink-container d-flex flex-md-column text-center align-items-center  my-md-auto px-0">
            <li class="nav-item">
                <RouterLink class="nav-link p-3" to="/">首頁</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class="nav-link p-3" to="/style">風格</RouterLink>
            </li>
            <li class="nav-item">
                <Router-link class="nav-link p-3" to="/color">色系</Router-link>
            </li>
            <li class="nav-item">
                <Router-link class="nav-link p-3" to="/about">關於我們</Router-link>
            </li>
        </ul>
        <p class="text-center d-md-block d-none  ">BOXING CLUB</p>
        <font-awesome-icon class="nav-bar d-md-none " @click="clickNavBar" icon="fa-solid fa-bars"
            :class="{ 'd-none': navBarisOpen }" />
        <font-awesome-icon class="nav-close d-md-none " @click="closeNavBar" :class="{ 'd-block': navBarisOpen }"
            icon="fa-solid fa-x" />


        <!-- RWD -->
    </nav>
    <ul class="m-0  navlink-container d-flex 
    flex-column text-center align-items-center d-md-none 
    my-md-auto px-0" :class="{ 'navlink-rwd': navBarisOpen }">
        <li class="nav-item">
            <RouterLink @click="closeNavBar" class="nav-link p-3" to="/">首頁</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink @click="closeNavBar" class="nav-link p-3" to="/style">風格</RouterLink>
        </li>
        <li class="nav-item">
            <Router-link @click="closeNavBar" class="nav-link p-3" to="/color">色系</Router-link>
        </li>
        <li class="nav-item">
            <Router-link @click="closeNavBar" class="nav-link p-3" to="/about">關於我們</Router-link>
        </li>
        <li class="nav-item">
            <p class="text-center p-3">BOXING CLUB</p>
        </li>
    </ul>

</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
    data() {
        return {
            navBarisOpen: false
        }
    },
    components: {
    },
    methods: {
        clickNavBar() {
            this.navBarisOpen = true
        },
        closeNavBar() {
            this.navBarisOpen = false
        }
    },
}
</script>