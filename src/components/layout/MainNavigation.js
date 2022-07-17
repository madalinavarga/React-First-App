import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation(){
    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li><Link to='/' exact >All Meetups</Link></li>
                    <li><Link to='/new-meet'>New Meet</Link></li>
                    <li><Link to='/favorite-meet'>My Favorites Meetups</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;