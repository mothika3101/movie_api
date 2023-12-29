import "./moviecard.css";
export const MovieCard =({movie})=>{
    const{name, genre,imdb_rating,img_link,duration}=movie;
    return(
        <div className="card-container">
            <div className="card-img-container">
                <img className="card-img" src={img_link} alt="movie-card"/>
            </div>
            <div className="card-details"><div>
                <span className="title">{name}</span>
            </div>
            <div>
                <span className="genre"> Genre:{genre}</span>
            </div>
            <div className="rating">
                <span> Rating:{imdb_rating}</span>
                <span>{duration}</span>
            </div>
            </div>
            
        </div>
    )
}