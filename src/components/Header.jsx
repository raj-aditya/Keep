import React from "react"

function Header(props){
  return (
    <header>
       <div class="header_container">
          <h1>Keep</h1>
          <button class="header_add_button"onClick={props.handleOpen}>Add Notes</button>
        </div>
    </header>
  )
}

export default Header;