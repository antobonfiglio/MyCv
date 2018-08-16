import React, {Component} from 'react';
import Toggle from './Toggle';

export default class Bio extends Component {

    constructor(props){
        super(props);
        this.state = {
            isInEditMode: false,
            cv: this.props.cv,
            skills: this.props.cv.Skills,
            languages: this.props.cv.Languages
        };
    }
            
    render(){

        const { isInEditMode, cv, skills, languages } = this.state;

        return (
            <React.Fragment>
            <div className="w3-white w3-text-grey w3-card-4">
                <div className="w3-display-container">            
                    {/* <img src="https://lh3.google.com/u/0/d/1wQ_9CD_UQWCFFvFGiHMUks3cF_1v0sYP=w2984-h1688-iv1" style={{width:100 +'%'}} alt="Avatar" /> */}
                    <img src={cv.photoURL} style={{width:100 +'%'}} alt="Avatar" />
                    <div className="w3-display-bottomleft w3-container w3-text-black" >
                        <h2>{cv.FirstName +' '+ cv.LastName}</h2>
                    </div>
                    <Toggle isInEditMode={isInEditMode} 
                            onToggle={this.toogleEdit} 
                            style={{fontSize:22+'px', 
                                    position:'absolute', 
                                    margin:'36px 0px 0px -55px', 
                                    cursor:'pointer', 
                                    float:'right', 
                                    zIndex:1}} 
                    /> 
                </div>
                <div className="w3-container">
                    {
                    isInEditMode ?
                        this.editInfo(cv)
                        :
                        this.Info(cv)
                    }
                    
                    <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
                    
                    {
                    isInEditMode ?
                        <div>
                             <div style={{float:'left', margin:'0px 20px 20px 0px', cursor:'pointer'}} onClick={this.addSkill}>
                                + Add new
                            </div>
                        {
                            skills.map( (skill, index) => {return this.editSkill(skill,index)})
                        }
                        </div>
                        :
                        skills.map( (skill, index) => {return this.Skill(skill,index)})
                    }
                    
                    <br/>
                    <p className="w3-large w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p>
                    {
                    isInEditMode ?
                        languages.map( (language, index) => {return this.editLanguage(language,index)})
                        :
                        languages.map( (language, index) => {return this.Language(language,index)})
                    }
                    <br/>
                </div>
            </div> 
            <br/>
            </React.Fragment>
        );
    };

    toogleEdit = () => {
        this.setState((prevState, props) => {
            return{ isInEditMode: !this.state.isInEditMode }
        });
    };

    Info = (cv) => {
        return(
            <React.Fragment>
                <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>{cv.JobTitle}</p>
                <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>{cv.Residence}</p>
                <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>{cv.Email}</p>
                <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>{cv.Mobile}</p>
                <hr />
            </React.Fragment>
        );
    };

    editInfo = (cv) => {
        return(
            <React.Fragment>
                <p>
                <input type="text" 
                          style={{width:48+'%',marginRight:2+'%'}}
                          name="FirstName"
                          value={cv.FirstName}
                          placeholder='First name'
                          onChange={this.handleInputChange} />
                <input type="text" 
                          style={{width:50+'%'}}
                          name="LastName"
                          value={cv.LastName}
                          placeholder='Last name'
                          onChange={this.handleInputChange} />    
                </p>
                <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>
                <input type="text" 
                          style={{width:100+'%'}}
                          name="JobTitle"
                          value={cv.JobTitle}
                          placeholder='Job Title'
                          onChange={this.handleInputChange} />                
                </p>
                <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>
                <input type="text" 
                          style={{width:100+'%'}}
                          name="Residence"
                          value={cv.Residence}
                          placeholder='Residence'
                          onChange={this.handleInputChange} />
                </p>
                <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>
                <input type="text" 
                          style={{width:100+'%'}}
                          name="Email"
                          value={cv.Email}
                          placeholder='Email'
                          onChange={this.handleInputChange} />
                </p>
                <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>
                <input type="text" 
                          style={{width:100+'%'}}
                          name="Mobile"
                          value={cv.Mobile}
                          placeholder='Mobile'
                          onChange={this.handleInputChange} />
                </p>
                <hr />
            </React.Fragment>
        );
    };

    Skill = (skill, index) => {
        return (
            <React.Fragment key={index}>
            <p>{skill.Speciality}</p>
            <div className="w3-light-grey w3-round-xlarge w3-small">
                <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:skill.Level+'%'}}>{skill.Level}%</div>
            </div>
            </React.Fragment>
        );
    };

    editSkill = (study, index) => {  
        return(
            <React.Fragment key={index}>
                <p><input type="text" 
                          style={{width:100+'%'}}
                          name="Speciality"
                          value={study.Speciality} 
                          placeholder='Skill'
                          onChange={this.handleSkillInputChange(index)} /></p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                <input type="text" 
                          style={{width:8+'%'}}
                          name="Level"
                          value={study.Level} 
                          placeholder='Level'
                          onChange={this.handleSkillInputChange(index)} /> %
                </div>
                <div onClick={this.removeSkill(index)} style={{cursor:'pointer', float:'right'}}>remove</div>  
                <br />                
            </React.Fragment>
        );
    };

    addSkill = () => {
        this.setState((prevState, props) =>  {
            prevState.skills.unshift({ Speciality: '', Level:'' });
          return { skills: prevState.skills }
        });
    }
    
    removeSkill = (idx) => () => {        
        this.setState((prevState, props) =>  {
          return { studies: prevState.skills.filter((s, sidx) => idx !== sidx) }
       });
    }
    
    Language = (language, index) => {
        return (
            <React.Fragment key={index}>
            <p>{language.Language}</p>
            <div className="w3-light-grey w3-round-xlarge">
                <div className="w3-round-xlarge w3-teal" style={{ height:24+'px', width:language.Level+'%' }}></div>
            </div>
            </React.Fragment>
        );
    };

    editLanguage = (language, index) => {
        return (
            <React.Fragment key={index}>
            <p><input type="text" 
                          style={{width:100+'%'}}
                          name="Language"
                          value={language.Language} 
                          placeholder='Language'
                          onChange={this.handleLanguageInputChange(index)} /></p>
            <div className="w3-light-grey w3-round-xlarge">
            <input type="text" 
                          style={{width:8+'%'}}
                          name="Level"
                          value={language.Level} 
                          placeholder='Level'
                          onChange={this.handleLanguageInputChange(index)} /> %
            </div>
            </React.Fragment>
        );
    };

    handleInputChange = (evt) => {
        evt.persist();
        const propertyName = evt.target.name;
        this.setState((prevState, prevProps) => {
            const cv = prevState.cv;
            cv[propertyName] = evt.target.value;
            return { ...cv };
        });
    }

    handleSkillInputChange = (idx) => (evt) => {
        const skills = this.state.skills.map((skill, sidx) => {
          if (idx !== sidx) return skill;          
          skill[evt.target.name] = evt.target.value;
          return { ...skill }; 
        });
        this.setState((prevState, props) => { 
           return { skills }
        });
    };

    handleLanguageInputChange = (idx) => (evt) => {
        const languages = this.state.languages.map((language, sidx) => {
          if (idx !== sidx) return language;          
          language[evt.target.name] = evt.target.value; 
          return { ...language };  
        });
    
        this.setState((prevState, props) => { 
           return { languages }
        });
    };
}