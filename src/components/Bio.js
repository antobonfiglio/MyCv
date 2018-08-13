import React from 'react';

const Bio = ({cv}) =>{    
        
    const Skill = (skill, index) => {
        return (
            <React.Fragment key={index}>
            <p>{skill.Speciality}</p>
            <div className="w3-light-grey w3-round-xlarge w3-small">
                <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:skill.Level+'%'}}>{skill.Level}%</div>
            </div>
            </React.Fragment>
        );
    }
    
    const Language = (language, index) => {
        return (
            <React.Fragment key={index}>
            <p>{language.Language}</p>
            <div className="w3-light-grey w3-round-xlarge">
                <div className="w3-round-xlarge w3-teal" style={{ height:24+'px', width:language.Level+'%' }}></div>
            </div>
            </React.Fragment>
        );
    }
    
    return (
        <React.Fragment>
        <div className="w3-white w3-text-grey w3-card-4">
            <div className="w3-display-container">            
                {/* <img src="https://lh3.google.com/u/0/d/1wQ_9CD_UQWCFFvFGiHMUks3cF_1v0sYP=w2984-h1688-iv1" style={{width:100 +'%'}} alt="Avatar" /> */}
                <img src="https://lh3.google.com/u/0/d/14soyDt94koChn9geVWBhT9Dw0PjJIA7v=w600-k-iv1" style={{width:100 +'%'}} alt="Avatar" />
                <div className="w3-display-bottomleft w3-container w3-text-black" >
                    <h2>{cv.FirstName +' '+ cv.LastName}</h2>
                </div>
            </div>
            <div className="w3-container">
                <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>{cv.JobTitle}</p>
                <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>{cv.Residence}</p>
                <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>{cv.Email}</p>
                <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>{cv.Mobile}</p>
                <hr />
                <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
                {
                cv.Skills.map( (skill, index) => {return Skill(skill,index)})
                }
                <br/>
                <p className="w3-large w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p>
                {
                cv.Languages.map( (language, index) => {return Language(language,index)})
                }
                <br/>
            </div>
        </div> 
        <br/>
        </React.Fragment>
    );
}

export default Bio;