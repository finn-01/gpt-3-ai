import React from "react";

import "./brand.css";
import { google, slack, atlassian, dropbox, shopify } from "./imports";

const socials = [google, slack, atlassian, dropbox, shopify];

const Brand = () => {
	return (
		<div className="gpt3__brand section__padding">
			{socials.map((social) => (
				<div key={social}>
					<img src={social} alt={social} />
				</div>
			))}
		</div>
	);
};

export default Brand;
