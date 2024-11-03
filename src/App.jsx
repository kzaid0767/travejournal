import Nav from './Nav'
import Footer from './Footer'
import './App.css'
import data from './data'
import Card from './Card'

function App() {
  
  const cards = data.map(item => <Card key={item.key} item={item}/>).reverse()
  
  return (
    <>
      <Nav />
      <div className="cardContainer">
        {cards}
      </div>
      <Footer />
    </>
  )
}

export default App
