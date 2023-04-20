import React, { Component } from 'react';
import axios from 'axios';
import TopSpot from './topspot';


class App extends Component {
  constructor(props) {
   super(props);
 
   this.state = {
    topspots: []
   };
  }
componentWillMount() {
  axios
  .get('https://sd-top-spots.tbox.tools/')
  .then(response => response.data)
  .then(topspots => this.setState({ topspots }));
}
  render() {
  
      
    return (
      <div className='App'>
        <div className="container text-center">
          <header>
            <h1>San Diego Top Spots</h1>
            <p>A list of the Top 30 places to see in San Diego, California.</p>
          </header>  
        </div>
        <div className="container">
          <div className="row row-col-md-4">
            {
              this.state.topspots.map(topspot =>(
                <TopSpot
                  key={topspot.id}
                  name={topspot.name}
                  description={topspot.description}
                  location={topspot.location}
                  latitude={topspot.location[0]}
                  longtitude={topspot.location[1]}
                />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
