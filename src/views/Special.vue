<template>
    <div class="spacial-home">
         <NavView/>
        <div :class="{'spacial-header':woman}">
            <HeadSearch :woman="woman"/>
            <classifiedView :woman="woman"/>
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
    },
    data() {
        return {
            woman: false
        }
    },
   created(){
       this.$route.name==='woman'?this.woman=true:this.woman=false;
   }
};
</script>
<style lang="less" scoped>
.spacial-header{
    background: url('../assets/image/special/woman/header_bg.png') no-repeat center;
}
</style>

