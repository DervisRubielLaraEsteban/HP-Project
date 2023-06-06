import { useState } from 'react'
import Categories from './components/Categories'
import GifsExpo from './components/GifsExpo'
import DeleteCategoriesList from './components/Categories/DeleteCategoriesList'

function App() {
  const [categories, setCategories] = useState([])

  return (
    <div  
    className='m-5'>
      <center>
        <h3 style={{color:'white', fontFamily: 'Harry Potter'}}>
          <br />
        <br />
        <div className='m-4'><center>
            <h4 style={{color:'white', fontFamily: 'Harry Potter'}}></h4>
            </center>
            </div>
            </h3>
        </center>
        <Categories 
        categories={categories}
        setCategories={setCategories}
        />
      {
        categories.length === 0 && (
          <div style={{ textAlign: 'center' }}>
          <h3 className="text-danger" style={{fontFamily: 'Harry Potter'}}>La busqueda está vacia</h3>
          <h4 className="text-light" style={{fontFamily: 'Harry Potter'}}>Escribe al personaje que desea buscar.</h4>
          </div>
        )
      }
      <hr/>
      <GifsExpo categories={categories}/>
    </div>
  )
}

export default App
