import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from '../../assets/Images/news_logo.png'

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header className=" w-[92%] mx-auto  ">
			 <a className="">
            <img className='h-[50px] w-[70%] rounded-md' src={logo} alt="logo" />
          </a>
			<nav ref={navRef}>
				<a >প্রচ্ছদ</a>
				<a >বিদেশ</a>
				<a >বিনোদন</a>
				<a >খেলা</a>
				<a >প্রবাস</a>
				<a >স্বাস্থ্য</a>
				<a >সুসংবাদ</a>
				<a >অন্যান্য...</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;

