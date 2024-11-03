import Nav from './Nav'
import Footer from './Footer'
import './App.css'
import data from './data'
import Card from './Card'
import bahrain from './assets/bahrain.png'
import daresalaam from './assets/daresalaam.png'
import mangaf from './assets/mangaf.png'
import myrtlebeach from './assets/myrtlebeach.png'
import nairobi from './assets/nairobi.png'
import rotterdam from './assets/rotterdam.png'
import tema from './assets/tema.png'
import zanzibar from './assets/zanzibar.png'

const images = [tema,nairobi,myrtlebeach,rotterdam,mangaf,daresalaam,bahrain,zanzibar]

function App() {
  
  const cards = data.map((item,idx) => <Card key={item.key} imageUrl={images[idx]} item={item}/>).reverse()
  
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
