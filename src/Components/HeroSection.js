import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection = ({ children }) => {
	return <div className={styles.wrapper}>{children}</div>;
};

export default HeroSection;
