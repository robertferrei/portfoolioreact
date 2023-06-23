import { Container } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
 

import "swiper/css";
import "swiper/css/navigation";
import Cardss from "../Cards";

function SLider() {
  return (
    <>
      <Container>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide ><Cardss/></SwiperSlide>
        <SwiperSlide> </SwiperSlide>
        <SwiperSlide> </SwiperSlide>
        <SwiperSlide> </SwiperSlide>
        <SwiperSlide> </SwiperSlide>
        <SwiperSlide> </SwiperSlide>
        <SwiperSlide> </SwiperSlide>
        <SwiperSlide> </SwiperSlide>
      
        
      </Swiper>
      </Container>
    </>
  );
}

export default SLider;
