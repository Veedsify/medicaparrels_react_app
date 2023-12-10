import ProductCard from "./sub/product_card";

const ShopSuggestions = () => {
    return (
      <section className="section block-may-also-like">
        <div className="container">
          <div className="text-center">
            <h3 className="mb-60">You May Also Like</h3>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    );
}

export default ShopSuggestions;