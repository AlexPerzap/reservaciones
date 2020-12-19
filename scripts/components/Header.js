const Header = (props) => {
  return (
   <div className="header">
    <h1 className="header-emphasis">Hoteles</h1>
    <h5>desde el <b className="b">
          {moment(props.state.startDateFilter).format("dddd, D MMMM YYYY").replace(/[0-9a-zA-Z]\s/g, '$&de ')}
        </b> hasta el <b className="header-emphasis">
          {moment(props.state.endDateFilter).format("dddd, D MMMM YYYY").replace(/[0-9a-zA-Z]\s/g, '$&de ')}
        </b>
    </h5>
   </div>
  );
};
