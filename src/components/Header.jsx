import React from 'react'

function Header(props) {
  const {darkmode, handleDarkmode} = props;

  return (
    <header className={ darkmode ? 'basicmode darkmode' : 'basicmode'}>
      <div className='wrap'>
        <h2 className='logo'><a href="/">Where in the world?</a></h2>
        <button 
          className='btn_mode'
          onClick={handleDarkmode}
        >Dark mode</button>
      </div>
    </header>
  )
}

export default Header