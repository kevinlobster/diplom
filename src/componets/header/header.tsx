import { useEffect } from 'react';
import './header.css'
import '../../styles/common.css'
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

export const Header = ({ isMenuHidden }: { isMenuHidden?: boolean }) => {
    useEffect(() => {
        if (!isMenuHidden) {
            let MenuBtn = document.querySelector('.menu-btn');
            let Menu = document.querySelector('.menu');
            MenuBtn?.addEventListener('click', function () {
                MenuBtn?.classList.toggle('active');
                Menu?.classList.toggle('active');
            },)
        }
    }, []);

    const location = useLocation();

    const paths = [ '/', '/login', '/app-list' ]

    const isBurgerVisible = !paths.includes(location.pathname)

    return (
        <header>
            <div className="menu-btn" style={ { display: isBurgerVisible ? "flex" : "none" } }>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="headerImg">
                <img src="/assets/img/lead-table.svg"></img>
            </div>
            <div className="menu" style={ { display: isBurgerVisible ? "flex" : "none" } }>
                <nav>
                    <ul>
                        <li>
                            <Link to="/lead-table">
                                <img src="assets/img/lead-table.svg"></img>
                                <span>
                                    Lead Table
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/tasks">
                                <a href="#">
                                    <img src="assets/img/tasks.svg"></img>
                                    <span>
                                        Tasks
                                    </span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/discovery">
                                <a href="#">
                                    <img src="assets/img/discovery.svg"></img>
                                    <span>
                                        Discovery
                                    </span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/analizer">
                                <a href="#">
                                    <img src="assets/img/analizer.svg"></img>
                                    <span>
                                        Analizer
                                    </span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
