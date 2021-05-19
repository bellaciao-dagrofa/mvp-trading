<template>
    <div class="page-category">
        <div class="columns is-multiline">
            <div class="column is-12">
                <h2 class="is-size-2 has-text-centered">
                    {{category.name}}
                </h2>
            </div>
            <ProductBox 
                v-for="product in category.products"
                :key="product.id"
                :product="product"/>

        </div>
    </div>  
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex'
import {toast} from 'bulma-toast'
import ProductBox from '../components/ProductBox.vue'

export default {
    name: "Category",
    components:{
        ProductBox
    },
    watch:{
        $route(to, from){
            if(to.name === "Category"){
                // console.log(to.params)
                const {category_slug} = to.params
                this.getCategory({category_slug})
            }
        }
    },
    computed:{
        ...mapState('category', [
            'category',
            'error'
        ]),
        ...mapState('loading', [
            "isLoading"
        ]),
        ...mapGetters('category', [
            'getError'
        ])
    },
    methods:{
        ...mapActions('category', [
            "getCategory"
        ])
    },
    async mounted(){
        const category_slug = this.$route.params.category_slug
        // console.log(category_slug)
        await this.getCategory({category_slug})
        const error = this.getError
        console.log("ERROR", error)
        if(error){
            toast({
                message: error,
                type: 'is-danger',
                dismissible: true,
                pauseOnHover: true,
                duration: 2000,
                position: 'bottom-right'
            })
        }
        else{
            const default_string = " | Sutrix-ecommerce"
            const title_string = category_slug.concat(default_string)
            document.title = title_string
        }
    }
}
</script>
