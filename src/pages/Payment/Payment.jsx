import React from "react";
import Card from "react-credit-cards";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData
} from "./utils";

import "react-credit-cards/es/styles-compiled.css";
import { selectCartContent } from "../../redux/cart/selectors";
import { selectIsAuth } from "../../redux/auth/slice";
import { fethOrder } from "../../redux/cart/asyncActions";

const Payment = () => {

  const [number, setNumber] = React.useState('')
  const [name, setName] = React.useState('')
  const [expiry, setExpiry] = React.useState('')
  const [cvc, setCvc] = React.useState('')
  const [issuer, setIssuer] = React.useState('')
  const [focused, setFocused] = React.useState('')
  const [formData, setFormData] = React.useState(null)

  const dispatch = useDispatch()
  const cart = useSelector(selectCartContent)
  const isAuth = useSelector( selectIsAuth )
  const navigate = useNavigate();
  const location = useLocation()

  const handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      // this.setState({ issuer });
      setIssuer(issuer)
    }
  };

  const handleInputFocus = ({ target }) => {
    // this.setState({
    //   focused: target.name
    // });
    setFocused(target.name)
  };

  const handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
      setNumber(target.value)
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
      setExpiry(target.value)
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
      setCvc(target.value)
    }

    // this.setState({ [target.name]: target.value });
  };

  const checkout = (args) => {
    try {
      dispatch(fethOrder(args))
    } catch (err) {
      console.log(err);
      alert( 'не удалось оформить заказ')
      console.log(err);
    }
  }


  const handleSubmit = e => {
    e.preventDefault();
    const { issuer } = this.state;
    const formData = [...e.target.elements]
      .filter(d => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    this.setState({ formData });
    this.form.reset();
  };

    if ( !isAuth && !window.localStorage.getItem('token') ) {
      return <Navigate to='/auth' />
    }
  

    return (
      <div key="Payment">
        <div className="App-payment">
          <h1>оплата заказа онлайн</h1>
          <Card
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focused}
            callback={handleCallback}
          />
          <form className="ppp" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="tel"
                name="number"
                className="form-control"
                placeholder="Card Number"
                pattern="[\d| ]{16,22}"
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />

            </div>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
            <div className="row">
              <div className="col-6">
                <input
                  type="tel"
                  name="expiry"
                  className="form-control"
                  placeholder="Valid Thru"
                  pattern="\d\d/\d\d"
                  required
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </div>
              <div className="col-6">
                <input
                  type="tel"
                  name="cvc"
                  className="form-control"
                  placeholder="CVC"
                  pattern="\d{3,4}"
                  required
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </div>
            </div>
            <input type="hidden" name="issuer" value={issuer} />
            <div className="form-actions">
              <button onClick={() => checkout(cart)} className="btn btn-primary btn-block">PAY</button>
            </div>
          </form>
          {formData && (
            <div className="App-highlight">
              {formatFormData(formData).map((d, i) => (
                <div key={i}>{d}</div>
              ))}
            </div>
          )}
          <hr style={{ margin: "60px 0 30px" }} />
          
         
        </div>
       
      </div>
    );
  }


export { Payment }