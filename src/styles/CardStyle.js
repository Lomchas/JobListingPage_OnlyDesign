import styled from "styled-components";



export const CardsContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;


  @media only screen and (max-width: 570px){
    gap: 4rem;
  }
`;

export const CardCard = styled.div`
  background-color: rgba(255, 255, 255);
  width: 85%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
  padding: 10px;
  border-radius: 0.5rem;
  gap: .5rem;
  transition: all .3s;

  &:hover{ 
      transform: scale(1.03);
  }

  @media screen and (max-width: 950px) {
    width: 90%;
  }

  @media screen and (max-width: 570px) {
      width: 80%;
      flex-direction: column;
      position: relative;
  }
`;

export const LogoDiv = styled.div`
  width: 15%;
  height: 100%;
  margin: 0;
  min-width: 150px;

  
  @media screen and (max-width: 570px) {
      width: 100px;
      height: 80px;
      position: absolute;
      top: -2rem;
      left: 2rem;
  }
`;
export const ImgLogo = styled.img`
  width: 65%;
  margin: 0.7rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 950px) {
    margin: 0.5rem auto;
  }

  @media screen and (max-width: 570px) {
      width: 80px;
      height: 80px;
      margin: 0;
  }
`;

export const ContainerInfo = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;


  @media screen and (max-width: 950px) {
    width: 30%;
  }

  @media screen and (max-width: 570px) {
    width: 95%;
    padding: 0 1rem;
    padding-top: 2.5rem;
    
  }
`;

export const CardHeader = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;

  @media screen and (max-width: 570px) {
      gap: 2rem;
  }
`;
export const CardNameCompany = styled.h6`
  color: #639a96;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: calc(.6em + 1vw);


  @media screen and (max-width: 570px) {
    font-size: calc(1em + 1vw);
  }
`;
export const CardLabelsDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 50%;
  gap: .5rem;

  @media screen and (max-width: 950px) {
    width: 70%;
  }

  @media screen and (max-width: 570px) {
    width: 80%;

  }
`;
export const NewLabel = styled.p`
  background: #639a96;
  text-align: center;
  padding: 0.4rem;
  margin: 0;
  border-radius: 30px;
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: calc(.1rem + 1vw);

  @media screen and (max-width: 570px) {
    font-size: calc(.8em + 1vw);
  }
`;

export const FeatureLabel = styled.p`
  background: #2d3837;
  text-align: center;
  padding: 0.4rem;
  margin: 0;
  border-radius: 30px;
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: calc(.1rem + 1vw);


  @media screen and (max-width: 570px) {
    font-size: calc(.8em + 1vw);
  }
`;

export const CardBody = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 15px;

  @media screen and (max-width: 570px) {
    margin: .5rem;
  }
`;

export const PositionTitle = styled.h3`
  font-family: "Roboto", sans-serif;
  font-size: calc(.6em + 1vw);


  @media screen and (max-width: 570px) {
    font-size: calc(1.5em + 1vw);
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  width: 100%;
  height: 30%;

  @media screen and (max-width: 570px) {
    gap: 1rem
  }
`;

export const Pfooter = styled.p`
  margin: 0;
  font-size: calc(.3em + 1vw);
  color: rgba(0, 0, 0, 0.5);


  @media screen and (max-width: 570px) {
    font-size: calc(1em + 1vw);
  }
`;

export const ContainerFilter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 45%;
  height: 100%;
  flex-wrap: wrap;


  @media screen and (max-width: 570px) {
    width: 100%;
    justify-content: flex-start;
    border-top: .1rem solid black;
    padding-top: 1rem; 
  }
`;

export const Filtering = styled.p`
  background-color: red;
  padding: 0.4rem;
  margin: 5px;
  border-radius: 5px;
  color: rgb(58, 168, 164);
  background-color: rgb(73, 130, 129, 0.15);
  font-weight: bold;
  font-size: calc(.5em + 1vw);



  @media screen and (max-width: 570px){
    font-size: calc(1em + 1vw);
  }
`;
