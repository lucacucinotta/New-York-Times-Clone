import style from "../assets/SCSS/components/Footer.module.scss";
import Logo from "../assets/img/logo.svg";
import SectionsLayout from "./SectionsLayout";

export default function Footer() {
  return (
    <footer>
      <div className={style.footerWrapper}>
        <div className={style.footerLine}></div>
        <img src={Logo} className={style.logo} />
        <div className={style.sectionList}>
          <SectionsLayout />
        </div>
      </div>
    </footer>
  );
}
