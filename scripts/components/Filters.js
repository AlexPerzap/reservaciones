const Filters = (props) => {
     let filtering=props.hotelsData.filter(hotel => {
            let hotelSize="";
            if(hotel.rooms<=10){hotelSize="small"}
            else if(hotel.rooms<=20){hotelSize="medium"}
            else{hotelSize="large"};
            let availabilityFrom=moment(hotel.availabilityFrom).format("YYYYMMDD");
            let startDateFilter=moment(props.state.startDateFilter).format("YYYYMMDD");
            let availabilityTo=moment(hotel.availabilityTo).format("YYYYMMDD");
            let endDateFilter=moment(props.state.endDateFilter).format("YYYYMMDD");
        return (
          (availabilityFrom<=startDateFilter)&&
          (availabilityTo>=endDateFilter && availabilityTo>startDateFilter)&&
          (hotel.country===props.state.countryFilter || props.state.countryFilter==="0")&& 
          (hotel.price===props.state.priceFilter || props.state.priceFilter===0)&&
          (hotelSize===props.state.roomsFilter || props.state.roomsFilter==="0")
        )
     });
     return (
      <div>
        <div className="filters d-flex flex-row">
            <input name="startDateFilter" type="date" className="filter" onChange={props.startDateInpHandler}
                value={props.state.startDateFilter}>               
            </input>
            <input name="endDateFilter" type="date" className="filter" onChange={props.endDateInpHandler}
                value={props.state.endDateFilter}>    
            </input>
            <select name="countryFilter" className="filter" onChange={props.countryInpHandler}>
                <option value="0">Todos los países</option>
                <option>Argentina</option>
                <option>Brasil</option>
                <option>Chile</option>
                <option>Uruguay</option>
            </select>
            <select name="priceFilter" className="filter" onChange={props.priceInpHandler}>
                <option value="0">Cualquier precio</option>
                <option value="4">$$$$</option>
                <option value="3">$$$</option>
                <option value="2">$$</option>
                <option value="1">$</option>
            </select>
            <select name= "roomsFilter" className="filter" onChange= {props.roomsInpHandler}>           
                <option value="0"> Cualquier tamaño</option>
                <option value="large">Grande</option>
                <option value="medium">Mediano</option>
                <option value="small">Pequeño</option>
            </select>
        </div>
        <div className="row row-cols-1 row-cols-md-3">
          <div className="hotels">
           <Matches matches={filtering} />
          </div>
        </div>
    </div>
     );
   };