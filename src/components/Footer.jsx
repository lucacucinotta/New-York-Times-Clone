import style from "../assets/SCSS/Footer.module.scss";
import Logo from "../assets/img/logo.svg";

export default function Footer() {
  return (
    <footer>
      <div className={style.footerWrapper}>
        <div className={style.footerLine}></div>
        <img src={Logo} className={style.logo} />
      </div>
    </footer>
  );
}
