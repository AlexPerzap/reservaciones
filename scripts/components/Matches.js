const Matches = (props) => {
let matches=props.matches;
if(matches.length>=1){
  return matches.map((match,index) => {  
    return ( 
        <HotelCard
        hotelSlug={match.slug}
        hotelName={match.name}
        hotelPhoto={match.photo}
        hotelDescription={match.description}
        hotelRooms={match.rooms}
        hotelCity={match.city}
        hotelCountry={match.country}
        hotelPrice={match.price}
        key={index}
        />   
    ); 
  });
} return (
   <div className="alert alert-danger" role="alert">
     <h4 className="alert-heading">Lo sentimos:</h4>
     <p>No hay hoteles disponibles que cumplan con los criterios.</p>
     <hr></hr>
     <p className="mb-0">Modifica los filtros para realizar una nueva búsqueda.</p>
   </div>
  )
}
 
