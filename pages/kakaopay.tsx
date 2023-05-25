import React, { useEffect } from 'react'
import qs from "qs"
import { useRouter } from 'next/router';

export default function Kakaopay() {

  const router = useRouter();

  useEffect(() => {

    const ADMIN_KEY = process.env.NEXT_PUBLIC_KAKAO_ADMIN_KEY;
    const { pg_token: token, error: kakaoServerError } = router.query;
    
    const payload = qs.stringify({
      cid: "TC0ONETIME",
      partner_order_id: "partner_order_id",
      partner_user_id: "partner_user_id",
      tid: localStorage.getItem("tid"),
      pg_token : token
    })

    console.log(payload)

    const res = fetch(
      "https://kapi.kakao.com/v1/payment/approve", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
          Authorization: `KakaoAK ${ADMIN_KEY}`
        },
        body: payload,
      }
    ).then(res => res.json()
    .then(res => {
      console.log(res)
    }))
    .catch(err => {
      console.log(err);
    })

    console.log("end")
  }, [router])


  return (
    <div>kakaopay</div>
  )
}
