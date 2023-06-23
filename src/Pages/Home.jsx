import React from 'react'

function Home({data}) {
  console.log('home: ', data);
  

  return (
    <div>
        <form className='search-inner'>
          <input type="text" className='int' placeholder='search'/>
          <button className='btn_search' type="submit">search</button>
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