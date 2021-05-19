<template>
    <div class="page-search">
        <div class="column is-multiline">
            <div class="column is-12">
                <h1 class="title">
                    Search
                </h1>
                <h2 class="is-size-5 has-text-grey">
                    Search term: "{{query}}"
                </h2>
            </div>

            <ProductBox 
                v-for="product in products"
                :key="product.id"
                :product="product"/>
        </div>
    </div>
</template>

<script>
import ProductBox from '@/components/ProductBox.vue'


export default {
    name: "Search",
    components: {
        ProductBox,
    }
}
</script>

