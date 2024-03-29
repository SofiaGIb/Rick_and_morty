import './App.css'
import Cards from './components/Cards/Cards'
import Nav from "./components/Nav/Nav"
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import Favorites from './components/Favorite/Favorites'

import {useState, useEffect} from "react"
import { Routes, Route, useNavigate } from 'react-router-dom'

function App () {
  const navigate = useNavigate()
  const [characters, setCharacters] = useState([])
  const [access, setAccess] = useState(false)
  const username = 'rickandmorty@gmail.com'
  const password = 'rick1234'
  
  const Login = (userData) =>{
    if(userData.password === password && userData.username === username){
      setAccess(true)
      navigate('/home')
    }
  }

  useEffect(() => {
    !access && navigate('/');
 }, [access, navigate])
  
 const onSearch = (id) => {
  const URL_BASE = "http://localhost:3001/rickandmorty";
  const KEY = "7c11a1f267c9.1711e4a95e5d54ac646f";

  if (characters.find((char) => char.id === id)) {
    return alert("Personaje repetido");
  }

  fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        alert("Algo salió mal");
      }
    });
};

  const onClose = (id) => {
    setCharacters(characters.filter(character => character.id !== id))
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch={onSearch} /> 
        <div>
          <Routes>
            <Route path='/' element={<Form Login={Login} />} />
            <Route path="/home" element={<Cards onClose={onClose} characters={characters} />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:detailId" element={<Detail />} />
            <Route path="/favorites" element={< Favorites/>} />
          </Routes>
        </div>
    </div>
  )
}

export default App