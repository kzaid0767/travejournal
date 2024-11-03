

export default function Card(props){
    return(
        <div className="card">
            <div className="cardImageContainer">
                <img className="cardImage" src={props.imageUrl} alt={`${props.item.title} shown in a picture`} />
            </div>
            <div className="allDetails">
                <div className="placeDetails">
                    <i className="fa-solid fa-location-dot"></i>
                    <span className="locationName">{props.item.location}</span>
                    <a className="mapsLink" href={props.item.googleMapsUrl} target="_blank" rel="noopener noreferrer">Google Maps</a>
                </div>
                <h2 className="title">{props.item.title}</h2>
                <p className="date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="placeDecription">{props.item.description}</p>
            </div>
            <br />
        </div>
    )
}


/* {
    title: "Mount Fuji",
    location: "Japan",
    googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
    startDate: "12 Jan, 2021",
    endDate: "24 Jan, 2021",
    description: `Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). 
        Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.`,
    imageUrl: "../public/mangaf.jpg"
} */