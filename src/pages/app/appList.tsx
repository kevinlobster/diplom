import './appList.css'
import '../../styles/common.css'
import { Link } from 'react-router-dom'

export const AppList = () => {
    return (
        <div className="AppList">
            <div className="menu-app">
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
        </div>
    )
}
