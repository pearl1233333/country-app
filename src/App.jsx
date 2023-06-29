import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import List from './Pages/List'
import Detail from './Pages/Detail'

function App() {
  const [ darkmode, setDarkmode ] = useState(false);
  const [ data, setData ] = useState(null);
  const [ word, setWord ] = useState(''); // 검색어
  const [ seletindex,setSeletIndex ] = useState('');

  const handleDarkmode = () => {
    setDarkmode(!darkmode);
  }

  const fetchData = (item) => {
    if(item){
      fetch(`https://restcountries.com/v3.1/name/${item}`)
      .then(response => response.json())
      .then(json => {
          setData(json);
      })
    } else {
      fetch('https://restcountries.com/v3.1/all?fields=name,flags,translations,continents,capital,population,subregion,cca2,languages')
      .then(response => response.json())
      .then(json => {
        setData(json);
      })
    }
    
  }

  useEffect(()=>{
    fetchData();
  },[])
  
  // 입력함수
  const searchInput = (e) => {
    setWord(e.target.value);
  }

  // 전송버튼 눌렀을 때
  const countrySearch = (e) => {
    e.preventDefault(); // 전송 이벤트 취소(기본 이벤트)
    console.log('검색 호출');
    fetchData();
  }
  const onSeletIndex=(item)=>{
    setSeletIndex(item);
  }

  return (
    <div className={ darkmode ? 'basicmode darkmode' : 'basicmode'}>
      <Header darkmode={darkmode} handleDarkmode={handleDarkmode}/>
      <main>
        <div className='wrap'>
          <BrowserRouter>
            <Routes>
              <Route 
                path='/' 
                element={
                  <List
                    data={data}
                    searchInput={searchInput}
                    countrySearch={countrySearch}
                    onSeletIndex={onSeletIndex}
                    word={word}
                  />
                } />
              <Route 
                path='/detail' 
                element={<Detail data={data} seletindex={seletindex} />} />
            </Routes>
          </BrowserRouter>
        </div>
      </main>
    </div>
  )
}

export default App