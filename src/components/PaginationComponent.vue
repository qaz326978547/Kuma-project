<template>
    <nav aria-label="Page navigation example" v-if="pagination.total_pages >= 2">
        <ul class="pagination">
            <li class="page-item" :class="{ disabled: !pagination.has_pre }">
                <a class="page-link" href="#" @click.prevent="changePage(pagination.current_page - 1)">Previous</a>
            </li>
            <li class="page-item" v-for="page in pagination.total_pages"
                :class="{ active: page === pagination.current_page }">
                <a class="page-link "
                    :class="{ 'text-white': page === pagination.current_page, 'bg-secondary': page === pagination.current_page }"
                    href="#" @click.prevent="changePage(page)" :key="page + 'page'">{{
                        page
                    }}</a>
            </li>
            <li class="page-item" :class="{ disabled: !pagination.has_next }">
                <a class="page-link" @click.prevent="changePage(pagination.current_page + 1)" href="#">Next</a>
            </li>
        </ul>
    </nav>


</template>

<script>
export default {
    props: {
        pagination: {
            type: Object,
            default() {
                return {};
            }
        },
        changePage: {
            type: Function,
            default() {
                return Function
            }

        },


    },

}
</script>