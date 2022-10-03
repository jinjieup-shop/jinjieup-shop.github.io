var list = [
  "https://i0.hdslb.com/bfs/album/bee7cabde8db71a61511ed3010a827f4552bcf82.jpg",
  "https://i0.hdslb.com/bfs/album/de29fd1667661a1519442c0fcbf61e0bef5cfd79.jpg",
  "https://i0.hdslb.com/bfs/album/69a5846050c1af14b3b4134dc7161e43bd4e2f20.jpg",
];

var ban_code = "";
var ban_img = "";
var ban_sbtn = "";

for (let index = 0; index < list.length; index++) {
  if (index == 0) {
    ban_img += `
    <div class="carousel-item active">
        <img
          src="${list[index]}"
          class="d-block"
          style="width: 100%;margin-bottom: 5%;"
          alt="..."
        />
      </div>`;
    ban_sbtn += `
    <button
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide-to="${index}"
    class="active"
    aria-current="true"
    aria-label="Slide ${index + 1}"
  ></button>
    `;
  } else {
    ban_img += `
    <div class="carousel-item">
        <img
          src="${list[index]}"
          class="d-block"
          style="width: 100%;margin-bottom: 5%;"
          alt="..."
        />
      </div>`;
    ban_sbtn += `
    <button
    type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="${index}"
      aria-label="Slide ${index + 1}"
    ></button>
    `;
  }
}

ban_code +=
  `<div
style="margin-left: 1%; margin-right: 1%"
id="carouselExampleIndicators"
class="carousel slide w-100"
data-bs-ride="carousel"
data-bs-interval="2500"
>
<div
  class="carousel-indicators"
  style="
    background-color: rgb(188, 188, 188);
    padding: 1mm;
    border-radius: 0mm 0mm 1.5mm 1.5mm;
  "
>` +
  ban_sbtn +
  `</div>
<div class="carousel-inner" style="width: 93%;height: 90%;margin-right: auto;margin-left: auto;">` +
  ban_img +
  `</div>
<button
  style="
    background-color: rgb(120, 120, 120);
    width: 3%;
    padding-left: 3px;
    border-radius: 5mm 0mm 0mm 5mm;
    height: 50%;
    margin-top: auto;
    margin-bottom: auto;
  "
  class="carousel-control-prev"
  type="button"
  data-bs-target="#carouselExampleIndicators"
  data-bs-slide="prev"
>
  <span
    class="carousel-control-prev-icon"
    aria-hidden="true"
  ></span>
  <span class="visually-hidden">Previous</span>
</button>
<button
  style="
    background-color: rgb(120, 120, 120);
    width: 3%;
    padding-left: 3px;
    border-radius: 0mm 5mm 5mm 0mm;
    height: 50%;
    margin-top: auto;
    margin-bottom: auto;
  "
  class="carousel-control-next"
  type="button"
  data-bs-target="#carouselExampleIndicators"
  data-bs-slide="next"
>
  <span
    class="carousel-control-next-icon"
    aria-hidden="true"
  ></span>
  <span class="visually-hidden">Next</span>
</button>
</div>`;
