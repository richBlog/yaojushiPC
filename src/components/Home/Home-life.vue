<template>
    <aside class="layout-life" v-show="isShow">
        <ul class="life-container">
            <li :class="'life-item '+item.tId" v-for="item in menu" :key="item.id">
                <a :href="'#'+item.tId" v-text="item.name"></a>
            </li>
            <li class="life-item" @click="upTop()">
                <span>顶部</span>
                <i class="el-icon-caret-top"></i>
            </li>
        </ul>
    </aside>
</template>
<script>
import cm from "apis/common";
export default {
    computed:{
        isShow(){
            return this.$store.getters.getShow;
        }
    },
    data() {
        return {
            menu: [
                {
                    tId: "t1",
                    name: "热门类目"
                },
                {
                    tId: "t2",
                    name: "家庭常备"
                },
                {
                    tId: "t3",
                    name: "母婴乐园"
                },
                {
                    tId: "t4",
                    name: "男科医药"
                },
                {
                    tId: "t5",
                    name: "滋补保健"
                },
                {
                    tId: "t6",
                    name: "医疗器械"
                }
            ]
        };
    },
    methods: {
        // 回到顶部
        upTop() {
            cm.top(); // 调用公共回到顶部函数
        }
    }
};
</script>
<style lang="less">
.layout-life {
    position: fixed;
    top: 50%;
    left: 50%;
    margin-left: -670px;
    margin-top: -143px;
    .life-container {
        width: 34px;
        background-color: #918888;
        text-align: center;
        .life-item {
            padding: 5px;
            border-bottom: 1px solid #fff;
            &:last-child {
                border: 0;
            }
            &:hover {
                background-color: #1a82ee;
            }
            &.active {
                background-color: #1a82ee;
            }
        }
        a,
        span {
            font-size: 12px;
            color: #fff;
            cursor: pointer;
        }
        i {
            color: #fff;
        }
    }
}
</style>
