import React, { useEffect, useState } from "react";
import "../css/About.css";

const About = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  //ฟังก์ชันลบเฉพาะ ID ที่ระบุ
  const handleRemoveItem = (cartItemIdToDelete) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = existingCart.filter(
      (item) => item.cartItemId !== cartItemIdToDelete
    );

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart); //ให้ React อัปเดต UI
    alert("ยกเลิกคำสั่งซื้อเรียบร้อยแล้ว");
  };

  return (
    // <div>
    //   <div className="">
    //     <h2>หน้ารายการคำสั่งซื้อ</h2>
    //     {cart.length === 0 ? (
    //       <p>ยังไม่มีสินค้าในคำสั่งซื้อ</p>
    //     ) : (
    //       <ul>
    //         {cart.map((item, index) => (
    //           <li key={index}>
    //             {item.name} - ราคา {item.price} บาท (ID: {item.id})
    //             <button
    //               className="mt-4 p-2 bg-red-500 text-white rounded ml-4 hover:bg-red-800 "
    //               onClick={() => {
    //                 const confirmCannel = window.confirm(
    //                   `คุณแน่ใจว่าต้องการยกเลิกคำสั่งซื้อเมนู ${item.name} จริงหรือไม่?`
    //                 );
    //                 if (confirmCannel) {
    //                   handleRemoveItem(item.id);
    //                   alert("ยกเลิกคำสั่งซื้อเรียบร้อยแล้ว");
    //                 }
    //               }}
    //             >
    //               ยกเลิกรายการ
    //             </button>
    //           </li>
    //         ))}
    //       </ul>
    //     )}
    //     <button
    //       className="mt-6 ml-5 p-2 bg-red-500 text-white rounded hover:bg-red-800"
    //       onClick={() => {
    //         const confirmCannel = window.confirm(
    //           `คุณแน่ใจว่าต้องการยกเลิกคำสั่งซื้อทั้งหมดจริงหรือไม่?`
    //         );
    //         if (confirmCannel) {
    //           localStorage.removeItem("cart");
    //           setCart([]);
    //           alert("ยกเลิกคำสั่งซื้อเรียบร้อยแล้ว");
    //         }
    //       }}
    //     >
    //       ล้างรายการทั้งหมด
    //     </button>
    //   </div>
    // </div>
    <div className="">
      <div className="about-main">
        <div className="about-wait">
          <h2> รายการรอคำสั่งซื้อ</h2>
          <h2> โต๊ะที่ 7</h2>
        </div>
        <div className="about-card-main">
          {cart.length === 0 ? (
            <p>ยังไม่มีสินค้าในคำสั่งซื้อ</p>
          ) : (
            cart.map((item, index) => (
              <div className="about-card" key={item.cartItemId}>
                <div className="about-card-image">
                  <img
                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
                <div className="about-card-text">
                  <p>เมนู : {item.name}</p>
                  <p>id : {item.id}</p>
                  <p>id : {item.cartItemId}</p>
                  <p>ระดับการเสิร์ฟ : {item.specialRequest || "ธรรมดา"}</p>
                  <p>คำสั่งพิเศษ: {item.note || "ไม่มี"}</p>
                  <p>ใส่ไข่หรือไม่ : {item.egg || "ไม่ใส่"}</p>
                  <p>จำนวน {item.quantity || "1"} รายการ</p>
                  <p>ราคา {item.price} บาท</p>
                  <div className="">
                    <button
                      className="w-1/3 mt-4 p-2 bg-red-500 text-white rounded  hover:bg-red-800 "
                      onClick={() => {
                        const confirmCannel = window.confirm(
                          `คุณแน่ใจว่าต้องการยกเลิกคำสั่งซื้อเมนู ${item.name} จริงหรือไม่?`
                        );
                        if (confirmCannel) {
                          handleRemoveItem(item.cartItemId);
                        }
                      }}
                    >
                      ยกเลิกรายการ
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="about-result mt-3">
          <p>ราคารวม : 1M บาท</p>
        </div>
        <div className="about-con text-center">
          <button className="w-1/3 mt-4 p-2 bg-green-500 text-white rounded  hover:bg-green-800 ">
            ยืนยันการสั่งซื้อ
          </button>
          <button
            className="w-1/3 ml-2 mt-4 p-2 bg-red-500 text-white rounded  hover:bg-red-800 "
            onClick={() => {
              const confirmCannel = window.confirm(
                `คุณแน่ใจว่าต้องการยกเลิกคำสั่งซื้อทั้งหมดจริงหรือไม่?`
              );
              if (confirmCannel) {
                localStorage.removeItem("cart");
                setCart([]);
                alert("ยกเลิกคำสั่งซื้อเรียบร้อยแล้ว");
              }
            }}
          >
            ยกเลิกคำสั่งซื้อทั้งหมด
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
