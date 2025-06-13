import styles from "./Logo.module.scss";
import Image from "next/image";
import RocketLogo from "../../images/Logo/RocketLogo.svg";
import Magnet from "../Magnet/Magnet";
import FadeContent from "../FadedContent/FadedContent";

const Logo = () => {
  return (
    <div className={styles["Logo"]}>
      <FadeContent
        blur={true}
        duration={1000}
        easing="linear"
        initialOpacity={0}
      >
        <Magnet padding={150} disabled={false} magnetStrength={10}>
          <div className={styles["Logo__content"]}>
            <Image
              src={RocketLogo}
              alt="Banner principal"
              width={1200}
              height={600}
              className={styles["Logo__image"]}
              priority
            />
            <p className={styles["Logo__text"]}>
              digital<span className={styles["Logo__text--main"]}>glow</span>
            </p>
            <div className={styles["Logo__effect"]}></div>
          </div>
        </Magnet>
      </FadeContent>
    </div>
  );
};

export default Logo;
