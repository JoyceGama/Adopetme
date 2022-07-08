import styled from "styled-components";

import dogSM from "../../assets/dog370.png";
import dogLG from "../../assets/dogDesk.png";
import dogMD from "../../assets/dogMD.png";

import catLG from "../../assets/catDesk.png";
import catMD from "../../assets/catMD.png";
import catSM from "../../assets/catSM.png";

import hamLG from "../../assets/hamLG.png";
import hamMD from "../../assets/hamMD.png";
import hamSM from "../../assets/hamSM.png";


export const SectionContainer = styled.section`
  width: 100%;
  @media (min-width: 768px){
    padding: 2em;
  }
  
  @media (min-width: 425px) {
    height: fit-content;
    padding: 1em;

    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: var(--petroleumBlue);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  
  .paws {
    position: absolute;
    top: 49%;
    right: 0;

    z-index: 1;
    width: 180px;
    height: auto;

    @media(min-width:425px) {  
      top: 75%;
    }


  }
`;

export const CarouselContainer = styled.div`
  width: 100%;
  height: 300px;

  .swiperContainer {
    width: 100%;
  }

  .imgContainer {
    width: 100%;
    height: 300px;  
    margin: 0 auto;

    @media(min-width:425px) {  
      border: 4px solid var(--orange);
      border-radius: 30px;
      width: 95%;
    }
    @media(max-width:425px){
      border-top: 4px solid var(--orange);
      border-bottom: 4px solid var(--orange);
    }
  }

  .image{
    height: 100%;
    width: 100%;
    margin: 0 auto;
    opacity: 0.8;

    background: no-repeat center; 
    background-size: cover;
    
    @media(min-width:425px) {  
      border-radius: 30px;
    }
    
    h2{
      color: var(--white);
      width: 300px;
      
      font-size: 48px;
      line-height: 58px;
      letter-spacing: 0.06em;

      text-shadow: 2px 2px 4px #000000;

      @media(max-width: 768px){
        font-size: 36px;

      }
    }

  }
  
  .cat{
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: end;

    background-image:  url(${catLG});
    
    @media(max-width:1024px){
      background-image: url(${catMD});
    }
    @media(max-width:425px){
      background-image: ${catSM};

    }
    h2{
      text-align: right;
      margin-right: 1em;
    }
  }

  .dog {
    background-image:  url(${dogLG});
    
    @media(max-width:1024px){
      background-image: url(${dogMD});
    }

    @media(max-width:425px){
      background-position: right;
      background-image: ${dogSM};
    }
  }
    .hamster{
      background-image:  url(${hamLG});

      @media(max-width:1024px){
        background-image: url(${hamMD});
      }
      
      @media(max-width:425px){
        background-image: ${hamSM};
        background-position: right;
      }
    }
`
