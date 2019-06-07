import React from 'react';
import styled from 'styled-components'


// const Span = styled.span `
//   align-self: flex-end;
//   font-size: 11px;
//   font-weight: bold;
//   letter-spacing: 1px;

// `

// const Date = styled(Span) `
//   margin-left: 25px;
//   flex: 1;
// `

// const Temp = styled(Span) `
//   text-align: right;
//   margin-right: 25px;
//   flex: 1;

const TopBarr = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`
const Container = styled.div `
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`
const ContainerLeft = styled(Container) `
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`

const ContainerLeftSpan = styled.span `
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`

const ContainerCenter = styled(Container) `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`

const ContainerCenterSpan = styled.span `
  cursor: pointer;
  margin-right: 5%;
`

const ContainerRight = styled(Container) `
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`
const ContainerRightSpan = styled.span `
cursor: pointer;
`


// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarr>
      <Container>
        <ContainerLeft>
          <ContainerLeftSpan>TOPICS</ContainerLeftSpan><ContainerLeftSpan>SEARCH</ContainerLeftSpan>
        </ContainerLeft>
        <ContainerCenter>
          <ContainerCenterSpan>GENERAL</ContainerCenterSpan><ContainerCenterSpan>BROWNBAG</ContainerCenterSpan><ContainerCenterSpan>RANDOM</ContainerCenterSpan><ContainerCenterSpan>MUSIC</ContainerCenterSpan><ContainerCenterSpan>ANNOUNCEMENTS</ContainerCenterSpan>
        </ContainerCenter>
        <ContainerRight>
          <ContainerRightSpan>LOG IN</ContainerRightSpan>
        </ContainerRight>
      </Container>
    </TopBarr>
  )
}

export default TopBar;