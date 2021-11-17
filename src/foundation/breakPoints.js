import { generateMedia } from "styled-media-query";

const mq = generateMedia({
   xs: "375px", 
   sm: "576px", //(540px)
   md: "768px", //(720px)
   lg: "992px", //(960px)
   xl: "1200px", //(1140px)
   xxl: "1400px", //(1140px)
 });

export default mq