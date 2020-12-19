class App extends React.Component {
        state = {
          startDateFilter:moment().format("YYYYMMDD"),
          endDateFilter:moment().add(1, 'd').format("YYYYMMDD"),
          countryFilter:"0",
          priceFilter:0,
          roomsFilter:"0",
        };      
        startDateInpHandler = ()=>{
          let startDateFilterNew = {...this.state.startDateFilter};
          startDateFilterNew = event.target.value;    
          this.setState({startDateFilter:startDateFilterNew})
        };
        endDateInpHandler = ()=>{
          let endDateFilterNew = {...this.state.endDateFilter};
          endDateFilterNew = event.target.value;
          this.setState({endDateFilter:endDateFilterNew})
        };
        countryInpHandler = ()=>{
          let countryFilterNew = {...this.state.countryFilter};
          countryFilterNew = event.target.value;
          this.setState({countryFilter:countryFilterNew})
        };
        priceInpHandler = ()=>{
          let priceFilterNew = {...this.state.priceFilter};
          priceFilterNew = parseInt(event.target.value);
          this.setState({priceFilter:priceFilterNew})
        };
        roomsInpHandler = ()=>{
          let roomsFilterNew = {...this.state.roomsFilter};
          roomsFilterNew = event.target.value;
          this.setState({roomsFilter:roomsFilterNew})
        };
     render() {
       return (
          <div className="app">
              <Header 
                state={this.state}
              /> 
              <Filters 
                hotelsData={hotelsData} 
                startDateInpHandler={this.startDateInpHandler}
                endDateInpHandler={this.endDateInpHandler}
                countryInpHandler={this.countryInpHandler}
                priceInpHandler={this.priceInpHandler}
                roomsInpHandler={this.roomsInpHandler}
                state={this.state}
              /> 
          </div>
       )
     }
};
const rootElement = document.getElementById("app");
ReactDOM.render(
  <App />,
  rootElement
);


