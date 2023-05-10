import React from "react";
import style from "./index.module.css";
import SimpleBackLayout from "@/components/layouts/simpleBack/SimpleBackLayout";
import SectionTitle from "@/components/ui/SectionTitle";
import LicenseType from "./LicenseType";
import PersonalInfo from "./PersonalInfo";
import BottomFixedContainer from "@/components/layouts/BottomFixedContainer";
import Button from "@/components/ui/Button";

export default function Page() {
  return (
  <main>
    <section>
      <div className={style.sectionWrap}>
        <SectionTitle fontSize={0.85}>운전면허정보 입력</SectionTitle>
        <LicenseType />
        <SectionTitle fontSize={0.85}>개인정보 입력</SectionTitle>
        <PersonalInfo />
      </div>
      <BottomFixedContainer>
        <Button btnType={"button"} btnEvent={() => alert("g")} shadow={true}>
          등록하기
        </Button>
      </BottomFixedContainer>
    </section>
  </main>
  );
}

Page.getLayout = function getLayout(Page: React.ReactNode) {
  return <SimpleBackLayout title="운전면허증 등록">{Page}</SimpleBackLayout>;
};