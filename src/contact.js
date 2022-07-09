import "./styles/main.scss";
import darkLogo from "./img/logo-dark.png";
import heroBG from "./img/bg-pattern-hero-contact.svg";
import canada from "./img/canada.svg";
import australia from "./img/australia.svg";
import unitedKingdom from "./img/united-kingdom.svg";
import BGImgSm from "./img/bg-pattern-small-circle.svg";
import lightLogo from "./img/logo-light.png";
import fbIcon from "./img/icon-facebook.svg";
import igIcon from "./img/icon-instagram.svg";
import ptIcon from "./img/icon-pinterest.svg";
import twIcon from "./img/icon-twitter.svg";
import ytIcon from "./img/icon-youtube.svg";

const logoDark = document.querySelector(".header__logo-img");
logoDark.src = darkLogo;

const heroBGImg = document.querySelector(".contact-us__container");
heroBGImg.style.backgroundImage = `url("${heroBG}")`;

const canadaImg = document.querySelector(".location__img--canada");
canadaImg.src = canada;

const australiaImg = document.querySelector(".location__img--australia");
australiaImg.src = australia;

const unitedKingdomImg = document.querySelector(
  ".location__img--united-kingdom"
);
unitedKingdomImg.src = unitedKingdom;

const bg = document.querySelectorAll(".location__bg-img");
bg.forEach(function (elem) {
  elem.src = BGImgSm;
});

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
