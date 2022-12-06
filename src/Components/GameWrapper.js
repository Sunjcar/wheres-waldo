import React from 'react';
import Header from '../Components/Header';
import Container from './Container';
import { PrimaryBtn } from '../Utils/BtnWrapper'
import Characters from '../Components/Characters';
import Odlaw from '../Images/Characters/odlaw.jpg'
import Waldo from '../Images/Characters/waldo.jpg';
import Wenda from '../Images/Characters/wenda.jpg';
import Wizard from '../Images/Characters/wizard.jpg';

const GameWrapper = (props) => {
  return (
    <>
      <Header>
        <Container>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Characters image={Waldo} name="Waldo" found />
              <Characters image={Odlaw} name="Odlaw" />
              <Characters image={Wizard} name="Wizard" found />
              <Characters image={Wenda} name="Wenda" />
            </div>
            <div className="flex items-center">
              <div className="text-3xl font-semibold leading-none tracking-tighter">
                0:03
              </div>
              <div className="ml-8">
                <PrimaryBtn link="/">Return Home</PrimaryBtn>
              </div>
            </div>
          </div>
        </Container>
      </Header>
      <Container navPadding>
        <main>{props.children}</main>
      </Container>
    </>
  );
};

export default GameWrapper;