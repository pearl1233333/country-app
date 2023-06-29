import React from 'react'

function List(props) {
  const {
    data,
    searchInput, 
    countrySearch, 
    word
  } = props;


  return (
    <div>
      <form className='search-inner'>
        <input 
          type="search" 
          value={word}
          className='int' 
          placeholder='검색' 
          required
          onChange={searchInput}
        />
        <button 
          className='btn_search' 
          type="summit"
          onClick={countrySearch}
        >search</button>
      </form>
      {
        data ? 
          (data.status == 404) ?
              <h3>검색결과 없다</h3> :
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
              </div> : null
      }
      
    </div>
  )
}

export default List