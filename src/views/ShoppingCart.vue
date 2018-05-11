<template>

    <div class="shopping-cart-box">
        <CarHeaderView :state="state" />
        <CarMainView/>
        <FooterView/>
    </div>

</template>

<script>
import CarHeaderView from "components/shoppingCart/ShoppingCartHeader";
import CarMainView from "components/shoppingCart/ShoppingCartMain";
import FooterView from 'components/public/Footer'

export default {
    components: {
        CarHeaderView,
        CarMainView,
        FooterView
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