import ProductCard from "./sub/product_card";

const TopProducts = () => {
  return (
    <section className="section block-trending">
      <div className="container">
        <div className="text-center">
          <h3 className="wow fadeInLeft">Top Products</h3>
        </div>
        <div className="row mt-40">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default TopProducts;
