import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid"; //เอาไว้สร้าง id ไม่ให้เหมือนกันป้องกันการลบ
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Menu.css";

const Menu = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("0"); // 0 = ทั้งหมด
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [note, setNote] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
  const [quantity, setQuantity] = useState("");
  const [egg, setEgg] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8081/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8081/products/${selectedCategory}`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, [selectedCategory]);

  const navigate = useNavigate();

  // const handleAddToOrder = (productId) => {
  //   localStorage.setItem("selectedProductId", selectedProduct.id);
  //   navigate("/about");
  // };

  const handleAddToOrder = (
    productId,
    productName,
    productPrice,
    note,
    specialRequest,
    quantity,
    egg
  ) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    // 2. เพิ่มของใหม่เข้าไป
    const newItem = {
        cartItemId: uuidv4(), // id ที่ไม่ซ้ำกันทุกครั้ง
        id: productId,
        name: productName,
        price: productPrice,
        note: note,
        specialRequest: specialRequest,
        quantity: quantity,
        egg: egg,
      }

    const newCart = [...existingCart, newItem];

    localStorage.setItem("cart", JSON.stringify(newCart));
    alert(`เพิ่ม ${productName} ลงในคำสั่งซื้อแล้ว!`);

    // 5. ไปหน้าสรุปรายการ
    navigate("/about");
  };

  return (
    <div>
      <div className="categories-list mt-1">
        {/* <select
          className="w-1/4 p-2 border border-gray-300 rounded"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="0">ทั้งหมด</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select> */}
        <div className="flex flex-wrap gap-2 mt-1">
          {/* ปุ่ม "ทั้งหมด" */}
          <button
            onClick={() => setSelectedCategory("0")}
            className={`px-4 py-2 rounded-full border text-sm transition ${
              selectedCategory === "0"
                ? "bg-orange-500 text-white border-orange-500"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-600 hover:text-white"
            }`}
          >
            ทั้งหมด
          </button>

          {/* ปุ่มแต่ละหมวด */}
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id.toString())}
              className={`px-4 py-2 rounded-full border text-sm transition ${
                selectedCategory === cat.id.toString()
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-600 hover:text-white"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>
      <div className="product-list">
        {products.length === 0 ? (
          <p>ไม่พบสินค้า</p>
        ) : (
          products.map((product) => (
            <div key={product.id} className="">
              <div className="product-list-result">
                <img
                  className="product-list-image"
                  src="https://images.unsplash.com/photo-1464454709131-ffd692591ee5?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <h3 className="text-gray-700 font-bold text-lg mt-4 mb-3 text-center">
                  {product.product_name}
                </h3>
                <div className="my-2 border-t-2 border-gray-300"></div>
                <p>หมวดหมู่: {product.category_name}</p>
                <p>ราคา: {product.product_price} บาท</p>
                <p>รายละเอียด: {product.product_detail}</p>
                <button
                  onClick={() => {
                    setSelectedProduct(product);
                    setIsOpen(true);
                  }}
                  className="mt-4 w-full bg-orange-500 text-white py-2 rounded-xl hover:bg-orange-700 transition duration-300"
                >
                  สั่งซื้อ
                </button>
              </div>
              {isOpen && selectedProduct && (
                <div className="modal-overlay" onClick={() => setIsOpen(false)}>
                  <div
                    className="modal-content"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <h2 className="product-name">
                      {selectedProduct.product_name}
                    </h2>
                    <div className="product-menu-main">
                      <div className="product-menu">
                        <div className="image-menu">
                          <img
                            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
                            alt=""
                          />
                          <div className="image-menu-two">
                            <img
                              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
                              alt=""
                            />
                            <img
                              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
                              alt=""
                            />
                          </div>
                          <h2 className="mt-6 text-lg font-bold">คำอธิบาย</h2>
                          <p>
                            เมนูยอดฮิตของคนไทย รสชาติเข้มข้นเผ็ดร้อน
                            หอมกลิ่นใบกระเพรา
                            ผัดคลุกเคล้ากับหมูสับและเครื่องปรุงรส
                            ทานคู่กับข้าวสวยร้อนๆ และไข่ดาวจะอร่อยยิ่งขึ้น
                          </p>

                          <h2 className="mt-4 text-lg font-bold">ส่วนผสม</h2>
                          <p>1 หมูสับ</p>
                          <p>2 ใบกระเพรา </p>
                          <p>3 กระเทียมสับ </p>
                          <p>4 พริกขี้หนูสับ </p>
                          <p>5 ซอสหอยนางรม</p>
                          <p> 6 น้ำปลา </p>
                          <p>7 ซีอิ๊วขาว </p>
                          <p>8 น้ำตาลทราย </p>
                          <p>9 น้ำมันพืช</p>
                          <p>{selectedProduct.product_detail}</p>
                        </div>
                      </div>
                      <div className="product-menu-choose">
                        <h2 class="font-bold text-gray-900  m-2">
                          ระดับการเสิร์ฟ :
                        </h2>
                        <select
                          className="w-1/2 p-2 border border-gray-300 rounded"
                          value={specialRequest}
                          onChange={(e) => setSpecialRequest(e.target.value)}
                        >
                          <option value="">เลือกระดับการเสิร์ฟ</option>
                          <option value="ธรรมดา">ธรรมดา</option>
                          <option value="พิเศษ">พิเศษ</option>
                        </select>
                        <h2 class="font-bold text-gray-900  m-2">
                          คำสั่งพิเศษ :
                        </h2>
                        <input
                          className="border border-gray-400 p-1 rounded-lg w-full"
                          value={note}
                          onChange={(e) => setNote(e.target.value)}
                          type="text"
                          placeholder="โปรดใส่คำสั่งสั่งพิเศษที่ต้องการ"
                        />
                        <h2 class="font-bold text-gray-900  m-2">
                          ใส่ไข่หรือไม่ :
                        </h2>
                        <select
                          className="w-1/4 p-2 border border-gray-300 rounded"
                          value={egg}
                          onChange={(e) => setEgg(e.target.value)}
                        >
                          <option value="">เลือก</option>
                          <option value="ใส่">ใส่</option>
                          <option value="ไม่ใส่">ไม่ใส่</option>
                        </select>
                        <h2 class="font-bold text-gray-900  m-2">จำนวน :</h2>
                        <input
                          className="border border-gray-400 p-1 rounded-lg w-1/4"
                          type="number"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                          placeholder="0"
                        />
                        <h2 class="font-bold text-gray-900  m-2">
                          ราคารวม : {selectedProduct.product_price} บาท
                        </h2>
                        <div className="grid grid-cols-1 gap-4 mt-10 place-items-center">
                          <button
                            className="border border-gray-400 p-1 rounded-lg w-full"
                            onClick={() => {
                              handleAddToOrder(
                                selectedProduct.id,
                                selectedProduct.product_name,
                                selectedProduct.product_price,
                                note,
                                specialRequest,
                                quantity,
                                egg
                              );
                            }}
                          >
                            เพิ่มลงในคำสั่งซื้อ
                          </button>
                          <button
                            onClick={() => setIsOpen(false)}
                            className="mt-1 w-full bg-red-500 text-white py-1 rounded-xl hover:bg-red-700 transition duration-300 "
                          >
                            ปิด
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Menu;
