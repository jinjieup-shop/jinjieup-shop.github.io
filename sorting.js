var so_name = [
  "电子书",
  "会考",
  "政治",
  "历史",
  "生物",
  "地理",
  "小学",
  "口算",
  "初中",
];

var so_sum = ["5", "4", "3", "3", "2", "2", "2", "2", "1"];

var so_h = [
  "9a0093d4-0e41-11ed-861d-0242ac120002",
  "513cde18-0e42-11ed-861d-0242ac120002",
  "7a9e913e-0e42-11ed-861d-0242ac120002",
  "a1fbaa28-0e42-11ed-861d-0242ac120002",
  "c22e633a-0e42-11ed-861d-0242ac120002",
  "d9af706c-0e42-11ed-861d-0242ac120002",
  "60d0f659-69f2-4151-bd8f-adc80fc2cb88",
  "20e7d2ee-2ea0-41c1-b7f5-27df42edf27f",
  "c165311b-6c54-42ca-b98a-146870abbd08",
];

var so_code = "";

for (let index = 0; index < so_name.length; index++) {
  so_code += `<a href="./s/${so_h[index]}/">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    ${so_name[index]}
    <span class="badge bg-primary rounded-pill">${so_sum[index]}</span>
  </li>
</a>`;
}
