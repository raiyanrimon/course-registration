import { useState } from "react"
import Blogs from "./Blogs"
import Credits from "./Credits"
import Header from "./Header"
function App() {
  const [creditTitles, setCreditTitle] = useState([])

  const handleAddToCart = blog => {
    const newCart = [...creditTitles , blog]
    setCreditTitle(newCart)
  }

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs handleAddToCart={handleAddToCart}></Blogs>
        <Credits creditTitles={creditTitles}></Credits>
      </div>
    </>
  )
}

export default App
