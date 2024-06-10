'use client'
import Link from "next/link";
import { useState } from "react";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";

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
			className={`${navColour ? "sticky" : "navbar"} my-50`}
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
				<Nav.Link
					as={Link}
					href="/about"
					onClick={() => updateExpanded(false)}
				>
					About
				</Nav.Link>
			</Navbar.Collapse>
		</Navbar>
  );
}