import { LogoSvg } from '../LogoSvg/LogoSvg';
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';
import cartImg from "../../assets/img/cart.svg" 


import styles from './Header.module.scss'
import { useEffect, useRef } from 'react';
import { selectCartContent } from '../../redux/cart/selectors';

const Header: React.FC = (props: any) => {
    
    const firstRender = useRef(true)
    const cart = useSelector(selectCartContent)
    const totalAmount = cart.reduce((sum: number, curr: {price: number, count: number}) => curr.price * curr.count + sum, 0)

    useEffect(() => {
        if (!firstRender.current) {
            const json = JSON.stringify(cart)
            localStorage.setItem('cart', json)
        }
        
        firstRender.current = false
    }, [cart])

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
                        <span className="cart__total">{totalAmount} ₽</span>
                    </li>
                    <li className={styles.accaunt}>
                        <img src={cartImg} height={40} alt="cart"></img>
                        <span className={styles.count}>{cart.length}</span>
                    </li>
                </ul>
            </Link>
            </div>
        </header>
    )
}

export {Header} 