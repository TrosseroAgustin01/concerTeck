import React from "react";
import style from "./Profile.module.css";
import NavBarProfile from "./NavBarProfile/NavBarProfile";
import Cart from '../Cart/Cart';



export default function ProfileUser() {
  return (
    <div className={style.containerProfileUser}>
      <NavBarProfile />
      <div className={style.containerDataUser}>
      <Cart/>
      </div>
    </div>
  );
}
