import { useEffect, useState } from "react"

const GifsExpo = ({ categories = [] }) => {
  const [dataList, setDataList] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const getData = async () => {
    if (categories.length === 0) {
      setDataList([])
      return
    }
    try {
      const responsesList = await Promise.all(categories.map(async (category) => {
        const response = await fetch(
          `https://hp-api.onrender.com/api/characters?q=${category}`
        )
        const apiResponse = await response.json()
        return apiResponse
      }))

      const mergedData = responsesList.flatMap((data) => data)
      setDataList(mergedData)
    } catch (error) {
      console.error("Error while fetching data:", error)
      setDataList([])
    }
  }

  useEffect(() => {
    getData()
  }, [categories])

  useEffect(() => {
    const filteredData = dataList.filter((data) =>
      data.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setSearchResults(filteredData)
  }, [searchQuery, dataList])

  const handleSearch = (event) => {
    setSearchQuery(event.target.value)
  }

  const displayData = searchQuery.trim() !== '' ? searchResults : dataList
  return (
    <div className="container-fluid">
      <div className="row">
      <div className="col-md-12 mb-4">
          <input
            type="text"
            className="form-control text-center"
            placeholder="Buscar Personaje"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        {displayData.map((data, index) => (
          <div className="col-md-4 mb-4" key={`${data.name}-${data.category}-${index}`}>
            <div className="card h-100">
            <div className="card-body d-flex flex-column align-items-center"> 
           
              <img
                src={data.image}
                className="card-img-top"
                alt={data.name}
                style={{ height: '400px', width: '300px' }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">
                  <strong>{data.name}</strong>
                </h5>
                <h6 className="card-subtitle mb-2">
                  <strong>Species:</strong> {data.species}
                </h6>
                <h6 className="card-subtitle mb-2">
                  <strong>Gender:</strong> {data.gender}
                </h6>
                <h6 className="card-subtitle mb-2">
                  <strong>House:</strong> {data.house}
                </h6>
                <h6 className="card-subtitle mb-2">
                  <strong>Date of Birth:</strong> {data.dateOfBirth}
                </h6>
                <h6 className="card-subtitle mb-2">
                  <strong>Year of Birth:</strong> {data.yearOfBirth}
                </h6>
                <h6 className="card-subtitle mb-2">
                  <strong>Wizard:</strong> {data.wizard ? 'Yes' : 'No'}
                </h6>
                <h6 className="card-subtitle mb-2">
                  <strong>Ancestry:</strong> {data.ancestry}
                </h6>
                <h6 className="card-subtitle mb-2">
                  <strong>Eye Colour:</strong> {data.eyeColour}
                </h6>
                <h6 className="card-subtitle mb-2">
                  <strong>Hair Colour:</strong> {data.hairColour}
                </h6>
                <h6 className="card-subtitle mb-2">
                  <strong>Patronus:</strong> {data.patronus}
                </h6>
                <h6 className="card-subtitle mb-2">
                  <strong>Hogwarts Student:</strong> {data.hogwartsStudent ? 'Yes' : 'No'}
                </h6>
                <h6 className="card-subtitle mb-2">
                  <strong>Hogwarts Staff:</strong> {data.hogwartsStaff ? 'Yes' : 'No'}
                </h6>
                <h6 className="card-subtitle mb-2">
                  <strong>Actor:</strong> {data.actor}
                </h6>
                <h6 className="card-subtitle mb-2">
                  <strong>Alive:</strong> {data.alive ? 'Yes' : 'No'}
                </h6>
              </div>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
        
}
export default GifsExpo