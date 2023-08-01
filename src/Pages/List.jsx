
import React from 'react'

function List({data, HandleSearch, HandleSearchBtn, word}) {

  return (
    <>
      <form className='search-inner' onSubmit={HandleSearchBtn}>
        <input 
          type="text" 
          value={word}
          placeholder='검색' 
          required
          onChange={HandleSearch}
          className='int' 
        />
        <button 
          className='btn_search' 
          type='summit'
        >search</button>
      </form>
      {
        data !== null ?
            (<div className='content_list'>
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
            ) : (
              <h3>검색결과 없다</h3>
            )
      }
      
    </>
  )
}

export default List