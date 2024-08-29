import './index.css'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <input type="checkbox" id="check" />
            <nav>
                <div className="icon">
                    <Link to="/"> <p>Exo</p></Link></div>
                <ol>
                    <li><Link to="/greeting"> Greeting </Link>  </li>
                    <li> <Link to="/" > Compteurs</Link></li>
                   <li><Link to="/list"> Liste the name </Link>  </li>
                   
                   
                </ol>
                <label htmlFor="check" className='bar' >
                    <span className="fa fa-bars" id="bars"></span>
                    <span className="fa fa-times" id="times"></span>
                </label>
            </nav>
        </>
    )
}

export default Header