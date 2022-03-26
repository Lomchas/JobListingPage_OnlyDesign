import React, { Component } from "react";
import {
  CardsContainer,
  CardCard,
  LogoDiv,
  ContainerInfo,
  CardHeader,
  CardNameCompany,
  CardLabelsDiv,
  ImgLogo,
  CardBody,
  CardFooter,
  ContainerFilter,
  NewLabel,
  FeatureLabel,
  Pfooter,
  Filtering,
  PositionTitle,
} from "../styles/CardStyle";
import logoCompany from "../Images/photosnap.svg";
import "../styles/General.css";

export default class Card extends Component {
  render() {
    return (
      <CardsContainer className="cards-container">
        <CardCard className="card">
          <LogoDiv className="containerLogo">
            <ImgLogo src={logoCompany} alt="logo" />
          </LogoDiv>
          <ContainerInfo className="container-info">
            <CardHeader className="card-header">
              <CardNameCompany className="card-title-company">
                PhotoSnap
              </CardNameCompany>
              <CardLabelsDiv className="card-labels">
                <NewLabel className="card-label-new">NEW!</NewLabel>
                <FeatureLabel className="card-label-featured">
                  FEATURED
                </FeatureLabel>
              </CardLabelsDiv>
            </CardHeader>
            <CardBody className="card-body">
              <PositionTitle className="card-position">
                Senior Front-end Developer
              </PositionTitle>
            </CardBody>
            <CardFooter className="card-footer">
              <Pfooter>1d ago</Pfooter>
              <Pfooter>Full Time</Pfooter>
              <Pfooter>USA Only</Pfooter>
            </CardFooter>
          </ContainerInfo>
          <ContainerFilter className="container-filters">
            <Filtering>Frontend</Filtering>
            <Filtering>Senior</Filtering>
            <Filtering>HTML</Filtering>
            <Filtering>CSS</Filtering>
            <Filtering>JavaScript</Filtering>
          </ContainerFilter>
        </CardCard>
        <CardCard className="card">
          <LogoDiv className="containerLogo">
            <ImgLogo src={logoCompany} alt="logo" />
          </LogoDiv>
          <ContainerInfo className="container-info">
            <CardHeader className="card-header">
              <CardNameCompany className="card-title-company">
                PhotoSnap
              </CardNameCompany>
              <CardLabelsDiv className="card-labels">
                <NewLabel className="card-label-new">NEW!</NewLabel>
                <FeatureLabel className="card-label-featured">
                  FEATURED
                </FeatureLabel>
              </CardLabelsDiv>
            </CardHeader>
            <CardBody className="card-body">
              <h3 className="card-position">Senior Front-end Developer</h3>
            </CardBody>
            <CardFooter className="card-footer">
              <Pfooter>1d ago</Pfooter>
              <Pfooter>Full Time</Pfooter>
              <Pfooter>USA Only</Pfooter>
            </CardFooter>
          </ContainerInfo>
          <ContainerFilter className="container-filters">
            <Filtering>Frontend</Filtering>
            <Filtering>Senior</Filtering>
            <Filtering>HTML</Filtering>
            <Filtering>CSS</Filtering>
            <Filtering>JavaScript</Filtering>
          </ContainerFilter>
        </CardCard>
        <CardCard className="card">
          <LogoDiv className="containerLogo">
            <ImgLogo src={logoCompany} alt="logo" />
          </LogoDiv>
          <ContainerInfo className="container-info">
            <CardHeader className="card-header">
              <CardNameCompany className="card-title-company">
                PhotoSnap
              </CardNameCompany>
              <CardLabelsDiv className="card-labels">
                <NewLabel className="card-label-new">NEW!</NewLabel>
                <FeatureLabel className="card-label-featured">
                  FEATURED
                </FeatureLabel>
              </CardLabelsDiv>
            </CardHeader>
            <CardBody className="card-body">
              <h3 className="card-position">Senior Front-end Developer</h3>
            </CardBody>
            <CardFooter className="card-footer">
              <Pfooter>1d ago</Pfooter>
              <Pfooter>Full Time</Pfooter>
              <Pfooter>USA Only</Pfooter>
            </CardFooter>
          </ContainerInfo>
          <ContainerFilter className="container-filters">
            <Filtering>Frontend</Filtering>
            <Filtering>Senior</Filtering>
            <Filtering>HTML</Filtering>
            <Filtering>CSS</Filtering>
            <Filtering>JavaScript</Filtering>
          </ContainerFilter>
        </CardCard>
        <CardCard className="card">
          <LogoDiv className="containerLogo">
            <ImgLogo src={logoCompany} alt="logo" />
          </LogoDiv>
          <ContainerInfo className="container-info">
            <CardHeader className="card-header">
              <CardNameCompany className="card-title-company">
                PhotoSnap
              </CardNameCompany>
              <CardLabelsDiv className="card-labels">
                <NewLabel className="card-label-new">NEW!</NewLabel>
                <FeatureLabel className="card-label-featured">
                  FEATURED
                </FeatureLabel>
              </CardLabelsDiv>
            </CardHeader>
            <CardBody className="card-body">
              <h3 className="card-position">Senior Front-end Developer</h3>
            </CardBody>
            <CardFooter className="card-footer">
              <Pfooter>1d ago</Pfooter>
              <Pfooter>Full Time</Pfooter>
              <Pfooter>USA Only</Pfooter>
            </CardFooter>
          </ContainerInfo>
          <ContainerFilter className="container-filters">
            <Filtering>Frontend</Filtering>
            <Filtering>Senior</Filtering>
            <Filtering>HTML</Filtering>
            <Filtering>CSS</Filtering>
            <Filtering>JavaScript</Filtering>
          </ContainerFilter>
        </CardCard>
        <CardCard className="card">
          <LogoDiv className="containerLogo">
            <ImgLogo src={logoCompany} alt="logo" />
          </LogoDiv>
          <ContainerInfo className="container-info">
            <CardHeader className="card-header">
              <CardNameCompany className="card-title-company">
                PhotoSnap
              </CardNameCompany>
              <CardLabelsDiv className="card-labels">
                <NewLabel className="card-label-new">NEW!</NewLabel>
                <FeatureLabel className="card-label-featured">
                  FEATURED
                </FeatureLabel>
              </CardLabelsDiv>
            </CardHeader>
            <CardBody className="card-body">
              <h3 className="card-position">Senior Front-end Developer</h3>
            </CardBody>
            <CardFooter className="card-footer">
              <Pfooter>1d ago</Pfooter>
              <Pfooter>Full Time</Pfooter>
              <Pfooter>USA Only</Pfooter>
            </CardFooter>
          </ContainerInfo>
          <ContainerFilter className="container-filters">
            <Filtering>Frontend</Filtering>
            <Filtering>Senior</Filtering>
            <Filtering>HTML</Filtering>
            <Filtering>CSS</Filtering>
            <Filtering>JavaScript</Filtering>
          </ContainerFilter>
        </CardCard>
        <CardCard className="card">
          <LogoDiv className="containerLogo">
            <ImgLogo src={logoCompany} alt="logo" />
          </LogoDiv>
          <ContainerInfo className="container-info">
            <CardHeader className="card-header">
              <CardNameCompany className="card-title-company">
                PhotoSnap
              </CardNameCompany>
              <CardLabelsDiv className="card-labels">
                <NewLabel className="card-label-new">NEW!</NewLabel>
                <FeatureLabel className="card-label-featured">
                  FEATURED
                </FeatureLabel>
              </CardLabelsDiv>
            </CardHeader>
            <CardBody className="card-body">
              <h3 className="card-position">Senior Front-end Developer</h3>
            </CardBody>
            <CardFooter className="card-footer">
              <Pfooter>1d ago</Pfooter>
              <Pfooter>Full Time</Pfooter>
              <Pfooter>USA Only</Pfooter>
            </CardFooter>
          </ContainerInfo>
          <ContainerFilter className="container-filters">
            <Filtering>Frontend</Filtering>
            <Filtering>Senior</Filtering>
            <Filtering>HTML</Filtering>
            <Filtering>CSS</Filtering>
            <Filtering>JavaScript</Filtering>
          </ContainerFilter>
        </CardCard>
        <CardCard className="card">
          <LogoDiv className="containerLogo">
            <ImgLogo src={logoCompany} alt="logo" />
          </LogoDiv>
          <ContainerInfo className="container-info">
            <CardHeader className="card-header">
              <CardNameCompany className="card-title-company">
                PhotoSnap
              </CardNameCompany>
              <CardLabelsDiv className="card-labels">
                <NewLabel className="card-label-new">NEW!</NewLabel>
                <FeatureLabel className="card-label-featured">
                  FEATURED
                </FeatureLabel>
              </CardLabelsDiv>
            </CardHeader>
            <CardBody className="card-body">
              <h3 className="card-position">Senior Front-end Developer</h3>
            </CardBody>
            <CardFooter className="card-footer">
              <Pfooter>1d ago</Pfooter>
              <Pfooter>Full Time</Pfooter>
              <Pfooter>USA Only</Pfooter>
            </CardFooter>
          </ContainerInfo>
          <ContainerFilter className="container-filters">
            <Filtering>Frontend</Filtering>
            <Filtering>Senior</Filtering>
            <Filtering>HTML</Filtering>
            <Filtering>CSS</Filtering>
            <Filtering>JavaScript</Filtering>
          </ContainerFilter>
        </CardCard>
        <CardCard className="card">
          <LogoDiv className="containerLogo">
            <ImgLogo src={logoCompany} alt="logo" />
          </LogoDiv>
          <ContainerInfo className="container-info">
            <CardHeader className="card-header">
              <CardNameCompany className="card-title-company">
                PhotoSnap
              </CardNameCompany>
              <CardLabelsDiv className="card-labels">
                <NewLabel className="card-label-new">NEW!</NewLabel>
                <FeatureLabel className="card-label-featured">
                  FEATURED
                </FeatureLabel>
              </CardLabelsDiv>
            </CardHeader>
            <CardBody className="card-body">
              <h3 className="card-position">Senior Front-end Developer</h3>
            </CardBody>
            <CardFooter className="card-footer">
              <Pfooter>1d ago</Pfooter>
              <Pfooter>Full Time</Pfooter>
              <Pfooter>USA Only</Pfooter>
            </CardFooter>
          </ContainerInfo>
          <ContainerFilter className="container-filters">
            <Filtering>Frontend</Filtering>
            <Filtering>Senior</Filtering>
            <Filtering>HTML</Filtering>
            <Filtering>CSS</Filtering>
            <Filtering>JavaScript</Filtering>
          </ContainerFilter>
        </CardCard>
        <CardCard className="card">
          <LogoDiv className="containerLogo">
            <ImgLogo src={logoCompany} alt="logo" />
          </LogoDiv>
          <ContainerInfo className="container-info">
            <CardHeader className="card-header">
              <CardNameCompany className="card-title-company">
                PhotoSnap
              </CardNameCompany>
              <CardLabelsDiv className="card-labels">
                <NewLabel className="card-label-new">NEW!</NewLabel>
                <FeatureLabel className="card-label-featured">
                  FEATURED
                </FeatureLabel>
              </CardLabelsDiv>
            </CardHeader>
            <CardBody className="card-body">
              <h3 className="card-position">Senior Front-end Developer</h3>
            </CardBody>
            <CardFooter className="card-footer">
              <Pfooter>1d ago</Pfooter>
              <Pfooter>Full Time</Pfooter>
              <Pfooter>USA Only</Pfooter>
            </CardFooter>
          </ContainerInfo>
          <ContainerFilter className="container-filters">
            <Filtering>Frontend</Filtering>
            <Filtering>Senior</Filtering>
            <Filtering>HTML</Filtering>
            <Filtering>CSS</Filtering>
            <Filtering>JavaScript</Filtering>
          </ContainerFilter>
        </CardCard>
        <CardCard className="card">
          <LogoDiv className="containerLogo">
            <ImgLogo src={logoCompany} alt="logo" />
          </LogoDiv>
          <ContainerInfo className="container-info">
            <CardHeader className="card-header">
              <CardNameCompany className="card-title-company">
                PhotoSnap
              </CardNameCompany>
              <CardLabelsDiv className="card-labels">
                <NewLabel className="card-label-new">NEW!</NewLabel>
                <FeatureLabel className="card-label-featured">
                  FEATURED
                </FeatureLabel>
              </CardLabelsDiv>
            </CardHeader>
            <CardBody className="card-body">
              <h3 className="card-position">Senior Front-end Developer</h3>
            </CardBody>
            <CardFooter className="card-footer">
              <Pfooter>1d ago</Pfooter>
              <Pfooter>Full Time</Pfooter>
              <Pfooter>USA Only</Pfooter>
            </CardFooter>
          </ContainerInfo>
          <ContainerFilter className="container-filters">
            <Filtering>Frontend</Filtering>
            <Filtering>Senior</Filtering>
            <Filtering>HTML</Filtering>
            <Filtering>CSS</Filtering>
            <Filtering>JavaScript</Filtering>
          </ContainerFilter>
        </CardCard>
      </CardsContainer>
    );
  }
}
