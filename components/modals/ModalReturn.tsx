import React from "react";
import style from "./ModalBookCancel.module.css"
import Image from "next/image";

export default function ModalReturn(props: any) {
  return (
    <div className={style.modalWrap}>
      <div className={style.closeBtn} onClick={() => props.setDrawer(false)}>
        <Image src="/assets/images/icons/modalCloseX.svg" width="20" height="20" alt="close" />
      </div>
      <div className={style.modalTitle}>반납하기</div>
      <div className={style.greyText}>반납장소에 무사히 도착하셨나요?</div>
      <div className={style.greyText}>반납을 진행 하시겠습니까?</div>
      <div>
        <p className={style.redText}>반납지연 수수료 안내</p>
        <div className={style.ulWrapper}>
          <ul>
            <li>수수료는 예약을 취소한 시점 기준으로 적용</li>
            <li>취소시점/대여기간에 따라 10~25% 수수료 부과</li>
            <li>실 결제금액을 기준으로 수수료가 계산됨</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
