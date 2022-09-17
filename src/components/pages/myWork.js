import { useEffect, useState } from "react"
import Nasa from "../cards/Nasa"
import Marvel from "../cards/Marvel"

const MyWork = () => {

    const[works, setWorks] = useState()

    useEffect(() => {
        fetch(process.env.REACT_APP_URL_NASA_API)
            .then(response => response.json())
            .then(data => setWorks(data))
            // .then(data => console.log(data))
            .catch(e => console.log(e))
    },[])

       
    const[marvel, setMarvel] = useState() 

    const[endpoint, setEndpoint] = useState(`spider`)

    if(endpoint === "") setEndpoint("spider")
       
    useEffect(() => {
        fetch(`${process.env.REACT_APP_URL_MARVEL_API}nameStartsWith=${endpoint}`)
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(data => setMarvel(data))
        .catch(e => console.log(e))
    }, [endpoint])
    
 
    return (
        <>
            <div className="ed-grid">
                <h2> Consumo de APIs</h2>
                {works ? (
                    <section className="ed-grid s-grid-1 m-grid-1 lg-grid-1 row-gap">
                        {
                            <Nasa
                                key={works.date}
                                date={works.date}
                                media_type= {works.media_type}
                                url={works.url}
                                title={works.title}
                                copyright={works.copyright}
                                explanation={works.explanation}
                            />
                        }
                    </section>
                )
                    : (<span>Cargando...</span>)
                }
            </div>            
                {marvel ? (
                    <>
                        <div className="ed-grid">
                            <form>
                                <input
                                    placeholder="Busca tu personaje de Marvel favorito"
                                    type="text"
                                    name="search"
                                    autoComplete="off"
                                    onChange={ev => setEndpoint(ev.target.value)}
                                ></input>
                                {/* <p>Resultados para {endpoint}</p> */}
                            </form>
                        </div>                    
                        <section className="ed-grid s-grid-2 m-grid-3 lg-grid-4 row-gap">
                            {
                                marvel.data.results.map(({
                                    name,
                                    thumbnail,
                                    id
                                
                                }) => (
                                    <Marvel
                                        key={id}
                                        name={name}
                                        copyright={marvel.copyright}
                                        url={`${thumbnail.path}/portrait_incredible.${thumbnail.extension}`}
                                    />
                                ))
                            }
                        </section>
                    </>
                ) 
                    : (<span></span>)
                }
        </>
    )
}

export default MyWork