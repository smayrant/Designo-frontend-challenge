import "./styles/main.scss";
import darkLogo from "./img/logo-dark.png";
import background from "./img/bg-pattern.svg";
import heroPhone from "./img/hero-phone.png";
import appDesign from "./img/app-design.jpg";
import graphicDesign from "./img/graphic-design.jpg";
import webDesign from "./img/web-design.jpg";
import graphicDesignLg from "./img/graphic-design-lg.jpg";
import appDesignLg from "./img/app-design-lg.jpg";
import webDesignLg from "./img/web-design-lg.jpg";
import aboutBGImg from "./img/bg-pattern-leaf.svg";
import friendly from "./img/friendly.svg";
import passionate from "./img/passionate.svg";
import resourceful from "./img/resourceful.svg";
import aboutUsBG from "./img/bg-pattern-about-us.svg";
import contactBG from "./img/bg-pattern-cta.svg";
import lightLogo from "./img/logo-light.png";
import fbIcon from "./img/icon-facebook.svg";
import igIcon from "./img/icon-instagram.svg";
import ptIcon from "./img/icon-pinterest.svg";
import twIcon from "./img/icon-twitter.svg";
import ytIcon from "./img/icon-youtube.svg";

const logoDark = document.querySelector(".header__logo-img");
logoDark.src = darkLogo;

const heroBG = document.querySelector(".hero ");
heroBG.style.backgroundImage = `url("${background}")`;

const phoneHero = document.querySelector(".hero__img");
phoneHero.src = heroPhone;

// Services
const designApp = document.querySelector(".services__img--app");
designApp.src = appDesign;

const designGraphic = document.querySelector(".services__img--graphic");
designGraphic.src = graphicDesign;

const designWeb = document.querySelector(".services__img--web");
designWeb.src = webDesign;

const designGraphicLg = document.querySelector(
  ".services__img--graphic-desktop"
);
designGraphicLg.src = graphicDesignLg;

const designAppLg = document.querySelector(".services__img--app-desktop");
designAppLg.src = appDesignLg;

const designWebLg = document.querySelector(".services__img--web-desktop");
designWebLg.src = webDesignLg;

// About Us
const aboutBG = document.querySelector(".about-us__bg-img");
aboutBG.src = aboutBGImg;

const passionateImg = document.querySelector(".about-us__img--passionate");
passionateImg.src = passionate;

const resourcefulImg = document.querySelector(".about-us__img--resourceful");
resourcefulImg.src = resourceful;

const friendlyImg = document.querySelector(".about-us__img--friendly");
friendlyImg.src = friendly;

const passionateBGImg = document.querySelector(".about-us__bg-img--passionate");
passionateBGImg.src = aboutUsBG;

const resourcefulBGImg = document.querySelector(
  ".about-us__bg-img--resourceful"
);
resourcefulBGImg.src = aboutUsBG;

const friendlyBGImg = document.querySelector(".about-us__bg-img--friendly");
friendlyBGImg.src = aboutUsBG;

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
