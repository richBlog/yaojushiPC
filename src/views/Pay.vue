<template>

    <div class="shopping-cart-box">
        <CarHeaderView :state="state" />
        <PayMainView/>
        <FooterView/>
    </div>

</template>

<script>
import CarHeaderView from "components/shoppingCart/ShoppingCartHeader";
import PayMainView from "components/shoppingCart/PayMain";
import FooterView from 'components/public/Footer'

export default {
    components: {
        CarHeaderView,
        PayMainView,
        FooterView
    },
    data() {
        return {
            state: 2,
        };
    }
};
</script>
