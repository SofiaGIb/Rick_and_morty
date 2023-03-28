import SearchBar from "../SearchBar/SearchBar"
import { Link, useLocation } from "react-router-dom"
import styles from "./Nav.module.css";

const Nav = ({onSearch}) =>{
    const url = useLocation()
    if(url.pathname !== '/'){
        return (
            <nav className={styles.NavBar}>
                <div className={styles.menuLists}>
                <SearchBar onSearch={onSearch}/>
                <div className={styles.menuLinks}>
                    <Link to='/about'>
                        <h3>About</h3>
                    </Link>
                    <Link to='/home'>
                        <h3>Home</h3>
                    </Link>
                    <Link to = '/favorites'>
                        <h3>Favorites</h3>
                    </Link>
                </div>
                </div>
            </nav>
        )
    }
    return
}


export default Nav;