import React from 'react';

const Experience = ({experience}) => {        
    return(        
            <div className="w3-container" >
                <h5 className="w3-opacity"><b>{experience.Role} - <a href={experience.WebSite} target="blank">{experience.WebSite}</a></b></h5>
                <h6 className="w3-text-teal">
                <i className="fa fa-calendar fa-fw w3-margin-right"></i>{experience.From +' - '}   
                {
                    experience.To === 'Current' ? 
                       <span className="w3-tag w3-teal w3-round">{experience.To}</span>
                       :
                       experience.To
                }    
                </h6>
                 <ul>
                    {
                    experience.Activities.map((activity,i) =>                
                        <li key={i}>
                            {activity}
                        </li>
                    )
                    }
                 </ul>                     
            </div>
    )
}

export default Experience;