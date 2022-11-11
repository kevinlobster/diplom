import '../../styles/common.css'
import './login.css'

export const Login = () => {
    return (
            <div className="login">
                <img className="logo" src={"assets/img/logo.svg"} />
                <form className="loginSection" >
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your email..." />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Your password..." />
                <input type="submit" className="submit" id="submit" value="Submit" />
                </form>
            </div>
    )
}
