const HotelCard = (props) => {
  return (
    <div className="card hotel-card" style={{width:"22rem"}}>
       <img src={props.hotelPhoto}  className="card-img-top" alt={props.hotelSlug} />
       <div className="card-body">
         <h5 className="card-title">{props.hotelName}</h5>
         <p className="card-text">{props.hotelDescription}</p>
         <ul className="list-group ">
           <li className="card-panel-container"> 
              <div className="location-panel-item">
                  <span className="icon"><i className="fas fa-map-marker"></i>
                  </span> 
                  {props.hotelCity}, {props.hotelCountry}
              </div>
           </li>
           <li className="card-panel-container">
              <span className="rooms-panel-item">
                  <span className="icon">
                      <i className="fas fa-bed"></i>
                  </span>
                      {props.hotelRooms} Habitaciones 
              </span> 
              <span className="icon price-panel-item">
                  {"$".repeat(props.hotelPrice)}
              </span>
           </li>
         </ul>
         <a href="#" className="btn btn-custom btn-primary btn-info btn-block">Reservar</a>
       </div>
    </div>
  );
};