import React from "react";
import { Link } from "react-router-dom";
import { MdFastfood } from "react-icons/md";
import { CiLogin } from "react-icons/ci";

const Navbar = () => {
  return (
    <div>
      <nav
        className="bg-orange-600 shadow-lg flex item-center 
        justify-around py-5 px-32 flexed top-0 left-0 w-full"
      >
        <Link to="/">
          <span className="font-semibold text-lg flex item-center gap-3 text-orange-900">
            <MdFastfood className="text-4xl text-white" />
            <span className="font-semibold text-2xl text-white">MenuDigital</span>
          </span>
        </Link>

        <div className="flex item-center gap-5 text-black ">
          <form className="flex items-center">
            <input
              type="text"
              placeholder="ค้นหาเมนูอาหาร"
              className="py-1 px-3 text-lg text-black rounded-2xl focus:outline-none bg-white"
            />
            <button
              type="submit"
              className="py-1 px-3 text-lg font-light text-gray-600 bg-orange-200 hover:bg-orange-500 rounded-2xl ml-2"
            >
              ค้นหา
            </button>
          </form>

          <Link
            to="/"
            className="py-1 px-3 text-lg font-light text-white hover:text-orange-300 rounded-2xl
            hover:bg-orange-700 transition duration-300 "
          >
            เมนูอาหาร
          </Link>

          <Link
            to="/about"
            className="py-1 px-3 text-lg font-light text-white hover:text-orange-300 rounded-2xl
            hover:bg-orange-700 transition duration-300 "
          >
            คำสั่งซื้อ
          </Link>

          <Link
            to="/contact"
            className="py-1 px-3 text-lg font-light text-white hover:text-orange-300 rounded-2xl
            hover:bg-orange-700 transition duration-300 "
          >
            ติดต่อ
          </Link>

          <Link
            to="/products"
            className="py-1 px-3 text-lg font-light text-white hover:text-orange-300 rounded-2xl
            hover:bg-orange-700 transition duration-300 "
          >
            <CiLogin className="mt-1 text-2xl" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
