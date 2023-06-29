import React from 'react'

function Detail(props) {
  console.log('home: ', data);
  const indexnum = props.seletindex;
  console.log(props.data);
  let data = props.data;
  console.log(data);

  const onMoveBack = () => {
      props.onserch("");
  }
  
  return (
    <div>
      <div className='toBack'>
        <link to="/"><button onClick={onMoveBack}>Back</button></link>
      </div>
      <div className='content_details'>
        <div className='content_img' style={{backgroundImage: `url(${data[indexnum].flags.png})`}}></div>
        <ul className='content_info'>
          <li><b>{data[indexnum].name.common} {data[indexnum].translations.kor.common}</b></li> 
          <li><b>Population</b> : {data[indexnum].population}</li> 
          <li><b>Region</b> : {data[indexnum].region}</li> 
          <li><b>Capital</b> : {data[indexnum].capital}</li> 
        </ul>
      </div>
      <h2>Detail</h2>
    </div>
  )
}

export default Detail