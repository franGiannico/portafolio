import { string } from "prop-types"


const Nasa = ( { date, title, media_type, explanation, url } ) => {
    return (
        <div className="s-radius-1 s-shadow-bottom background s-shadow-card-micro white-color s-pxy-2">
            <h3>Astronomy Picture of the Day by NASA</h3>
            <h4>{ title }</h4>
            <p>Fecha:{date}</p>

            {media_type === 'img' && (
                <img src={ url } alt={ media_type }/>
            )}

            {media_type === 'video' && (
                <iframe width="960" height="540" src={ url } 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen="" 
                    alt={ media_type }>                    
                </iframe>
            )}
            
            <p>{ explanation }</p>
        </div>
    )
}

Nasa.propTypes = {
    title: string,
    media_type: string,
    explanation: string,
    url: string,
    date: string,
}


export default Nasa
