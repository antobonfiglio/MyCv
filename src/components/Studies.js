import React from 'react';

const Studies = ({studies}) => {

    const Study = (study, index) => {    
        return(
            <React.Fragment key={index}>
                <div className="w3-container">
                    <h5 className="w3-opacity"><b>{study.School}</b></h5>
                    <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>{study.FromYear +' - '+ study.ToYear}</h6>
                    <p> {study.Degree} </p>
                    {                         
                         index < studies.length-1 ? <hr/> : ''
                    }
                    <br />
                </div>
            </React.Fragment>
        );
    };

    return(    
    <React.Fragment>
            <div className="w3-container w3-card w3-white">
                <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
                {studies.map( (study, i) => { return Study(study, i)  } )}   
             </div>             
    </React.Fragment>
    );
}

export default Studies; 