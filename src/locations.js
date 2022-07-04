import "./styles/main.scss";
import darkLogo from "./img/logo-dark.png";
import canada from "./img/map-canada.png";
import australia from "./img/map-australia.png";
import unitedKingdom from "./img/map-uk.png";
import bgImg from "./img/bg-pattern-three-circles.svg";
import lightLogo from "./img/logo-light.png";
import fbIcon from "./img/icon-facebook.svg";
import igIcon from "./img/icon-instagram.svg";
import ptIcon from "./img/icon-pinterest.svg";
import twIcon from "./img/icon-twitter.svg";
import ytIcon from "./img/icon-youtube.svg";

const logoDark = document.querySelector(".header__logo-img");
logoDark.src = darkLogo;

const canadaImg = document.querySelector(".locations__img--canada");
canadaImg.src = canada;

const australiaImg = document.querySelector(".locations__img--australia");
australiaImg.src = australia;

const unitedKingdomImg = document.querySelector(".locations__img--uk");
unitedKingdomImg.src = unitedKingdom;

const bg = document.querySelectorAll(".locations__address-container");
bg.forEach(function (elem) {
  elem.style.backgroundImage = `url("${bgImg}")`;
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
