import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './Pages/Home'
import Detail from './Pages/Detail'

function App() {
  const [darkmode, setDarkmode] = useState(false);

  const handleDarkmode = () => {
    setDarkmode(!darkmode);
  }

  const [data, setData] = useState(null); // 불러올 데이터

  const fetchData = () => {
    fetch('https://restcountries.com/v3.1/all?fields=name,flags,translations,continents,capital,population,subregion,cca2,languages')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setData(json);
      })
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className={ darkmode ? 'basicmode darkmode' : 'basicmode'}>
      <Header darkmode={darkmode} handleDarkmode={handleDarkmode}/>
      <main>
        <div className='wrap'>
          <BrowserRouter>
            <Routes>
              <Route 
                path='/' 
                element={<Home data={data} 
              />} />
              <Route path='/detail/:id' element={<Detail />} />
            </Routes>
          </BrowserRouter>
        </div>
      </main>
    </div>
  )
}

export default App