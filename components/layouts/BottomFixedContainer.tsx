import React, { ReactNode } from "react";
import style from "./BottomFixedContainer.module.css";

export default function BottomFixedContainer(props: {
  children: ReactNode;
  backgroundColor?: string;
  animation?: boolean;
}) {
  return (
    <div
      className={style.container}
      style={{
        padding: 14,
        backgroundColor: `${
          props.backgroundColor === undefined
            ? "var(--billita-white)"
            : props.backgroundColor
        }`,
      }}
    >
      {props.children}
    </div>
  );
}
