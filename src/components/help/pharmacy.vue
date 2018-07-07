<template>
    <div class="pharmacy">
        <p class="layout-title">药居士健康药房实体店</p>
        <ul>
            <li class="layout-image" v-for="(item,index) in imgList" :key="index"><img :src="item" alt="实体店"></li>
        </ul>
        <ul>
            <li class="layout-address" v-for="(item,index) in typeList" :key="index">
                <p>
                    药居士健康药房
                    <span>{{item.name}}</span>
                    分店
                </p>
                <p>地址：{{item.address}}</p>
                <p>电话：{{item.tel}}</p>
                <p>营业时间：9:00~21:00</p>
                <p>
                    <span @click="newMap(item)">查看地图</span>
                </p>
            </li>
        </ul>

        <div class="layout-map" v-show="state">
            <div class="map-main">
                <div id="container" ref="allmap"></div>
                <div @click="close" class="close"><img src="~assets/image/help/close.png" alt="close"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            state: false,
            imgList: [
                require("../../assets/image/help/pharmacy_p_01.png"),
                require("../../assets/image/help/pharmacy_p_02.png"),
                require("../../assets/image/help/pharmacy_p_03.png"),
                require("../../assets/image/help/pharmacy_p_04.png"),
                require("../../assets/image/help/pharmacy_p_05.png"),
                require("../../assets/image/help/pharmacy_p_06.png"),
                require("../../assets/image/help/pharmacy_p_07.png"),
                require("../../assets/image/help/pharmacy_p_08.png")
            ],
            typeList: [
                {
                    name: "花样城",
                    address:
                        "武汉市东西湖区金银湖环湖路西、张柏公路东C栋1层10室",
                    tel: "027-83217781",
                    mapx: 114.174497,
                    mapy: 30.670376
                },
                {
                    name: "塔西路",
                    address:
                        "武汉市东西湖区径河农场永丰大队控制微电机生产项目（研发楼）第2幢一层1、2号门面",
                    tel: "027-83215071",
                    mapx: 114.163295,
                    mapy: 30.683457
                },
                {
                    name: "环湖中路",
                    address: "武汉市东西湖区金银湖办事处环湖中路6号6号门面",
                    tel: "027-83216266",
                    mapx: 114.177685,
                    mapy: 30.681043
                },
                {
                    name: "中部慧谷",
                    address:
                        "武汉市东西湖区环湖路以北、南京二十一世纪以西中部慧谷一期B区3号楼/单元1层商11号",
                    tel: "027-83217277",
                    mapx: 114.210376,
                    mapy: 30.678914
                },
                {
                    name: "金银湖",
                    address: "武汉市东西湖区环湖路中部慧谷15区1层3号商铺",
                    tel: "027--83219909",
                    mapx: 114.210574,
                    mapy: 30.681453
                }
            ]
        };
    },
    methods: {
        newMap(item) {
            this.state = true;
            let map = new BMap.Map(this.$refs.allmap); // 创建Map实例
            let point = new BMap.Point(item.mapx, item.mapy);
            let opts = {
                title: `药居士健康药房${item.name}店` // 信息窗口标题
            };
            let infoWindow = new BMap.InfoWindow(`地址：${item.address}`, opts); // 创建信息窗口对象
            map.centerAndZoom(point, 18);
            map.openInfoWindow(infoWindow, map.getCenter()); // 打开信息窗口
            map.enableScrollWheelZoom(true);
            window.setTimeout(function() {
                map.panTo(point);
            }, 100);
        },
        close() {
            this.state = false;
        }
    }
};
</script>

<style lang="less" scoped>
.layout-title {
    height: 58px;
    line-height: 58px;
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    background-color: #2b8ef3;
}

ul {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    .layout-image {
        width: 32.7%;
        margin-right: 9px;
        margin-bottom: 5px;

        &:nth-child(5),
        &:nth-child(8) {
            margin-right: 0;
        }
        &:nth-child(1) {
            width: 585px;
        }
        &:nth-child(2) {
            width: 40%;
            margin-right: 0;
        }
        img {
            width: 100%;
        }
    }

    .layout-address {
        position: relative;
        width: 49.5%;
        margin-right: 1%;
        margin-bottom: 10px;
        padding: 25px;
        background-color: #f7f7f7;
        &:nth-child(2n) {
            margin-right: 0;
        }
        p {
            line-height: 22px;
            margin-bottom: 4px;
            font-size: 14px;
            font-family: MicrosoftYaHei, MicrosoftYaHei-Bold;
            color: #3c3c3c;
            &:nth-child(1) {
                font-size: 24px;
                color: #2d8ef3;

                span {
                    font-weight: bold;
                }
            }
            &:last-child {
                position: absolute;
                right: 30px;
                bottom: 10px;
                span {
                    padding-left: 20px;
                    background: url("../../assets/image/help/map_p.png")
                        no-repeat center left;
                    cursor: pointer;
                    &:hover {
                        color: #ff0000;
                        text-decoration: underline;
                    }
                }
            }
        }
    }
}

.layout-map {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 10000;
    .map-main {
        position: absolute;
        width: 900px;
        height: 500px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        #container {
            width: 100%;
            height: 100%;
            text-align: center;
        }
        .close {
            position: absolute;
            top: 0;
            right: 0;
            cursor: pointer;
        }
    }
}
</style>