import React from "react";
import Image from "next/image";
import style from "./DetailInfoTop.module.css";
import MenuItem from "@/components/layouts/MenuItem";
import { carDetailData, carStatusData } from "@/datas/staticCarData";

export default function DetailInfoTop() {
  return (
    <>
      <div className={style.carName}>{carDetailData.name}</div>
      <div className={style.review}> 150 reviews {">"} </div>
      <div className={style.carImage}>
        <Image
          src={carDetailData.src}
          width={200}
          height={200}
          alt={carDetailData.name}
          priority
        />
      </div>
      <div className={style.carStatus}>
        <ul>
          <MenuItem
            menuItem={carStatusData[0]}
            discription={true}
            status="90%"
            width="40%"
          />
          <MenuItem
            menuItem={carStatusData[1]}
            discription={true}
            status="2023.04.20"
            width="40%"
          />
          <MenuItem
            menuItem={carStatusData[2]}
            discription={true}
            status="23원/km"
            width="40%"
          />
        </ul>
      </div>
    </>
  );
}
