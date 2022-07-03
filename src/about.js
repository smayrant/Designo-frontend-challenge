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
