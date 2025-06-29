import LogoDigitalGlow from "./../../images/Logo/LogoDigitalGlow.svg";
import Image from "next/image";
import styles from "./Header.module.scss";
import { RiTwitterXFill, RiInstagramLine } from "react-icons/ri";

const Header = () => {
  return (
    <div className="flex justify-center">
      <div className={styles["Header__light"]}></div>
      <header className={styles["Header"]}>
        <Image
          src={LogoDigitalGlow}
          alt="Banner principal"
          width={1200}
          height={600}
          className={styles["Header__logo--image"]}
          priority
        />
        <nav className={styles["Header__navigation"]}>
          <ul className={styles["Header__navigation--items"]}>
            <li className={styles["Header__navigation--item"]}>
              <a className={styles["Header__navigation--link"]} href="#">
                O que fazemos
              </a>
            </li>
            <li className={styles["Header__navigation--item"]}>
              <a className={styles["Header__navigation--link"]} href="#">
                Serviços
              </a>
            </li>
            <li className={styles["Header__navigation--item"]}>
              <a className={styles["Header__navigation--link"]} href="#">
                Dúvidas
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles["Header__social"]}>
          <a href="https://x.com/digitalglow_web">
            <div className={styles["Header__social--division"]}>
              <RiTwitterXFill className={styles["Header__social--icon"]} />
            </div>
          </a>
          <a href="https://www.instagram.com/digitalglowweb/">
            <div className={styles["Header__social--division"]}>
              <RiInstagramLine className={styles["Header__social--icon"]} />
            </div>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
