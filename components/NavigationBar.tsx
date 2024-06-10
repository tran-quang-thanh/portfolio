'use client'
import Link from "next/link";
import { ReactNode, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { AiOutlineFundProjectionScreen, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

export default function NavigationBar() {
  const [isExpanded, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

	function scrollHandler() {
  	if (window.scrollY >= 20) {
      updateNavbar(true);
		} else {
      updateNavbar(false);
    }
  }
    
  if (typeof window !== "undefined") {
		window.addEventListener("scroll", scrollHandler);
  }

  return (
		<Navbar 
			fixed="top"
			expand="md"
			expanded={isExpanded}
			className={`${navColour ? "sticky" : "navbar"}`}
		>
			<Navbar.Toggle
				className="navbar-toggler"
				aria-controls="responsive-navbar-nav"
				onClick={() => {
					updateExpanded(!isExpanded);
				}}
			>
				<span />
				<span />
				<span />
			</Navbar.Toggle>

			<Navbar.Collapse id="responsive-navbar-nav">

				<NavBarItem 
					link="/" 
					onClick={() => updateExpanded(false)}
				>
					<AiOutlineHome /> 
					<div>Home</div>
				</NavBarItem>

				<NavBarItem 
					link="/about" 
					onClick={() => updateExpanded(false)}
				>
					<AiOutlineUser />
					<div>About</div>
				</NavBarItem>

				<NavBarItem 
					link="/project" 
					onClick={() => updateExpanded(false)}
				>
					<AiOutlineFundProjectionScreen />
					<div>Project</div>
				</NavBarItem>

				<NavBarItem 
					link="/resume" 
					onClick={() => updateExpanded(false)}
				>
					<CgFileDocument />
					<div>Resume</div>
				</NavBarItem>

			</Navbar.Collapse>
		</Navbar>
  );
}

function NavBarItem({ link, onClick, children } : {link: string, onClick: () => void, children: ReactNode }) {
	return (
		<Nav.Link
			as={Link}
			href={link}
			onClick={onClick}
			className="group hover:text-[#cd5ff8] hover:scale-110"
		>
			<div className="flex items-center space-x-1">
				{children}
			</div>
			<span className="block max-w-0 group-hover:max-w-full duration-500 transition-all h-1.5 bg-[#cd5ff8] rounded"></span>
		</Nav.Link>
	);
}