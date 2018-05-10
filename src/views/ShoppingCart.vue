<template>

    <div class="shopping-cart-box">
        <CarHeaderView :state="state" />
        <CarMainView/>

    </div>

</template>

<script>
import CarHeaderView from "components/shoppingCart/ShoppingCartHeader";
import CarMainView from "components/shoppingCart/ShoppingCartMain";

export default {
    components: {
        CarHeaderView,
        CarMainView
    },
    data() {
        return {
            state: 0,
            
        };
    },

    methods: {
        name() {}
    }
};
</script>

<style lang="less" scoped>

</style>