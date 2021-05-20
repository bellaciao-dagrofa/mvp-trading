<template>
    <tr>
        <td>
            <router-link :to="initialItem.product.get_absolute_url">
                {{initialItem.product.name}}
            </router-link>
            
        </td>
        <td>
            ${{item.product.price}}
        </td>
        <td>
            {{item.quantity}}
        </td>
        <td>
            ${{getItemTotal(item).toFIxed(2)}}
        </td>
        <td>
            <button class="delete">
            </button>
        </td>
    </tr>
</template>
<script>

export default {

    name: "CartItem",
    props:{
        initialItem: Object
    },
    methods:{
        getItemTotal(item){
            return item.quantity * item.product.price
        }
    }
    
}
</script>
