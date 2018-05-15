<template>
    <div class="product-groom">
        <!-- 相关分类开始 -->
        <div class="classify-box">
            <p class="classify-title">相关分类</p>
            <ul class="classify-list">
                <router-link class="classify-item" :to="item.url" tag="li" v-for="item in classifyList" :key="item.id">{{item.name}}</router-link>
            </ul>
        </div>
        <!-- 相关分类结束 -->

        <!-- 相关推荐开始 -->
        <div class="groom-box">
            <p class="groom-title">买过该商品的人还看过</p>
            <ul class="groom-list">
                <router-link class="groom-item" :to="item.url" tag="li" v-for="item in groomList" :key="item.id">
                    <div class="groom-item-img"><img v-lazy="item.img" alt="img"></div>
                    <p class="groom-item-name">{{item.name}}</p>
                    <p class="groom-item-price">￥{{item.price}}</p>
                </router-link>
            </ul>
        </div>
        <!-- 相关推荐开始 -->

        <!-- 浏览记录开始 -->
        <div class="browse-box">
            <p class="browse-title">你最近浏览的历史</p>
            <ul class="browse-list">
                <router-link class="browse-item" :to="item.url" tag="li" v-for="item in groomList" :key="item.id">
                    <div class="browse-item-img"><img v-lazy="item.img" alt="img"></div>
                    <p class="browse-item-name">{{item.name}}</p>
                    <p class="browse-item-price">￥{{item.price}}</p>
                </router-link>
            </ul>
        </div>
        <!-- 浏览记录结束 -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            classifyList: [],
            groomList: []
        };
    },
    created() {
        this.$ajax({
            url:
                "https://easy-mock.com/mock/5af8e2bb0d7ff97d1fdc9341/productGroom",
            methods: "get"
        })
            .then(response => {
                if (response.status == 200) {
                    const data = response.data.data;
                    this.classifyList = data.classifyList;
                    this.groomList = data.groomList;
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
};
</script>
<style lang="less" scoped>
.product-groom {
    width: 200px;
    margin-right: 6px;
    .classify-box {
        border: 1px solid #ddd;
        .classify-title {
            padding: 14px 0;
            padding-left: 16px;
            font-size: 12px;
            color: #555;
            border-bottom: 1px solid #ddd;
        }
        .classify-list {
            display: flex;
            flex-wrap: wrap;
            padding-top: 10px;
        }
        .classify-item {
            width: 33.33%;
            padding-bottom: 10px;
            text-align: center;
            font-size: 12px;
            cursor: pointer;
            &:hover {
                color: #0788f7;
            }
        }
    }
    .groom-box {
        margin: 10px 0;
        border: 1px solid #ddd;
        .groom-title {
            &:extend(.product-groom .classify-box .classify-title);
            font-size: 14px;
        }
        .groom-item {
            text-align: center;
            cursor: pointer;
            border-bottom: 1px solid #ddd;
            &:last-child {
                border: none;
            }
        }
        .groom-item-price {
            color: #ff0000;
        }
    }
    .browse-box {
        border: 1px solid #ddd;
        .browse-title {
            &:extend(.product-groom .groom-box .groom-title);
        }
        .browse-item {
            &:extend(.product-groom .groom-box .groom-item);
            &:last-child {
                border: none;
            }
        }
        .browse-price {
            color: #ff0000;
        }
    }
}
</style>
