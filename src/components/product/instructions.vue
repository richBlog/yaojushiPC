<template>
  <div class="instructions-box">
      <p><em>【药品名称】</em></p>
      <p>&nbsp;&nbsp;通用名称：{{instructions.GeneralName}}</p>
      <p>&nbsp;&nbsp;商品名称：{{instructions.CommodityName}}</p>
      <p>&nbsp;&nbsp;拼音全码：{{instructions.PinyinFullCode}}</p>
      <p><em>【主要成份】</em>{{instructions.MainComponents}}</p>
      <p><em>【性 状】</em>{{instructions.Character}}</p>
      <p><em>【适应症/功能主治】</em>{{instructions.Indication}}</p>
      <p><em>【规格型号】</em>{{instructions.Specifications}}</p>
      <p><em>【用法用量】</em>{{instructions.Usage}}</p>
      <p><em>【不良反应】</em>{{instructions.AdverseReaction}}</p>
      <p><em>【禁 忌】</em>{{instructions.Taboo}}</p>
      <p><em>【注意事项】</em>{{instructions.MattersNeedingAttention}}</p>
      <p><em>【儿童用药】</em>{{instructions.PediatricDrugs}}</p>
      <p><em>【老年患者用药】</em>{{instructions.SenilePatient}}</p>
      <p><em>【孕妇及哺乳期妇女用药】</em>{{instructions.LactatingWomen}}</p>
      <p><em>【药物相互作用】</em>{{instructions.DrugInteraction}}</p>
      <p><em>【药物过量】</em>{{instructions.DrugOverdose}}</p>
      <p><em>【药理毒理】</em>{{instructions.PharmacologyToxicology}}</p>
      <p><em>【药代动力学】</em>{{instructions.Pharmacokinetics}}</p>
      <p><em>【贮 藏】</em>{{instructions.Storage}}</p>
      <p><em>【包 装】</em>{{instructions.Packing}}</p>
      <p><em>【有 效 期】</em>{{instructions.TermValidity}}</p>
      <p><em>【执行标准】</em>{{instructions.StandardExecution}}</p>
      <p><em>【批准文号】</em>{{instructions.ApprovalNumber}}</p>
      <p><em>【生产企业】</em>{{instructions.ManufacturingEnterprise}}</p>
      <div>
          <img :src="item" alt="img" v-for="item in instructions.imgList" :key="item.id">
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      instructions: {
        GeneralName: "阿达帕林凝胶",
        CommodityName: "阿达帕林凝胶(达芙文)",
        PinyinFullCode: "ADaPaLinNingJiao(DaFuWen)",
        MainComponents:
          "化学名：阿达帕林，6-[3-(1-金刚烷基)-4-甲氧基苯基]-2-萘甲酸。分子式：C28H2803分子量：412.53",
        Character: "达芙文为白色半透明凝胶。",
        Indication:
          "达芙文适用于以粉刺、丘疹和脓疱为主要表现的寻常型痤疮的皮肤治疗。亦可用于治疗面部、胸和背部的痤疮。",
        Specifications: "0.1%*30g(达芙文)",
        Usage:'1.睡前清洗痤疮患处，待干燥后涂一薄层达芙文，注意避免接触眼、嘴唇。 2.对于必须减少用药次数或暂停用药的患者，当证实患者已恢复对阿达帕林的耐受时可恢复用药次数。 3.请勿使用可导致粉刺产生和有效收缩性的化妆品。 4.对新生儿和婴幼儿的安全性及疗效未知。',
        AdverseReaction:'可能出现的主要不良反应为皮肤刺激性，减少用药次数或停药后可恢复。',
        Taboo:'对达芙文成份过敏者禁用。',
        MattersNeedingAttention:' 如果产生过敏或严重的刺激反应，应停止用药。确定局部刺激反应程度后，患者可在指导下减少用药次数，暂时停止用药或完全停止用药。严禁将达芙文涂抹于眼、口腔、鼻粘膜及其它粘膜组织，若不慎将达芙文涂于眼部，应立即用温水洗净。达芙文不得用于皮肤破损处（割伤、摩擦伤），亦不得用于十分严重的痤疮患者，或患有湿疹的皮肤创面。 请仔细阅读说明书并遵医嘱使用。',
        PediatricDrugs:'达芙文未进行该项实验且无可靠参考文献。',
        SenilePatient:' 达芙文未进行该项实验且无可靠参考文献。',
        LactatingWomen:'1.目前尚无有关达芙文对孕妇的疗效报告，建议在妊娠时不要使用达芙文。 2.目前尚不知达芙文是否随乳汁分泌。因许多药物随乳汁分泌，建议哺乳期妇女若必须使用达芙文时多加小心，并请勿涂抹于胸部。',
        DrugInteraction:'1.目前尚未发现达芙文与其它可能同时在皮肤使用的药品存在相互作用。但不应同时使用其它有相似作用机制的维甲酸类药物或其它药物。 2.阿达帕林的化学结构稳定，在空气和阳光下不易分解。广泛的动物和人体研究未发现光毒性和光敏性。但反复暴露于日光或紫外线照射时动物和人使用阿达帕林的安全性尚未可知。使用达芙文时应避免过量日晒和紫外线照射。 3.阿达帕林的透皮吸收很低，因而不可能发生与系统用药的相互作用。没有证据表明避孕药、抗生素等口服药的疗效会受到皮肤使用达芙文的影响。 4.达芙文可能有轻微的局部刺激作用，当与脱皮剂、收缩剂或刺激性物质同时使用时可导致额外的刺激反应。因此，清晨使用其它皮肤用抗痤疮药如红霉素（浓度&le;4%）、磷酸氯林可霉素（1%）溶液或过氧化苯甲酰水性凝胶（浓度&le;10%），晚上使用达芙文凝胶时，可避免药物相互降解或蓄积刺激作用的产生。',
        DrugOverdose:' 1.达芙文仅供外用。若使用过量，可能产生明显的发红、脱皮或不适。 2.对小鼠产生急性毒性的口服剂量大于10g/kg。除非误服剂量很小，否则仍需考虑洗胃。',
        PharmacologyToxicology:'1.阿达帕林是一种维甲酸类化合物，在体内与体外炎症模型中被证明具有抗炎特性。阿达帕林的化学结构稳定，在空气和光照下不易分解。作用机理方面，阿达帕林同维甲酸一样与特异的维甲酸核受体结合，与维甲酸不同的是阿达帕林不与和蛋白结合的细胞质受体结合。 2.在用小鼠建立的动物模型进行的皮肤用药试验中证明，阿达帕林可治疗粉刺，并对作为寻常痤疮病因的表皮异常角化和分化过程也有作用。阿达帕林的作用机制被认为是通过使毛囊上皮细胞正常分化而减少粉刺形成。 3.在体内与体外的标准抗炎分析中，阿达帕林优于维甲酸。它可抑制人类多核白细胞的化学趋势反应，并可通过抑制花生四烯酸经脂氧化反应转化为炎症介质媒介物来抑制多形核白细胞的代谢。这说明阿达帕林用于痤疮患处，可缓解由细胞反应介导的炎症反应。人体临床试验研究表明阿达帕林可缓解痤疮的炎性反应（如脓疱核丘疹等）。',
        Pharmacokinetics:'阿达帕林的透皮吸收率很低；临床试验中，对大面积粉刺患处的皮肤长期用药，分析敏感率为0.15ng/ml时，血浆中阿达帕林浓度水平低至无法测出。分别给大鼠（静注、腹腔注射、口服和皮肤用药），兔子（静注、口服和皮肤用药）、狗（静注和口服）使用14C标记的阿达帕林，在许多组织有放射活性分布，肝、脾、肾上腺和卵巢水平最高。阿达帕林在动物体内主要是通过氧-脱甲基、羟基化和结合反应而代谢，主要通过胆汁排泄。',
        Storage:' 1.不超过25℃',
        Packing:'达芙文置于白色低密度聚丙烯管中，带有白色螺旋盖，内装30克凝胶。',
        TermValidity:'36 月',
        StandardExecution:'进口药品注册标准JX20010313',
        ApprovalNumber:'H20160022',
        ManufacturingEnterprise:'Laboratoires GALDERMA(法国)',
        imgList:[
            require('../../assets/image/cpmax1.jpg'),
            require('../../assets/image/cpmax2.jpg'),
            require('../../assets/image/cpmax3.jpg'),
        ]
      }
    };
  }
};
</script>
<style lang="less" scoped>
.instructions-box{
    padding: 20px;
    p{
        line-height: 26px;
        color: #444;
    }
    em{
       font-weight: bold; 
       font-style: normal;
    }
    div{
        text-align: center;
        img{
            width: 100%;
        }
    }
}
</style>
