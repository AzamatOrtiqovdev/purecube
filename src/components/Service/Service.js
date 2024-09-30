import React from "react";
import styles from "./Service.module.css";
import serviceLogoOne from "../../assets/serviceLogoOne.png";
import serviceLogoTwo from "../../assets/serviceLogoTwo.png";
import serviceLogoThree from "../../assets/serviceLogoThree.png";
import serviceLogoFour from "../../assets/serviceLogoFour.png";

export default function Service() {
  return (
    <div id="service">
      <h3 className={styles.serviceTitle}>We Provide The Best Services</h3>

      <ul className={styles.serviceList}>
        <li className={styles.serviceItem}>
          <img src={serviceLogoOne} alt="service logo one" />

          <div className={styles.serviceInfo}>
            <h3>SEO Booster</h3>
            <p>
              Elevate your online presence with Apexify's SEO Booster – tailored
              strategies for top search engine rankings. Dominate the digital
              realm and drive organic traffic to your website with our expert
              optimization techniques.
            </p>
          </div>
        </li>

        <li className={styles.serviceItem}>
          <img src={serviceLogoTwo} alt="service logo one" />

          <div className={styles.serviceInfo}>
            <h3>Web Development</h3>
            <p>
              We craft dynamic and user-centric websites that captivate
              audiences and drive results. Our web development services blend
              creativity and functionality to elevate your online presence and
              exceed your digital goals.
            </p>
          </div>
        </li>

        <li className={styles.serviceItem}>
          <img src={serviceLogoThree} alt="service logo one" />

          <div className={styles.serviceInfo}>
            <h3>Web Design</h3>
            <p>
              At Apexify, we create captivating web experiences that merge
              creativity with functionality. Our designs are tailored to elevate
              your brand's online presence and captivate your audience. Making
              one’s product stand out.
            </p>
          </div>
        </li>

        <li className={styles.serviceItem}>
          <img src={serviceLogoFour} alt="service logo one" />

          <div className={styles.serviceInfo}>
            <h3>Data Analytics</h3>
            <p>
              We harness the power of data analytics to uncover valuable
              insights and drive informed decisions. Our advanced analytics
              solutions empower businesses to optimize performance, enhance
              efficiency, and unlock new opportunities for growth.
            </p>
          </div>
        </li>
      </ul>

    </div>
  );
}
