import "./styles/main.scss";
import darkLogo from "./img/logo-dark.png";
import designBG from "./img/bg-pattern-intro-web.svg";
import expressImg from "./img/express.jpg";
import transferImg from "./img/transfer.jpg";
import photonImg from "./img/photon.jpg";
import builderImg from "./img/builder.jpg";
import blogrImg from "./img/blogr.jpg";
import campImg from "./img/camp.jpg";
import appDesign from "./img/app-design.jpg";
import graphicDesign from "./img/graphic-design.jpg";
import contactBG from "./img/bg-pattern-cta.svg";
import lightLogo from "./img/logo-light.png";
import fbIcon from "./img/icon-facebook.svg";
import igIcon from "./img/icon-instagram.svg";
import ptIcon from "./img/icon-pinterest.svg";
import twIcon from "./img/icon-twitter.svg";
import ytIcon from "./img/icon-youtube.svg";

const logoDark = document.querySelector(".header__logo-img");
logoDark.src = darkLogo;

const webBg = document.querySelector(".hero--design ");
webBg.style.backgroundImage = `url("${designBG}")`;

const express = document.querySelector(".design__card-img--express");
express.src = expressImg;

const transfer = document.querySelector(".design__card-img--transfer");
transfer.src = transferImg;

const photon = document.querySelector(".design__card-img--photon");
photon.src = photonImg;

const builder = document.querySelector(".design__card-img--builder");
builder.src = builderImg;

const blogr = document.querySelector(".design__card-img--blogr");
blogr.src = blogrImg;

const camp = document.querySelector(".design__card-img--camp");
camp.src = campImg;

const designApp = document.querySelector(".services__img--app");
designApp.src = appDesign;

const designGraphic = document.querySelector(".services__img--graphic");
designGraphic.src = graphicDesign;

// Contact
const contactBGImg = document.querySelector(".contact");
contactBGImg.style.backgroundImage = `url("${contactBG}")`;

// Footer
const logoLight = document.querySelector(".footer__logo");
logoLight.src = lightLogo;

const iconFb = document.querySelector(".footer__icon--fb");
iconFb.src = fbIcon;

const iconYt = document.querySelector(".footer__icon--yt");
iconYt.src = ytIcon;

const iconTw = document.querySelector(".footer__icon--tw");
iconTw.src = twIcon;

const iconPt = document.querySelector(".footer__icon--pt");
iconPt.src = ptIcon;

const iconIg = document.querySelector(".footer__icon--ig");
iconIg.src = igIcon;
