import React from "react";
import "./Hizmet.css";
import m1 from "./hizmetImage/1.webp";
import m2 from "./hizmetImage/2.webp";
import m3 from "./hizmetImage/3.webp";
import m4 from "./hizmetImage/4.webp";
import m5 from "./hizmetImage/5.webp";
import m6 from "./hizmetImage/6.webp";

export default function Hizmetler() {
  return (
    <div class="col-12">
      <div class="card col-lg-4 col-md-6 col-sm-12 col-12 p-4">
        <img src={m1} class="card-img-top rsm" alt="Erzurum Lazer Epilasyon" title="Erzurum Lazer Epilasyon"loading="lazy" ></img>
      </div>
      <div class="card col-lg-4 col-md-6 col-sm-12 col-12 p-4">
        <img src={m2} class="card-img-top rsm" alt="Erzurum Lazer Epilasyon" title="Erzurum Lazer Epilasyon"loading="lazy" ></img>
      </div>
      <div class="card col-lg-4 col-md-6 col-sm-12 col-12 p-4">
        <img src={m3} class="card-img-top rsm" alt="Erzurum Lazer Epilasyon" title="Erzurum Lazer Epilasyon"loading="lazy" ></img>
      </div>
      <div class="card col-lg-4 col-md-6 col-sm-12 col-12 p-4">
        <img src={m4} class="card-img-top rsm" alt="Erzurum Lazer Epilasyon" title="Erzurum Lazer Epilasyon"loading="lazy" ></img>
      </div>
      <div class="card col-lg-4 col-md-6 col-sm-12 col-12 p-4">
        <img src={m5} class="card-img-top rsm" alt="Erzurum Lazer Epilasyon" title="Erzurum Lazer Epilasyon" loading="lazy" ></img>
      </div>
      <div class="card col-lg-4 col-md-6 col-sm-12 col-12 p-4">
        <img src={m6} class="card-img-top rsm" alt="Erzurum Lazer Epilasyon" title="Erzurum Lazer Epilasyon"loading="lazy" ></img>
      </div>
    </div>
  );
}
