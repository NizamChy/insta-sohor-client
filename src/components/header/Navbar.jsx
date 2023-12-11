import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then().catch();
  };

  return (
    <div>
      {/* <nav className="grid gap-2 md:flex justify-between py-7 mx-14 md:mx-5"> */}

      <div className="navbar bg-base-100 grid grid-cols-1 md:flex">
        <div className="flex-1">
          {/* <NavLink to="/"> */}
          <Logo></Logo>
          {/* </NavLink> */}
        </div>

        {/* my navlinks */}
        <div className="flex-1 text-center">
          <ul className="lg:flex gap-5 lg:text-lg font-semibold grid grid-cols-3 mx-auto">
            <li className="">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white px-2 py-1 rounded-lg  bg-gradient-to-r from-rose-700 to-pink-600"
                    : "border border-gray-200 rounded btn-ghost"
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/addblog"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white px-2 py-1 rounded-lg  bg-gradient-to-r from-rose-700 to-pink-600"
                    : "border border-gray-200 rounded btn-ghost"
                }
              >
                Add Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allblogs"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white px-2 py-1 rounded-lg  bg-gradient-to-r from-rose-700 to-pink-600"
                    : "border border-gray-200 rounded btn-ghost"
                }
              >
                {/* <span className="flex items-center"> */}
                All Blogs
                {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg> */}
                {/* </span> */}
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/featured"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white px-2 py-1 rounded-lg  bg-gradient-to-r from-rose-700 to-pink-600"
                    : "border border-gray-200 rounded btn-ghost"
                }
              >
                Featured
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/wishlist"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white px-2 py-1 rounded-lg  bg-gradient-to-r from-rose-700 to-pink-600"
                    : "border border-gray-200 rounded btn-ghost"
                }
              >
                Wishlist
              </NavLink>
            </li>

            {/* login  */}
            <li className="hidden lg:flex">
              <NavLink
                to="/register"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white px-2 py-1 rounded-lg  bg-gradient-to-r from-rose-700 to-pink-600"
                    : "border border-gray-200 rounded btn-ghost"
                }
              >
                Register
              </NavLink>
            </li>
            {user ? (
              <li
                onClick={handleSignOut}
                className="cursor-pointer btn-ghost border border-gray-200 rounded"
              >
                Log out
              </li>
            ) : (
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-white px-2 py-1 rounded-lg  bg-gradient-to-r from-rose-700 to-pink-600"
                      : "border border-gray-200 rounded btn-ghost"
                  }
                >
                  Log in
                </NavLink>
              </li>
            )}
          </ul>
        </div>

        {/* my navlinks */}

        <div className="flex-none grid justify-end absolute top-10 right-7 sm:static sm:justify-start sm:right-auto">
          <div className="dropdown dropdown-end sm:dropdown-start">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {/* <img src="https://i.ibb.co/rF8XjJW/image.png" />  */}
                {user && user?.photoURL ? (
                  <img src={user?.photoURL} alt="User Avatar" />
                ) : (
                  <img src="/images/profile3.png" alt="Default Avatar" />
                )}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  {user && (
                    <span style={{ fontSize: "15px", fontWeight: "500" }}>
                      {user?.displayName}
                    </span>
                  )}
                </a>
              </li>
              <li>
                {user && (
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "blue",
                    }}
                  >
                    {user?.email}
                  </span>
                )}
              </li>
              {/* profile  */}
              <li>
                {
                  user && (
                    <NavLink
                    to="/profile"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-white px-2 py-1 rounded-lg bg-gradient-to-r from-rose-700 to-pink-600"
                        : ""
                    }
                    style={{ fontSize: "15px", fontWeight: "500" }}
                  >
                    Profile
                  </NavLink>
                  )
                }
              </li>
              {/* profile  */}
              <li>
                {user ? (
                  <p
                    onClick={handleSignOut}
                    className="cursor-pointer"
                    style={{ fontSize: "15px", fontWeight: "500" }}
                  >
                    Log out
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-rose-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                      />
                    </svg>
                  </p>
                ) : (
                  <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-white px-2 py-1 rounded-lg bg-gradient-to-r from-rose-700 to-pink-600"
                        : ""
                    }
                    style={{ fontSize: "15px", fontWeight: "500" }}
                  >
                    Log in
                  </NavLink>
                )}
              </li>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-white px-2 py-1 rounded-lg bg-gradient-to-r from-rose-700 to-pink-600"
                      : ""
                  }
                  style={{ fontSize: "15px", fontWeight: "500" }}
                >
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* </nav> */}
    </div>
  );
};

export default Navbar;
