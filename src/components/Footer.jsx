import style from "../assets/SCSS/components/Footer.module.scss";
import Logo from "../assets/img/logo.svg";
import SectionsLayout from "./SectionsLayout";

export default function Footer() {
  return (
    <footer>
      <div className={style.footerWrapper}>
        <div className={style.footerLine}></div>
        <img src={Logo} className={style.logo} />
        <span className={style.footerThinLine}></span>
        <div className={style.sectionList}>
          <SectionsLayout />
        </div>
        <span className={style.footerThinLine}></span>
        <p className={style.copyright}>© 2023 | Luca Cucinotta</p>
      </div>
    </footer>
  );
}
