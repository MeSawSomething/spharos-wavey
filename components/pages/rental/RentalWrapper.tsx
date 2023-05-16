import React, { useEffect, useState } from "react";
import RentalTop from "./RentalTop";
import RentalMiddle from "./RentalMiddle";
import style from "./RentalWrapper.module.css";
import BottomFixedContainer from "@/components/layouts/BottomFixedContainer";
import Button from "@/components/ui/Button";
import Drawer from "@mui/material/Drawer";
import ModalActionToPay from "@/components/modals/ModalActionToPay";
import Box from "@mui/material/Box";
import ModalBookCancel from "@/components/modals/ModalBookCancel";

export default function RentalWrapper() {
  // useEffect(() => {
  //   const getData = async () => {
  //     const result = await axios.get(`https://api-billita.xyz/rental/`);
  //   };
  //   getData();
  // },[]);
  const [drawer, setDrawer] = useState(false);

  return (
    <main>
      <Drawer
        open={drawer}
        PaperProps={{
          sx: { width: 390, borderTopLeftRadius: 18, borderTopRightRadius: 18 },
        }}
        anchor="bottom"
        variant="temporary"
      >
        <Box position="relative" width="100%" height="370px">
          <ModalBookCancel setDrawer={setDrawer} />

          <BottomFixedContainer>
            <Button
              btnType={"button"}
              btnEvent={() => alert("action")}
              shadow={true}
            >
              네, 진행해주세요
            </Button>
          </BottomFixedContainer>
        </Box>
      </Drawer>

      <RentalTop
        rentalId={undefined}
        carModel={undefined}
        maker={undefined}
        charge={undefined}
        imageUrl={undefined}
      />
      <RentalMiddle
        fare={undefined}
        startTime={undefined}
        endTime={undefined}
        totalRentTime={undefined}
        billitazone={undefined}
        rentalfee={undefined}
        insurancefee={undefined}
      />
      <BottomFixedContainer>
        <div className={style.twoBtnWrap}>
          <Button
            btnType={"reset"}
            btnEvent={() => setDrawer(true)}
            shadow={true}
          >
            대여취소 색깔바꿔주세염
          </Button>
          <Button
            btnType={"button"}
            btnEvent={() => alert("action")}
            shadow={true}
          >
            결제하기 5030원
          </Button>
        </div>
      </BottomFixedContainer>
    </main>
  );
}
