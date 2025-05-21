import React from "react";
import "../css/Contact.css";
const Contact = () => {
  return (
    <div>
      <div className="header-rester mt-4">
        <div className="main-rester">
        <div className="text-rester">
          <p className="text-xl font-bold ">ร้านป้าอ้ออาหารจานเดียว</p>
          <p className="font-bold">ข้อมูลการติดต่อ</p>
          <p>เบอร์โทรศัพท์ : 000-000-0000</p>
          <p>อีเมล์ : test@gmail.com</p>
          <p>
            ที่อยู่ : 682/9 หมู่11ตลาดเคเจมอลล์ Unnamed Road ตำบล เมือง
            อำเภอเมืองเลย เลย 42000
          </p>
          <p className="font-bold">เวลาทำการ (Operating Hours)</p>
          <p>เวลาที่เปิด-ปิดของร้าน จันทร์-ศุกร์: 10:00-20:00</p>
          <p className="font-bold">วันหยุด</p>
          <p>-</p>
        </div>
        <div className="img-rester">
          <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/d5/bb/74/lounge.jpg?w=900&h=500&s=1" alt="" />
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Contact;
