<template>
    <div class="spacial-home">
        <NavView/>
        <div :class="{'spacial-header':state==1,'skin-header':state==3}">
            <HeadSearch :state="state" />
            <classifiedView :state="state" />
        </div>

        <router-view></router-view>

        <footerView :state="state" />
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
        footerView
    },
    data() {
        return {
            state: 0
        };
    },
    created() {
        let name = this.$route.name;
        switch (name) {
            case "woman":
                this.state = 1;
                break;
            case "ostalgia":
                this.state = 2;
                break;
            case "skin":
                this.state = 3;
                break;
            case "apparatus":
                this.state = 4;
                break;
        }
    }
};
</script>
<style lang="less" scoped>
.spacial-header {
    background: url("../assets/image/special/woman/header_bg.png") no-repeat
        center;
}

.skin-header {
    margin: 0 auto;
    width: 1920px;
    background-color: #5ec1d2;
}
</style>

