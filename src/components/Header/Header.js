import { LogoSvg } from '../LogoSvg/LogoSvg';
import {Link} from "react-router-dom";
import cartImg from "../../assets/img/cart.svg" 




import styles from './Header.module.scss'

const Header = (props) => {
    return(
        <header className={styles.header}>
            <Link to="/">
                <div className={styles.logo + " cp"}>
                    <LogoSvg className={styles.logo_img} fill={'#FF1493'} />
                </div>
            </Link>
            
            <div className={styles.buttons}>
            <Link to="/cart">
                <ul className={styles.cart}>
                    <li className='cartLi' onClick={props.opnCart}>
                        <span className="cart__total">{props.cartTotal} 520 ₽</span>
                    </li>
                    <li className={styles.accaunt}>
                        <img src={cartImg} height={50} alt="cart"></img>
                        <span className={styles.count}>3</span>
                    </li>
                </ul>
            </Link>
            </div>
        </header>
    )
}

export {Header}