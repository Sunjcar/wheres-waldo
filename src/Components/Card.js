import React from 'react';
import Odlaw from '../Images/Characters/odlaw.jpg'
import Waldo from '../Images/Characters/waldo.jpg';
import Wenda from '../Images/Characters/wenda.jpg';
import Wizard from '../Images/Characters/wizard.jpg';

const Card = (props) => {
  return (
    <div
      className={`${
        props.active ? 'bg-red-100 ' : 'bg-white '
      }  hover:shadow rounded transition-shadow cursor-pointer`}
      onClick={props.clicked}
    >
      <img
        className={`${props.small ? 'h-40' : 'h-56'} w-full object-cover`}
        src={props.img}
        alt={props.alt}
      />
      <div className="flex justify-between p-4 align-middle">
        <h1 className="flex-shrink-0 mr-3 font-medium lg:text-lg">
          {props.children}
        </h1>
        <div className="flex flex-wrap">
          {props.odlaw && (
            <img
              src={Odlaw}
              className="object-contain w-8 h-8 p-1"
              alt="Odlaw"
            />
          )}
          {props.waldo && (
            <img
              src={Waldo}
              className="object-contain w-8 h-8 p-1"
              alt="Waldo"
            />
          )}
          {props.wenda && (
            <img
              src={Wenda}
              className="object-contain w-8 h-8 p-1"
              alt="Wenda"
            />
          )}
          {props.wizard && (
            <img
              src={Wizard}
              className="object-contain w-8 h-8 p-1"
              alt="Wizard"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;