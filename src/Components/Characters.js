import React from 'react';
import Odlaw from '../Images/Characters/odlaw.jpg'
import Waldo from '../Images/Characters/waldo.jpg';
import Wenda from '../Images/Characters/wenda.jpg';
import Wizard from '../Images/Characters/wizard.jpg';

const Characters = (props) => {
  let image = null;

  switch (props.name) {
    case 'Waldo':
      image = Waldo;
      break;
    case 'Odlaw':
      image = Odlaw;
      break;
    case 'Wenda':
      image = Wenda;
      break;
    case 'Wizard':
      image = Wizard;
      break;
    default:
      break;
  }

  return (
    <div
      className={`${
        props.found && 'opacity-20'
      } flex flex-col items-center pr-6 py-3`}
    >
      <img className="object-contain w-10 h-10" src={image} alt={props.name} />
      <p className="text-sm font-bold">{props.name}</p>
    </div>
  );
};

export default Characters;