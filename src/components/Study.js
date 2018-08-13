import React from 'react';

const Study = ({study}) => {    
    return(        
        <div className="w3-container">                    
            <h5 className="w3-opacity"><b>{study.School}</b></h5>
            <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>{study.FromYear +' - '+ study.ToYear}</h6>
            <p> {study.Degree} </p>                
            <br />
        </div>
    );
};

export default Study; 