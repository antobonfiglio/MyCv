import * as React from 'react';
import './App.css';
import CV from './data/cv.json';
import Bio from './components/Bio';
import Experiences from './components/Experiences';
import Studies from './components/Studies';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/*-- pageContainer  */}
        <div className="w3-content w3-margin-top" style={ {maxWidth:1400+'px'}}>

        {/* <!-- The Grid --> */}
        <div className="w3-row-padding">

          {/* <!-- Left Column --> */}
          <div className="w3-third">
            <Bio cv={CV}/>
          {/* <!-- End Left Column --> */}
          </div>

          {/* <!-- Right Column --> */}
          <div className="w3-twothird">
            <Experiences experiences={CV.Experiences} />
            <Studies studies={CV.Studies} isInEditMode={false} />
          {/* <!-- End Right Column --> */}
          </div>
          
        {/* <!-- End Grid --> */}
        </div>

        {/* <!-- End Page Container --> */}
        </div>

        <footer className="w3-container w3-teal w3-center w3-margin-top">
        <p>Find me on social media.</p>
        <i className="fa fa-facebook-official w3-hover-opacity"></i>
        <i className="fa fa-instagram w3-hover-opacity"></i>
        <i className="fa fa-snapchat w3-hover-opacity"></i>
        <i className="fa fa-pinterest-p w3-hover-opacity"></i>
        <i className="fa fa-twitter w3-hover-opacity"></i>
        <i className="fa fa-linkedin w3-hover-opacity"></i>
        {/* <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p> */}
        </footer>

      </React.Fragment>
    );
  }
}

export default App;
