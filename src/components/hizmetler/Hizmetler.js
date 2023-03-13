import React from "react";
import "./Hizmet.css";
import m1 from "../topluhizmet/hizmetFotolar/bl1.webp";
import m2 from "../topluhizmet/hizmetFotolar/bl2.webp";
import m3 from "../topluhizmet/hizmetFotolar/lazer.webp";
import m4 from "../topluhizmet/hizmetFotolar/bl4.webp";
import m6 from "../topluhizmet/hizmetFotolar/bl6.webp";
import m7 from "../topluhizmet/hizmetFotolar/yosun.webp";

export default function Hizmetler() {
  return (
    <div class="col-12">
      <div class="card col-lg-4 col-md-6 col-sm-12 col-12 p-5">
        <img src={m1} class="card-img-top rsm" alt="..."></img>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div class="card col-lg-4 col-md-6 col-sm-12 col-12 p-5">
        <img src={m2} class="card-img-top rsm" alt="..." ></img>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div class="card col-lg-4 col-md-6 col-sm-12 col-12 p-5">
        <img src={m3} class="card-img-top rsm" alt="..." ></img>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
