var re_code = "";

var re_name = [
  "初三下政治会考必备资料",
  "初三下历史会考必备资料",
  "初二下生物地理会考资料",
]

var re_b_img = [
    "https://f.pz.al/pzal/2022/08/10/03c8be6f4a037.png",
    "https://f.pz.al/pzal/2022/08/10/03c8be6f4a037.png",
    "https://f.pz.al/pzal/2022/08/10/03c8be6f4a037.png",
]

var re_des = [
    "政治会考啥也不要怕，跟着资料学习，没有什么难的！",
    "历史会考向来都是老大难问题，但只要学透了，便可以轻松应考！",
    "成都孩子一定会用到的初二下学期生物地理会考复习资料~当年小主可是满分通过哟~",
]

var re_h = [
    "e5bf5c42-0c7f-11ed-861d-0242ac120002",
    "f84ba8ac-0c8e-11ed-861d-0242ac120002",
    "8d244114-0c0d-11ed-861d-0242ac120002",
]

for (let index = 0; index < re_name.length; index++) {
    re_code += `
    <a href="./list/${re_h[index]}/${re_h[index]}.html" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1" style="z-index: 999">
        ${re_name[index]}
      </h5>
      <img
        src="${re_b_img[index]}"
        alt=""
        style="
          width: 20%;
          height: auto;
          z-index: 1;
          position: initial;
          right: 5%;
        "
      />
    </div>
    <p class="mb-1" style="z-index: 999">
      ${re_des[index]}
    </p>
  </a>
    `;
}