import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import "./navbar.css";
import logo from "../../assets/logo.svg";

const Menu = () => (
	<>
		<p className="opacity-80 hover:opacity-100">
			<a href="#home">Home</a>
		</p>
		<p className="opacity-80 hover:opacity-100">
			<a href="#wgpt3">What Is GPT?</a>
		</p>
		<p className="opacity-80 hover:opacity-100">
			<a href="#possibility">Open AI</a>
		</p>
		<p className="opacity-80 hover:opacity-100">
			<a href="#features">Case Studies</a>
		</p>
		<p className="opacity-80 hover:opacity-100">
			<a href="#blog">Library</a>
		</p>
	</>
);

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<div className="gpt3__navbar">
			<div className="gpt3__navbar-links">
				<div className="gpt3__navbar-links_logo mr-8">
					<img src={logo} alt="logo" />
				</div>
				<div className="gpt3__navbar-links_container">
					<Menu />
				</div>
			</div>
			<div className="gpt3__navbar-sign">
				<p className="opacity-80 hover:opacity-100">Sign in</p>
				<button type="button" className="opacity-80 hover:opacity-100">
					Sign up
				</button>
			</div>
			<div className="gpt3__navbar-menu">
				{toggleMenu ? (
					<RiCloseLine
						color="#fff"
						size={27}
						onClick={() => setToggleMenu(false)}
					/>
				) : (
					<RiMenu3Line
						color="#fff"
						size={27}
						onClick={() => setToggleMenu(true)}
					/>
				)}
				{toggleMenu && (
					<div className="gpt3__navbar-menu_container scale-up-center">
						<div className="gpt3__navbar-menu_container-links">
							<Menu />
							<div className="gpt3__navbar-menu_container-links-sign">
								<p className="opacity-80 hover:opacity-100">Sign in</p>
								<button type="button" className="opacity-80 hover:opacity-100">
									Sign up
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
