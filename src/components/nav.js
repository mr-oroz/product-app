import React from 'react';

const Nav = (props) => {
  const { category, toggleTitle } = props;
  return (
    <nav className='nav'>
      <ol>
        {
          category.map((elem, index) => {
            return <li
              onClick={() => toggleTitle(elem.id, elem.title)}
              key={index}>
              {elem.title}
            </li>
          })
        }
      </ol>
    </nav>
  );
};

export default Nav;