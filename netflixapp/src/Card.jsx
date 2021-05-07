import './index.css'
function Card(props){

    return (
      <>
      <div className="cards">
      <div className="card">
        <img src={props.imagesrc} alt="series image"/>
        <div className="series-details">
          <h3>{props.title}</h3>
          <p>{props.name}</p>
          <a href={props.link} target = "_blnk">
          <button>Watch Now</button>
          </a>
        </div>
      </div>
      </div>
      </>
    )
  
  }

  export default Card