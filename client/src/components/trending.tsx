import { Link } from "react-router-dom";
import ProductCard from "./sub/product_card";
import { TabPanel, Tabs, Tab, TabList } from "react-tabs"

const TrendingNow = () => {
  return (
    <section className="section block-what-trending">
      <div className="container">
        <div className="text-center">
          <h3 className="wow fadeInUp">What's Trending Now</h3>
        </div>

        {/* TRENDING TABS STARTS HERE 👇🏻 👇🏻 👇🏻 👇🏻 👇🏻 👇🏻 👇 */}

        <Tabs selectedTabPanelClassName="fade show active" selectedTabClassName="active">
          <div className="box-tabs box-tabs-left box-tabs-center wow fadeInRight">
            <TabList className="nav nav-tabs nav-tabs-medium" role="tablist">
              <Tab className="nav-item cursor-pointer nav-link" role="presentation">
                Mens
              </Tab>
              <Tab className="nav-item cursor-pointer nav-link" role="presentation">
                Womens
              </Tab>
            </TabList>
          </div>


          <div className="tab-content">
            <TabPanel className="tab-pane">
              <div className="box-swiper">
                <div className="row">
                  <ProductCard />
                  <ProductCard />
                </div>
                <div className="text-center mt-10">
                  <Link to="/shop?category=female" className="btn btn-black">
                    See All Products
                  </Link>
                </div>
              </div>
            </TabPanel>
            <TabPanel className="tab-pane">
              <div className="box-swiper">
                <div className="row">
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </div>
                <div className="text-center mt-10">
                  <Link to="/shop?category=female" className="btn btn-black">
                    See All Products
                  </Link>
                </div>
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default TrendingNow;
