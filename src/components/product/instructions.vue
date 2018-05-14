<template>
    <div class="instructions-box">
        <p>
            <em>【药品名称】</em>
        </p>
        <p>&nbsp;&nbsp;通用名称：{{instructions.GeneralName}}</p>
        <p>&nbsp;&nbsp;商品名称：{{instructions.CommodityName}}</p>
        <p>&nbsp;&nbsp;拼音全码：{{instructions.PinyinFullCode}}</p>
        <p>
            <em>【主要成份】</em>{{instructions.MainComponents}}</p>
        <p>
            <em>【性 状】</em>{{instructions.Character}}</p>
        <p>
            <em>【适应症/功能主治】</em>{{instructions.Indication}}</p>
        <p>
            <em>【规格型号】</em>{{instructions.Specifications}}</p>
        <p>
            <em>【用法用量】</em>{{instructions.Usage}}</p>
        <p>
            <em>【不良反应】</em>{{instructions.AdverseReaction}}</p>
        <p>
            <em>【禁 忌】</em>{{instructions.Taboo}}</p>
        <p>
            <em>【注意事项】</em>{{instructions.MattersNeedingAttention}}</p>
        <p>
            <em>【儿童用药】</em>{{instructions.PediatricDrugs}}</p>
        <p>
            <em>【老年患者用药】</em>{{instructions.SenilePatient}}</p>
        <p>
            <em>【孕妇及哺乳期妇女用药】</em>{{instructions.LactatingWomen}}</p>
        <p>
            <em>【药物相互作用】</em>{{instructions.DrugInteraction}}</p>
        <p>
            <em>【药物过量】</em>{{instructions.DrugOverdose}}</p>
        <p>
            <em>【药理毒理】</em>{{instructions.PharmacologyToxicology}}</p>
        <p>
            <em>【药代动力学】</em>{{instructions.Pharmacokinetics}}</p>
        <p>
            <em>【贮 藏】</em>{{instructions.Storage}}</p>
        <p>
            <em>【包 装】</em>{{instructions.Packing}}</p>
        <p>
            <em>【有 效 期】</em>{{instructions.TermValidity}}</p>
        <p>
            <em>【执行标准】</em>{{instructions.StandardExecution}}</p>
        <p>
            <em>【批准文号】</em>{{instructions.ApprovalNumber}}</p>
        <p>
            <em>【生产企业】</em>{{instructions.ManufacturingEnterprise}}</p>
        <div>
            <img :src="item" alt="img" v-for="item in instructions.imgList" :key="item.id">
        </div>
    </div>
</template>
<script>
export default {
    props:["instructions"]
};
</script>
<style lang="less" scoped>
.instructions-box {
    padding: 20px;
    p {
        line-height: 26px;
        color: #444;
    }
    em {
        font-weight: bold;
        font-style: normal;
    }
    div {
        text-align: center;
        img {
            width: 100%;
        }
    }
}
</style>
