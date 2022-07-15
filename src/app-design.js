import "./styles/main.scss";
import darkLogo from "./img/logo-dark.png";
import designBG from "./img/bg-pattern-intro-web.svg";
import airfilterImg from "./img/airfilter.jpg";
import eyecamImg from "./img/eyecam.jpg";
import faceitImg from "./img/faceit.jpg";
import todoImg from "./img/todo.jpg";
import loopstudiosImg from "./img/loopstudios.jpg";
import graphicDesign from "./img/graphic-design.jpg";
import webDesign from "./img/web-design.jpg";
import graphicDesignLg from "./img/graphic-design-lg.jpg";
import webDesignLg from "./img/web-design-desktop-sm.jpg";
import contactBG from "./img/bg-pattern-cta.svg";
import lightLogo from "./img/logo-light.png";
import fbIcon from "./img/icon-facebook.svg";
import igIcon from "./img/icon-instagram.svg";
import ptIcon from "./img/icon-pinterest.svg";
import twIcon from "./img/icon-twitter.svg";
import ytIcon from "./img/icon-youtube.svg";

const logoDark = document.querySelector(".header__logo-img");
logoDark.src = darkLogo;

const appBg = document.querySelector(".hero--design ");
appBg.style.backgroundImage = `url("${designBG}")`;

const eyecam = document.querySelector(".design__card-img--eyecam");
eyecam.src = eyecamImg;

const faceit = document.querySelector(".design__card-img--faceit");
faceit.src = faceitImg;

const todo = document.querySelector(".design__card-img--todo");
todo.src = todoImg;

const loopstudios = document.querySelector(".design__card-img--loopstudios");
loopstudios.src = loopstudiosImg;

const airfilter = document.querySelector(".design__card-img--airfilter");
airfilter.src = airfilterImg;

const designWeb = document.querySelector(".services__img--web");
if (designWeb) {
  designWeb.src = webDesign;
}

const designGraphic = document.querySelector(".services__img--graphic");
if (designGraphic) {
  designGraphic.src = graphicDesign;
}

const designGraphicLg = document.querySelector(
  ".services__img--graphic-desktop"
);
designGraphicLg.src = graphicDesignLg;

const designWebLg = document.querySelector(".services__img--web-desktop");
designWebLg.src = webDesignLg;

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

// Get burger menu, page mask and menu elements
const burger = document.querySelector(".header__burger");
const pageMask = document.querySelector(".page-mask");
const navMenu = document.querySelector(".main-nav");

const toggleVisibility = (...className) => {
  document.body.classList.toggle("no-scroll");
  className.forEach(function (className) {
    className.classList.toggle("visible");
  });
};

burger.addEventListener(
  "click",
  toggleVisibility.bind(null, navMenu, pageMask)
);
