import React from 'react';
import Button from '../button/button';
import info from '../../assets/images/info.png';
import mail from '../../assets/images/mail.png';


function ShippingInfo(props) {
  
  const prod = props.prod;

  return ( 
<div className="shipping-info">
    <div className="shipping-info_container">
      <div className="shipping-info_content">
        <div className="shipping-info_copy">
          <span className="shipping-info_copy--underline">Ship to {prod.shipping.method.country} by {prod.shipping.method.title} </span>
          <span className="shipping-info_copy--icon">Lead time <b>{prod.shipping.lead_time.value}</b><img className="icon" src={info} alt=""/> </span>
          <span className="shipping-info_copy--icon">Shiping time <b>{prod.shipping.method.shipping_time.value}</b> <img className="icon" src={info} alt=""/> </span>
        </div>
        <span className="shipping-info_price"> {prod.shipping.method.cost.currency.symbol}{prod.shipping.method.cost.value} </span>
      </div>
      <Button modifier="primary" name="Login to Purchase" />
      <Button modifier="secondary" name="Contact the Supplier" icon={mail} />
    </div>

  </div>
  )

  
}

export default ShippingInfo;