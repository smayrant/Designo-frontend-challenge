import "./styles/main.scss";
import darkLogo from "./img/logo-dark.png";
import designBG from "./img/bg-pattern-intro-web.svg";
import boxedWaterImg from "./img/boxed-water.jpg";
import changeImg from "./img/change.jpg";
import scienceImg from "./img/science.jpg";
import appDesign from "./img/app-design.jpg";
import webDesign from "./img/web-design.jpg";
import contactBG from "./img/bg-pattern-cta.svg";
import lightLogo from "./img/logo-light.png";
import fbIcon from "./img/icon-facebook.svg";
import igIcon from "./img/icon-instagram.svg";
import ptIcon from "./img/icon-pinterest.svg";
import twIcon from "./img/icon-twitter.svg";
import ytIcon from "./img/icon-youtube.svg";

const logoDark = document.querySelector(".header__logo-img");
logoDark.src = darkLogo;

const graphicBg = document.querySelector(".hero--design ");
graphicBg.style.backgroundImage = `url("${designBG}")`;

const designApp = document.querySelector(".services__img--app");
designApp.src = appDesign;

const designWeb = document.querySelector(".services__img--web");
designWeb.src = webDesign;

const boxedWater = document.querySelector(".design__card-img--boxed-water");
boxedWater.src = boxedWaterImg;

const change = document.querySelector(".design__card-img--change");
change.src = changeImg;

const science = document.querySelector(".design__card-img--science");
science.src = scienceImg;

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
    console.log(className);
    className.classList.toggle("visible");
  });
};

burger.addEventListener(
  "click",
  toggleVisibility.bind(null, navMenu, pageMask)
);