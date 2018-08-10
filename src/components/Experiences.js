import React from 'react';

const Experiences = ({experiences}) => {

    const Experience = (experience, index) => {        
        return(
            <React.Fragment key={index}>
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
                     {                         
                         index < experiences.length-1 ? <hr/> : ''
                     }                 
                     <br />
                </div>
            </React.Fragment>
        );
    };

    return(    
        <React.Fragment>
                <div className="w3-container w3-card w3-white w3-margin-bottom">             
                <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>
                    {experiences.map( (experience, i) => { return Experience(experience, i)  } )}   
                </div>             
        </React.Fragment>
    );
}

export default Experiences; 