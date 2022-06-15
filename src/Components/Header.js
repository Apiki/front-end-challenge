import React from "react";
import Logo from "../assets/logo.webp";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className={styles.header}>
			<Link to="/">
				<img className={styles.logo} src={Logo} alt="Apiki Logo" />
			</Link>
		</header>
	);
};

export default Header;
