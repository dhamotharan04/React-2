import React from 'react'

const Header = (props) => {
  // const headerStyle={
  //   backgroundColor: 'mediumblue',
  //   color:'white'
  // }
  return (
    <header>
       <h1>{props.title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: "To do list",
};
export default Header