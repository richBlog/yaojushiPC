<template>

    <div class="shopping-cart-box">
        <CarHeaderView :state="state" />
        <OrderMainView/>
        <FooterView/>
    </div>

</template>

<script>
import CarHeaderView from "components/shoppingCart/ShoppingCartHeader";
import OrderMainView from "components/order/OrderMain";
import FooterView from 'components/public/Footer'

export default {
    components: {
        CarHeaderView,
        OrderMainView,
        FooterView
    },
    data() {
        return {
            state: 1,
        };
    },

    methods: {
        name() {}
    }
};
</script>

<style lang="less" scoped>

</style>