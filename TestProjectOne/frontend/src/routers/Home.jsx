import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/home.css";
import axios from "axios";
import { Outlet } from "react-router-dom";
import Slider from "../function/Slider";
import Menu from "../function/Menu";

const Home = () => {
  const [product, setProduct] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null); // เก็บค่าที่เลือก
  const [selectedEgg, setSelectedEgg] = useState(null); // เก็บค่าที่เลือกไข่

  //ดึงข้อมูลทั้งหมด
  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="body-home">
      <div className="body-main">
        <div className="img-home">
          <Slider />
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default Home;
