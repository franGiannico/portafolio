import { string } from "prop-types"

const Marvel = ( { url, name, copyright } ) => {
    return (
        <div className="s-radius-1 s-shadow-bottom background s-shadow-card-micro white-color s-pxy-2">
            <h5>{name}</h5>
            <img src = {url.replace(`http`,`https`)} alt= {name}/>
            <span>copyright:{copyright}</span>
        </div>
    )
}

Marvel.propTypes = {
    name: string,
    url: string,
    copyright: string     
}


export default Marvel