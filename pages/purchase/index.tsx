import axios from 'axios';
import React, { useEffect } from 'react'
import qs from "qs";
import router from 'next/router';

export default function Page() {

  useEffect(() => {
    const payload = qs.stringify({
      cid: "TC0ONETIME",
      partner_order_id: "partner_order_id",
      partner_user_id: "partner_user_id",
      item_name: "item_name",
      quantity: 1,
      total_amount: 10000,
      tax_free_amount: 0,
      approval_url: "http://localhost:3000/kakaopay",
      cancel_url: "http://localhost:3000/kakaopay",
      fail_url: "http://localhost:3000/kakaopay"
    })
    const ADMIN_KEY = process.env.NEXT_PUBLIC_KAKAO_ADMIN_KEY;
    const res = fetch("https://kapi.kakao.com/v1/payment/ready", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        Authorization: `KakaoAK ${ADMIN_KEY}`
      },
      body: payload,
    })
    .then(res => res.json()
      .then(res => {
        localStorage.setItem("tid", res.tid);
        router.push(res.next_redirect_pc_url);
      }))
  }, []);
  
  return (
    <div>index</div>
  )
}
