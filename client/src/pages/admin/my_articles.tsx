import { LucideSearch } from "lucide-react";
import Article from "./components/article";

const MyArticles = () => {
  return (
    <div className="blogs">
      <h2 className="welcome-message">My Articles</h2>
      <div className="blogs_holder">
        <div className="blogs_container">
          <div className="table_filters">
            <div className="search">
              <input type="text" placeholder="Search" />
              <button>
                <LucideSearch />
              </button>
            </div>
            <div className="filter">
              <select name="filter" id="filter">
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="unverified">Unverified</option>
                <option value="banned">Banned</option>
              </select>
            </div>
            <div className="sort">
              <select name="sort" id="sort">
                <option value="latest">Latest</option>
                <option value="oldest">Oldest</option>
              </select>
            </div>
          </div>
        </div>
        <div className="articles">
          <Article />
          <Article />
          <Article />
          <Article />
        </div>
        <div className="tabs">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>●●●</button>
        </div>
      </div>
    </div>
  );
};

export default MyArticles;
