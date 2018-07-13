<template>
    <div class="spacial-home">
         <NavView/>
        <div class="spacial-header">
            <HeadSearch/>
            <classifiedView/>
        </div>
        
        <router-view></router-view>
    
        <footerView/>
    </div>
</template>

<script>
import NavView from "components/public/NavView";
import HeadSearch from "components/public/HeadSearch";
import classifiedView from "components/public/Classified-nav";
import footerView from "components/public/Footer";

export default {
    components: {
        NavView,
        HeadSearch,
        classifiedView,
        footerView,
        
    }
};
</script>
<style lang="less" scoped>
.spacial-header{
    background: url('../assets/image/special/woman/header_bg@3x.png') no-repeat center;
}
</style>

