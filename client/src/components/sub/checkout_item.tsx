const CheckoutItems = () => {
  return (
    <div className="item-cart">
      <div className="item-cart-image">
        <img src="/imgs/page/cart/sp.png" alt="Guza" />
      </div>
      <div className="item-cart-info">
        <div className="item-cart-info-1">
          <a className="text-17-medium" href="#">
            Ball Crew Shirt - x1
          </a>
          <p className="box-color">
            <span className="body-p2 neutral-medium-dark">Color:</span>
            <span className="body-p2 neutral-dark">Navy</span>
          </p>
          <p className="box-size">
            <span className="body-p2 neutral-medium-dark">Size:</span>
            <span className="body-p2 neutral-dark">S</span>
          </p>
        </div>
        <div className="item-cart-info-2">
          <p className="body-p2">$24.00</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItems;
