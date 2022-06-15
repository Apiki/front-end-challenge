import React from "react";
import styles from "./Loading.module.css";

const Loading = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.loading}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Loading;
