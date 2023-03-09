import './App.css'
import characters from './data.js'
// import Card from './components/Card/Card.jsx'
import Cards from './components/Cards/Cards.jsx'
import SearchBar from './components/SearchBar/SearchBar.jsx'
import Card from './components/Card/Card'
    

function App () {
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div><Card/></div>


      <div>
        <Cards
          characters={characters}
        />
      </div>
  
      <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div>
    </div>
  )
}

export default App


