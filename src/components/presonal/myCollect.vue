<template>
    <div class="presonal-collect">
        <p class="collect-title">
            <span>我的收藏</span>
        </p>

        <div class="collect-main">
            <div class="collect-box">
                <div class="operation-type">
                    <el-checkbox v-model="checked" @change="allChecked">全选</el-checkbox>
                    <span @click="selectCollect">取消收藏</span>
                    <span @click="selectCart">加入购物车</span>
                </div>
                <el-row class="type-title">
                    <el-col :span="12">商品</el-col>
                    <el-col :span="6">价格</el-col>
                    <el-col :span="6">操作</el-col>
                </el-row>
                <el-row class="concrete-content" v-for="(item,index) in list" :key="index">
                    <el-col :span="12">
                        <div class="order-content">
                            <el-checkbox v-model="item.checked" @change="choice"></el-checkbox>
                            <router-link :to="'/product/'+item.url">
                                <img class="product-img" v-lazy="item.img">
                            </router-link>
                            <div>
                                <img class="recipe-icon" v-lazy="item.miniImg">{{item.name}}
                                <div class="order-time">收藏时间：{{item.time}}</div>
                            </div>

                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="collect-price">会员价：￥{{item.price}}</div>
                        <!-- <div class="collect-activity">会员价：￥{{item.price}}</div> -->
                    </el-col>
                    <el-col :span="6" class="operate">
                        <el-button size="mini" type="primary" @click="addShoppingCart">加入购物车</el-button>
                        <br>
                        <el-button size="mini" type="danger" @click="delCollect">取消收藏</el-button>
                    </el-col>

                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked: false,
            list: []
        };
    },
    created() {
        this.$ajax({
            url: this.$pathUrl.getCollect,
            method: 'get'
        }).then(res=>{
            this.list = res.data.data;
        }).catch(error=>{
            console.log(error);
        })
    },
    methods: {
        // 添加购物车
        addShoppingCart() {
            alert("添加购物车成功");
        },
        // 取消收藏
        delCollect() {
            alert("取消成功");
        },
        // 全选和全部取消
        allChecked(val) {
            if (val) {
                for (let item of this.list) {
                    item["checked"] = true;
                }
            } else {
                for (let item of this.list) {
                    item["checked"] = false;
                }
            }
        },
        // 选中的产品
        select() {
            let group = [];
            for (let item of this.list) {
                if (item["checked"]) {
                    group.push(item);
                }
            }
            return group;
        },
        // 单个产品的选中
        choice(val) {
            let isChoice = false;
            for (let item of this.list) {
                if (!item["checked"]) {
                    isChoice = false;
                    break;
                } else {
                    isChoice = true;
                }
            }
            isChoice ? (this.checked = true) : (this.checked = false);
        },
        // 根据选中来取消关注
        selectCollect() {
            let group = this.select();
            if (group.length > 0) {
                alert(`选中了${group.length}件商品`);
            } else {
                alert("你还没选中要取消的商品");
            }
            console.log(this.select());
        },
        // 根据选中的来加入购物车
        selectCart() {
            let group = this.select();
            if (group.length > 0) {
                alert(`选中了${group.length}件商品`);
            } else {
                alert("你还没选中要加入购物车的商品");
            }
        }
    }
};
</script>

<style lang="less" scoped>
.presonal-collect{
    border: 1px solid #eee;
}



.collect-title {
    padding: 20px;
    border-bottom: 1px solid #eee;
    span {
        padding-left: 20px;
        border-left: 4px solid #ff7e00;
        font-weight: bold;
        color: #333;
        font-size: 16px;
    }
}

.collect-main {
    padding: 20px;
    .collect-box {
        border: 1px solid #eee;
        .operation-type {
            border-bottom: 1px solid #eee;
            padding: 12px 10px;
            .el-checkbox {
                padding: 0 10px;
                border-right: 1px solid #eee;
            }
            span {
                padding: 0 10px;
                border-right: 1px solid #eee;
                cursor: pointer;
                color: #666;
            }
        }
        .type-title {
            display: flex;
            padding: 20px 0;
            text-align: center;
            border-bottom: 2px solid #eee;
            span {
                flex: 1;
            }
        }

        .concrete-content {
            color: #666;
            text-align: center;
        }
        .order-content {
            display: flex;
            align-items: center;
            padding: 20px;
            color: #666;
            font-size: 12px;
            a {
                padding: 10px 20px;
            }
            .product-img {
                width: 76px;
                height: 76px;
                padding: 5px;
                border: 1px solid #efefef;
            }

            .recipe-icon {
                width: 34px;
                height: 16px;
                vertical-align: middle;
                margin-right: 10px;
            }

            .order-time {
                margin-top: 8px;
                padding-left: 5px;
            }
        }

        .collect-price {
            margin-top: 50px;
        }

        .operate {
            button {
                display: block;
                width: 100px;
                margin: 0px auto;
                &:first-child {
                    margin-top: 30px;
                }
            }
        }
    }
}
</style>