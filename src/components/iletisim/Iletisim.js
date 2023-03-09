import "./Iletisim.css";
import React from "react";
import useDocumentTitle from "../../useDocumentTitle.js";
import Title from "../title/Title";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import Mail from "./ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import HomeIcon from "@material-ui/icons/Home";


function Iletisim() {
  useDocumentTitle("İletişim - Erzurum LiParis  Güzellik Merkezi ");
  return (
    <div className="col-12">
      <div
        className="card m-4"
        style={{
          align: "center",
          backgroundColor: "#f8f7fb",
          borderRadius: "5px",
        }}
      >
        <Title page_title="İletişim" />
      </div>

      <div class="col-lg-6s col-md-6 col-sm-12 col-12" style={{}}>
        <p className="contactInfo">İletişim Bilgilerimiz</p>

        <p style={{ fontSize: "medium", textAlign: "left" }}>
          {" "}
          <a href="mailto:lavinya.golden.antalya@gmail.com">
            <ContactMailIcon style={{ fontSize: "x-large" }} />
          </a>
          &nbsp; lavinya.golden.antalya@gmail.com
        </p>
        <p style={{ fontSize: "medium", textAlign: "left" }}>
          {" "}
          <a
            href="tel: +905445374882"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon style={{ fontSize: "x-large", color: "#25d366" }} />
          </a>
          &nbsp; <b>0544 537 48 82</b>{" "}
          <FontAwesomeIcon icon="coffee" size="lg" />
        </p>
        <p style={{ fontSize: "14px", textAlign: "left" }}>
              <a
                href="https://goo.gl/maps/JKy272hFMBL8aCCJ7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HomeIcon style={{ fontSize: "24px"}} />
              </a>
              &nbsp; Tahılpazarı Mahallesi Adnan Menderes Bulvarı Kent iş Merkezi No:11 Kat:7 Daire:24
              (MarkAntalya AVM Karşısı, ING Bank Üzerindeyiz)
              
            </p>

            <p style={{ fontSize: "14px", textAlign: "left" }}>
              <a
                href="https://goo.gl/maps/JKy272hFMBL8aCCJ7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LocationOnIcon style={{ fontSize: "24px" , color:"red" }} />
              </a>
              &nbsp; 
              <b>Muratpaşa / ANTALYA</b>{" "}
            </p>
      </div>

      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1221.3894889326127!2d30.70566908754523!3d36.893985081323606!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2958a6926cf88549%3A0xd34d698391e21bd4!2sLavinya%20Golden%20Antalya!5e0!3m2!1str!2str!4v1678278757736!5m2!1str!2str"
          className="googleharita"
          style={{
            width: "100%",
            height: "45rem",
            frameBorder: "0",
            allowFullScreen: "",
            referrerpolicy: "no-referrer-when-downgrade",
            ariaHidden: "false",
            tabIndex: "0",
            border: "2px #E59026 solid",
            paddingBottom: "0.5rem",
            paddingTop: "0.5rem",
          }}
        >
          {" "}
        </iframe>
      </div>
      <Mail />
    </div>
  );
}

export default Iletisim;
