import React from 'react'

function Home({data}, props) {
  const {
    handleCountrySearch, 
    location, 
    handleLocationChange
  } = props;

  return (
    <div>
      <form className='search-inner' onSubmit={handleCountrySearch}>
        <input 
          type="search" 
          value={location}
          className='int' 
          placeholder='search'
          required
          onChange={handleLocationChange}
        />
        <button 
          className='btn_search' 
          type="summit"
        >search</button>
      </form>
      <div className='content_list'>
        {
          data && data.map((item, i) => {
            return (
              <a 
                href={`data/${item.name.common}`} 
                key={i} 
                className='content_inner'
              >
                <div className='content_img' style={{backgroundImage: `url(${item.flags.png})`}}></div>
                <ul className='content_info'>
                  <li><b>{item.name.common} {item.translations.kor.common}</b></li> 
                  <li><b>Population</b> : {item.population}</li> 
                  <li><b>Region</b> : {item.region}</li> 
                  <li><b>Capital</b> : {item.capital}</li> 
                </ul>
              </a>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home