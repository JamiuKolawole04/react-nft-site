import { useRef, useEffect } from "react";
import { Container } from "reactstrap";
import { NavLink, Link } from "react-router-dom";



export const Header = () => {
    const headerRef = useRef(null);
    const menuRef = useRef(null);

    const toggleMenu = () => menuRef.current.classList.toggle("active__menu");

    const NAV_LINKS = [
        {
            display: "Home",
            url: "/home",
        },
        {
            display: "Market",
            url: "/market",
        },
        {
            display: "Create",
            url: "/create",
        },
        {
            display: "Contact",
            url: "/contact",
        },
    ]


    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add("header__shrink");
            } else {
                headerRef.current.classList.remove("header__shrink");
            }
        });


    }, []);

    return (
        <header ref={headerRef}>
            <Container>
                <div className="navigation d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <h2 className="d-flex gap-2 align-items-center"><span className="d-flex gap-2 align-items-center"><i className="ri-fire-fill"></i></span>NFTS</h2>
                    </div>
                    <div className="nav__menu" ref={menuRef} onClick={toggleMenu}>
                        <ul className="nav__list d-flex align-items-center">
                            {
                                NAV_LINKS.map((item, index) => (
                                    <li className="nav__item" key={index}>
                                        <NavLink to={item.url} className={navClass => navClass.isActive ? "active" : ""}>{item.display}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="nav__right d-flex align-items-center gap-5">
                        <button className="btn d-flex align-items-center gap-2"> <span><i className="ri-wallet-line"></i></span> <Link to="/wallet">  Connect Wallet</Link> </button>
                        <span className="mobile__menu" onClick={toggleMenu}><i className="ri-menu-line"></i></span>
                    </div>
                </div>
            </Container>
        </header>
    );
}