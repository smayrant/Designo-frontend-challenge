import "./styles/main.scss";
import darkLogo from "./img/logo-dark.png";
import aboutBG from "./img/bg-pattern-intro-web.svg";
import heroImg from "./img/about-hero.png";
import talent from "./img/world-class-talent.jpg";

const logoDark = document.querySelector(".header__logo-img");
logoDark.src = darkLogo;

const aboutBg = document.querySelector(".hero--about");
aboutBg.style.backgroundImage = `url("${aboutBG}")`;

const aboutHero = document.querySelector(".about__hero-img");
aboutHero.src = heroImg;

const talentImg = document.querySelector(".talent-img");
talentImg.src = talent;
