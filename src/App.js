import React from "react";
import "./App.css";
import Navbar from "./components/header/Navbar";
import Foooter from "./components/footer/Foooter";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/home/Home";
import Hakkimizda from "./components/hakkimizda/Hakkimizda";

import Iletisim from "./components/iletisim/Iletisim";

import Hizmetler from "./components/hizmetler/Hizmetler";
import Medikal from "./components/hizmetler/MedikalCiltBakimi";
import Tum from "./components/hizmetler/TumVucutLazerEpilasyon";
import Hydrafacial from "./components/hizmetler/HydrafacialCiltBakimi";
import G5 from "./components/hizmetler/G5Masaji";
import KirpikLifting from "./components/hizmetler/EnseYanakBoyunEpilasyon";
import KaliciMakyaj from "./components/hizmetler/KaliciMakyaj";
import YosunPeeling from "./components/hizmetler/YosunPeeling";
import MagicSlim from "./components/hizmetler/MagicSlim";
import Cihazlar from "./components/hizmetler/Urunler";
import Blog from "./components/blog/Blog";
import Fotograf from "./components/galeri/FotografVideo";
import Video from "./components/galeri/FotografVideo";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="col-12 m-0 p-0">
          <Navbar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/anasayfa" component={Home} />
            <Route path="/hakkimizda" component={Hakkimizda} />

            <Route exact path="/hizmetler" component={Hizmetler} />
            <Route exact path="/medikal-cilt-bakimi" component={Medikal} />
            <Route exact path="/diode-lazer-epilasyon" component={Tum} />
            <Route exact path="/hydrafacial-cilt-bakimi" component={Hydrafacial}/>
            <Route exact path="/g5-kavitasyon" component={G5} />
            <Route exact path="/kirpik-lifting" component={KirpikLifting} />
            <Route exact path="/kalici-makyaj" component={KaliciMakyaj} />
            <Route exact path="/yosun-peeling" component={YosunPeeling} />
            <Route exact path="/magic-slim" component={MagicSlim} />

            <Route exact path="/cihazlarimiz" component={Cihazlar} />s

            <Route exact path="/blog" component={Blog} />
            <Route exact path="/fotograflar" component={Fotograf} />
            <Route exact path="/videolar" component={Video} />

            <Route path="/iletisim" component={Iletisim} />
          </Switch>

          <hr className="footerHr" />
          <div className="col-12">
            <Foooter />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
