<template>
    <div class="woman">
        <!-- banner开始 -->
        <div class="woman-banner">
            <img src="~assets/image/special/woman/banner_01.png" alt="女性分类">
            <img src="~assets/image/special/woman/banner_02.png" alt="女性分类">
            <img src="~assets/image/special/woman/banner_03.png" alt="女性分类">
        </div>
        <!-- banner结束 -->
        <!-- 新品推荐开始 -->
        <div class="groom-main container">
            <div class="groom-title">新品推荐</div>
            <div class="groom-box">
                <div class="product-box">
                    <ul>
                        <li v-for="(item,index) in groomList" :key="index">
                            <p>{{item.price}}</p>
                            <div><img :src="item.img" alt="产品推荐"></div>
                            <p>{{item.name}}</p>
                            <p>{{item.depict}}</p>
                            <div><router-link :to="'/Product/'+item.url">查看详情</router-link></div>
                        </li>
                        
                    </ul>
                </div>
                <a class="btn btn-left"></a>
                <a class="btn btn-right"></a>
            </div>
        </div>
        <!-- 新品推荐结束 -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            state: 0,
            groomList: []
        };
    },
    created() {
        this.$ajax({
            url: "../../static/woman.json",
            method: "GET"
        })
            .then(data => {
                console.log(data);
                this.groomList = data.data.groom;
            })
            .catch(err => {
                console.log(err);
            });
    }
};
</script>

<style lang="less" scoped>
@imaUrl: "../../assets/image/special/woman/";

.woman-banner {
    text-align: center;
    font-size: 0;
}
// 新品推荐开始
.groom-main {
    position: relative;
    padding-top: 168px;
}
.groom-title {
    position: absolute;
    top: -66.5px;
    left: 50%;
    transform: translateX(-50%);
    width: 676px;
    height: 133px;
    line-height: 133px;
    color: #ff788f;
    text-align: center;
    font-size: 72px;
    font-weight: bold;
    font-family: "MFYiHei_Noncommercial-Regular";
    border-radius: 30px;
    background-color: #fff;
    box-shadow: 0 0 20px #b9b9b9;
}
.groom-box {
    position: relative;
    .product-box {
        padding: 20px;
        overflow: hidden;
        box-sizing: border-box;
    }
    ul {
        display: flex;
        li {
            width: 360px;
            height: 494px;
            margin-right: 59px;
            border-radius: 30px;
            box-shadow: 0 0 20px #b9b9b9;
        }
    }
    .btn {
        position: absolute;
        top: 50%;
        width: 105px;
        height: 105px;
        transform: translateY(-50%);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    .btn-left {
        left: -148px;
        background-image: url("@{imaUrl}l@3x.png");
    }
    .btn-right {
        right: -148px;
        background-image: url("@{imaUrl}r@3x.png");
    }
}

// 新品推荐结束
</style>