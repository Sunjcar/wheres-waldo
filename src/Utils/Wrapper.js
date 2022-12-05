import React from 'react';
import { Link } from 'react-router-dom';
import waldoTitle from '../Images/Waldo.jpg';
import Header from '../Components/Header';
import Container from './Container';

const Wrapper = (props) => (
  <>
    <Header>
      <div className="flex justify-center">
        <Link to="/" className="flex items-center justify-center ">
          <img className="h-10 px-4 lg:h-16" src={waldoTitle} alt="waldo" />
          <h1 className="text-xl font-extrabold leading-none tracking-tight lg:text-4xl">
            <span className="text-blue-500">Where's </span>
            <span className="text-red-500">Waldo?</span>
          </h1>
        </Link>
      </div>
    </Header>
    <Container navPadding>
      <main>{props.children}</main>
    </Container>
  </>
);

export default Wrapper;