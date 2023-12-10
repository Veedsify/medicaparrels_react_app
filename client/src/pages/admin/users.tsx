import { LucideSearch } from "lucide-react";

const Users = () => {
  return (
    <div className="users">
      <h2 className="welcome-message">Users</h2>
      <div className="table_holder">
        <div className="table_container">
          <div className="table_filters">
            <div className="search">
              <input type="text" placeholder="Search" />
              <button>
                <LucideSearch/>
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
          <table className="users_table">
            <thead>
              <tr>
                <th>Id</th>
                <th>FullName</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>john_tx2</td>
                <td>johnwells3@gmail.com</td>
                <td>080803803803</td>
                <td>
                  <span className="state success">Active</span>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>John Doe</td>
                <td>john_tx2</td>
                <td>johnwells3@gmail.com</td>
                <td>080803803803</td>
                <td>
                  <span className="state pending">Unverified</span>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>John Doe</td>
                <td>john_tx2</td>
                <td>joshmosh@gmail.com</td>
                <td>080803803803</td>
                <td>
                  <span className="state banned">Banded</span>
                </td>
              </tr>
            </tbody>
          </table>
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

export default Users;
