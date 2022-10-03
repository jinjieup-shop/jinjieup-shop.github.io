var list_name = [
  "初二下生物地理会考资料",
  "政治历史汇总资料合集",
  "初三下政治会考必备资料",
  "初三下历史会考必备资料",
  "7、8年级生物书（电子版）",
  "7、8年级地理书（电子版）",
  "7、8、9年级历史书（电子版）",
  "7、8、9年级政治书（电子版）",
  "五年级黄冈360°口算题卡（上下册）",
  "六年级黄冈360°口算题卡（上下册）",
  "初中单科教材（电子版）",
];

var list_img = [
  "https://i0.hdslb.com/bfs/album/b137e150bc889e1ca43bba3f7c8f8634d241cc91.jpg",
  "https://i0.hdslb.com/bfs/album/827bd557a94bb507487518ac5d9189f7f731c163.jpg",
  "https://i0.hdslb.com/bfs/album/0f021f1135919d041adb9cda7fb39d301b092ecf.jpg",
  "https://i0.hdslb.com/bfs/album/9464a1be5acaa684245e73808b65751d10309653.jpg",
  "https://i0.hdslb.com/bfs/album/bdaaa7525205cd75cb848b14d38eda705fd5b170.jpg",
  "https://i0.hdslb.com/bfs/album/229bc5890182027d32b35084225f07df62882f2f.jpg",
  "https://i0.hdslb.com/bfs/album/cd395b1a6bcace36763bede1a2a051fd7f54887c.jpg",
  "https://i0.hdslb.com/bfs/album/912eaa9eb728bd0cc8c3cfdaf65cf9199036af16.jpg",
  "https://f.pz.al/pzal/2022/08/01/bcb62c4b7e690.jpg",
  "https://f.pz.al/pzal/2022/08/11/89c23861cfd37.png",
  "https://f.pz.al/pzal/2022/08/10/69ac2f6ff3ee9.jpg",
];

var list_tag = [
  ["地理", "生物", "会考"],
  ["政治", "历史", "会考"],
  ["政治", "会考"],
  ["历史", "会考"],
  ["电子书", "生物"],
  ["电子书", "地理"],
  ["电子书", "历史"],
  ["电子书", "政治"],
  ["小学", "口算"],
  ["小学", "口算"],
  ["初中", "电子书"],
];

var list_des = [
  "成都孩子一定会用到的初二下学期生物地理会考复习资料~当年小主可是满分通过哟~",
  "觉得单独购买两科太贵？看这！有优惠！",
  "政治会考啥也不要怕，跟着资料学习，没有什么难的！",
  "历史会考向来都是老大难问题，但只要学透了，便可以轻松应考！",
  "正版初一初二电子生物书，请告知客服需要哪种版本!",
  "正版初一初二电子地理书，请告知客服需要哪种版本!",
  "正版初一初二电子历史书，请告知客服需要哪种版本!",
  "正版初一初二电子政治书，请告知客服需要哪种版本!",
  "提升孩子计算能力的最好方法就是每天坚持练习口算题！",
  "提升孩子计算能力的最好方法就是每天坚持练习口算题！",
  "再也不用担心复习的时候没书看，预习的时候找不到书啦！",
];

var list_h = [
  "8d244114-0c0d-11ed-861d-0242ac120002",
  "d822806e-0c93-11ed-861d-0242ac120002",
  "e5bf5c42-0c7f-11ed-861d-0242ac120002",
  "f84ba8ac-0c8e-11ed-861d-0242ac120002",
  "b32c282a-0cc8-11ed-861d-0242ac120002",
  "07f2b82c-0ccb-11ed-861d-0242ac120002",
  "45cbd5c0-0ccb-11ed-861d-0242ac120002",
  "466ae81c-0ccc-11ed-861d-0242ac120002",
  "fb06806e-7b00-4b90-a6a7-356e96412718",
  "1f241e42-b898-40ff-ad61-fa412c2260cd",
  "e1d5fc63-939f-429a-b862-0a204e27efe5",
];

var list_price = [
  "15.9",
  "29.9",
  "19.9",
  "19.9",
  "12.9",
  "12.9",
  "15.9",
  "15.9",
  "9.9",
  "9.9",
  "15.9",
];

var tag_list = [];

for (let index = 0; index < list_tag.length; index++) {
    for (let item = 0; item < list_tag[index].length; item++) {
        tag_list[index] += `<span class="badage bg-success" style="padding: 3px;border-radius: 6px;color: white;">${list_tag[index][item]}</span>`;
    }
}

var list_code = "";

for (let index = 0; index < list_name.length; index++) {
    var tag_item = tag_list[index].split("undefined");
    list_code += `<div class="col">
    <div class="card">
      <img src="${list_img[index]}" class="card-img-top" alt="..." style="padding: 10px;">
      <div class="card-body">
        <h5 class="card-title">${list_name[index]}</h5>
        ${tag_item[1]}
        <h3 class="card-title" style="color: red;">CNY ${list_price[index]}</h3>
        <!-- 替换此简介 -->
        <p class="card-text">${list_des[index]}</p>
        <!-- 替换超链接 -->
        <a href="./list/${list_h[index]}/${list_h[index]}.html" class="btn btn-primary text-end">了解详情</a>
      </div>
    </div>
  </div>`;
}