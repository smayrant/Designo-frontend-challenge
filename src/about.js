import "./styles/main.scss";
import darkLogo from "./img/logo-dark.png";
import aboutBG from "./img/bg-pattern-intro-web.svg";
import heroImg from "./img/about-hero.png";
import talent from "./img/world-class-talent.jpg";
import canada from "./img/canada.svg";
import australia from "./img/australia.svg";
import unitedKingdom from "./img/united-kingdom.svg";
import BGImgSm from "./img/bg-pattern-small-circle.svg";
import BGImgLg from "./img/bg-pattern-three-circles.svg";
import realDeal from "./img/real-deal.jpg";
import lightLogo from "./img/logo-light.png";
import fbIcon from "./img/icon-facebook.svg";
import igIcon from "./img/icon-instagram.svg";
import ptIcon from "./img/icon-pinterest.svg";
import twIcon from "./img/icon-twitter.svg";
import ytIcon from "./img/icon-youtube.svg";

const logoDark = document.querySelector(".header__logo-img");
logoDark.src = darkLogo;

const aboutBg = document.querySelector(".hero--about");
aboutBg.style.backgroundImage = `url("${aboutBG}")`;

const aboutHero = document.querySelector(".about__hero-img");
aboutHero.src = heroImg;

const talentImg = document.querySelector(".talent-img");
talentImg.src = talent;

const canadaImg = document.querySelector(".location__img--canada");
canadaImg.src = canada;

const australiaImg = document.querySelector(".location__img--australia");
australiaImg.src = australia;

const unitedKingdomImg = document.querySelector(
  ".location__img--united-kingdom"
);
unitedKingdomImg.src = unitedKingdom;

const background = document.querySelector(".location__bg-img");
background.src = BGImgSm;

const background2 = document.querySelector(".location__bg-img--second");
background2.src = BGImgSm;

const background3 = document.querySelector(".location__bg-img--third");
background3.src = BGImgSm;

const talentBg = document.querySelector(".about__text-container--talent");
talentBg.style.backgroundImage = `url("${BGImgLg}")`;

const realDealBg = document.querySelector(".about__text-container--real-deal");
realDealBg.style.backgroundImage = `url("${BGImgLg}")`;

const realDealImg = document.querySelector(".real-deal-img");
realDealImg.src = realDeal;

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
