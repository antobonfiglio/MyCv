import React, { Component } from 'react';
import Toggle from './Toggle';
import Experience from './Experience';

export default class  Experiences extends Component {

    constructor(props){
        super(props);
        this.state = {
            isInEditMode: false,
            experiences: this.props.experiences
        };
    }

    render(){

        const { isInEditMode, experiences } = this.state;

        return(    
            <React.Fragment>
                    <div className="w3-container w3-card w3-white w3-margin-bottom">             
                    <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience <Toggle isInEditMode={isInEditMode} onToggle={this.toogleEdit} />   
                    </h2>                    
                    {
                        isInEditMode ?
                        <div>
                            <div style={{float:'left', margin:'0px 20px 20px 0px', cursor:'pointer'}} onClick={this.addExperience}>
                                + Add new
                            </div>
                            { 
                                experiences.map( (experience, i) => { return this.editExperience(experience, i)  } ) 
                            }
                        </div>
                        :
                        experiences.map( (experience, i) => { return this.renderExperience(experience, i)  } )
                    }   
                    </div>             
            </React.Fragment>
        );
    }

    renderExperience = (experience, index) => {        
        return(
            <React.Fragment key={index}>
                <Experience experience={experience}  />
                {                         
                    index < this.state.experiences.length-1 ? <hr/> : ''
                }                 
                <br />
            </React.Fragment>
        );
    }

    editExperience = (experience, index) => {  
        return(
            <React.Fragment key={index}>
                <div className="w3-container" >
                    <h5 className="w3-opacity"><b>
                    <input type="text" 
                               style={{width:30+'%'}}
                               name="Role"
                               value={experience.Role} 
                               placeholder='Role'
                               onChange={this.inputChange(index)} />
                    {' - '}                     
                     <input type="text" 
                               style={{width:68+'%'}}
                               name="WebSite"
                               value={experience.WebSite} 
                               placeholder='Web site'
                               onChange={this.inputChange(index)} />
                     </b></h5>
                    <h6 className="w3-text-teal">
                    <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                    <input type="text" 
                               style={{width:15+'%'}}
                               name="From"
                               value={experience.From} 
                               placeholder='eg. Jan. 2018'
                               onChange={this.inputChange(index)} />   
                    {' - '}
                    <input type="text" 
                               style={{width:15+'%'}}
                               name="To"
                               value={experience.To} 
                               placeholder='eg. Aug. 2018'
                               onChange={this.inputChange(index)} />
                    </h6>
                     <ul>
                        {
                        experience.Activities.map((activity,i) =>                
                            <li key={i}>
                                <input type="text" 
                                       style={{width:96+'%',margin:'0px 10px 10px 0px'}}                               
                                       value={activity}                                
                                       onChange={this.activityInputChange(index, i)} />
                               <button type="button" onClick={this.removeActivity(index, i)} className="small">-</button>
                            </li>
                            )
                        }
                        <li onClick={this.addActivity(index)} style={{listStyleType: 'none', cursor:'pointer'}}>
                            + New
                        </li>
                     </ul>
                     <div onClick={this.removeExperience(index)} style={{cursor:'pointer', float:'right'}}>remove</div>  
                     <br />
                     {                         
                         index < this.state.experiences.length-1 ? <hr/> : ''
                     }                 
                     <br />
                </div>    
            </React.Fragment>        
        );
    };

    toogleEdit = () => {
        this.setState((prevState, props) => {
            return{ isInEditMode: !this.state.isInEditMode }
        });
    }

    activityInputChange = (changedExperienceIndex, changedActivityIndex) => (evt) => {
        const experiences = this.state.experiences.map((experience, experienceIndex) => {
          if (experienceIndex !== changedExperienceIndex) return experience;          

            experience.Activities = experience.Activities.map((activity, activityIndex) => {
              if(activityIndex !== changedActivityIndex) return activity;
                return evt.target.value;
            });
          return { ...experience, experience };  
        });
    
        this.setState((prevState, props) => { 
           return { experiences }
        });
    }

    addActivity = (changedExperienceIndex) => (evt) => {        
        const experiences = this.state.experiences.map((experience, experienceIndex) => {
          if (experienceIndex !== changedExperienceIndex) return experience;          
          
          experience.Activities = experience.Activities.concat(""); 
          return { ...experience, experience };  
        });
    
        this.setState((prevState, props) => { 
           return { experiences }
        });
    }

    removeActivity = (changedExperienceIndex, changedActivityIndex) => (evt) => {
        const experiences = this.state.experiences.map((experience, experienceIndex) => {
          if (experienceIndex !== changedExperienceIndex) return experience;          
            
          experience.Activities = experience.Activities.filter((s, activityIndex) => activityIndex !== changedActivityIndex) 
          return { ...experience, experience };  
        });
    
        this.setState((prevState, props) => { 
           return { experiences }
        });
    }

    inputChange = (changedExperienceIndex) => (evt) => {
        const experiences = this.state.experiences.map((experience, experienceIndex) => {
          if (changedExperienceIndex !== experienceIndex) return experience;          
          
          experience[evt.target.name] = evt.target.value; 
          return { ...experience, experience };  
        });
    
        this.setState((prevState, props) => { 
           return { experiences }
        });
    }

    addExperience = () => {
        this.setState((prevState, props) =>  {
          return { experiences:this.state.experiences.concat([{ Role: '', Website:'', From:'', To:'', Activities:[] }]) }
        });
    }
    
    removeExperience = (removedExperienceIndex) => () => {
        this.setState((prevState, props) =>  {
          return { experiences: this.state.experiences.filter((s, experienceIndex) => removedExperienceIndex !== experienceIndex) }
       });
    }
}
