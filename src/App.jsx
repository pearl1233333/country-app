import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import List from './Pages/List'
import Detail from './Pages/Detail'

function App() {
  const [ darkmode, setDarkmode ] = useState(false);
  const [ data, setData ] = useState(null); // 나라 데이터
  const [ word, setWord ] = useState(''); // 검색어
  const [ seletindex, setSeletIndex ] = useState('');

  const handleDarkmode = () => {
    setDarkmode(!darkmode);
  }

  const fetchData = (item) => {
    const url = item
      ? `https://restcountries.com/v3.1/name/${item}`
      : 'https://restcountries.com/v3.1/all?fields=name,flags,translations,continents,capital,population,subregion,cca2,languages';
  
      fetch(url)
        .then(res => res.json())
        .then(data => {
          if(data !== null) {
            setData(data);
          } else {
            setData('');
          }
        })
        .catch(() => {
          console.log('에러');
        });
  }

  useEffect(()=>{
    fetchData();
  },[])
  
  // 입력함수
  const HandleSearch = (e) => {
    setWord(e.target.value);
  }

  // 전송버튼
  const HandleSearchBtn = (e) => {
    e.preventDefault();
    fetchData(word);
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
                    HandleSearch={HandleSearch}
                    HandleSearchBtn={HandleSearchBtn}
                    onSeletIndex={onSeletIndex}
                    word={word}
                  />
                } 
              />
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