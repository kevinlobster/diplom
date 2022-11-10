import './discovery.css'
import '../../styles/common.css'
import { Link } from 'react-router-dom'

export const Discovery = () => {
    return (
        <div className="discovery">
            <div>
                <h1 className="hero">Discovery</h1>
                <Link to="../create-script">
                <button className="addButton">
                    <img src="/assets/img/plus.svg"></img>
                </button>
                </Link>
            </div>
            <div>
                <div>
                    <h3>
                        Upwork
                    </h3>
                    <div>
                        Upwork script 1
                    </div>
                    <div>
                        Upwork script 2. Link to filtered jobs
                    </div>
                    <div>

                        Upwork script 3. Check similar jobs
                    </div>
                </div>
                <div>
                    <h3>
                        Telegram
                    </h3>
                    <div>
                        Upwork script 1
                    </div>
                    <div>
                        Upwork script 2. Link to filtered jobs
                    </div>
                    <div>
                        Upwork script 3. Check similar jobs
                    </div>
                </div>
                <div>
                    <h3>
                        Linkedin
                    </h3>
                    <div>
                        Upwork script 1
                    </div>
                    <div>
                        Upwork script 2. Link to filtered jobs
                    </div>
                    <div>
                        Upwork script 3. Check similar jobs
                    </div>
                </div>
            </div>
        </div>
    )
}