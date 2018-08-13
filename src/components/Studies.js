import React, {Component} from 'react';
import Toggle from './Toggle';
import Study from './Study';

export default class Studies extends Component {

    constructor(props){
        super(props);
        this.state = {
            isInEditMode: this.props.isInEditMode,
            studies: this.props.studies
          };
    }
  
    render(){        
        const { isInEditMode, studies } = this.state;
        return(
            <React.Fragment>    
               <div className="w3-container w3-card w3-white">
                    <div>                    
                        <h2 className="w3-text-grey w3-padding-16">
                            <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education <Toggle isInEditMode={isInEditMode} onToggle={this.toogleEdit} /> 
                        </h2>
                    </div>                    
                    {
                    isInEditMode ?
                    <div>
                        <div style={{float:'left', margin:'0px 20px 20px 0px', cursor:'pointer'}} onClick={this.handleAddStudy}>
                            + Add new
                        </div>
                        {studies.map( (study, i) => { return this.renderEditStudy(study, i)  } ) }
                    </div>
                    :    
                    studies.map( (study, i) => { return this.renderStudy(study, i)  } )
                }
            </div>                             
            </React.Fragment>         
        );    
    }

    renderStudy = (data, index) => {
        return(
            <React.Fragment key={index}>
                <Study study={data} />
                {                         
                    index < this.state.studies.length-1 ? <hr/> : ''
                }
            </React.Fragment>    
        );
    }

    renderEditStudy = (study, index) => {  
        return(
            <React.Fragment key={index}>
                <div className="w3-container">
                    <h5 className="w3-opacity"><b>
                        <input type="text" 
                               style={{width:100+'%'}}
                               name="School"
                               value={study.School} 
                               placeholder='School name'
                               onChange={this.handleInputChange(index)} /></b>
                    </h5>
                    <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>
                        <input type="text"
                               style={{width:15+'%'}}  
                               name="FromYear"
                               value={study.FromYear} 
                               placeholder='From year'
                               onChange={this.handleInputChange(index)} /> 
                               {' - '}  
                        <input type="text" 
                               style={{width:15+'%'}}  
                               name="ToYear"
                               value={study.ToYear} 
                               placeholder='To year'
                               onChange={this.handleInputChange(index)} />
                    </h6>
                    <p> <input type="text" 
                               style={{width:100+'%'}}  
                               name="Degree"
                               value={study.Degree} 
                               placeholder='Degree'
                               onChange={this.handleInputChange(index)} />                        
                    </p>                                        
                    <div onClick={this.handleRemoveStudy(index)} style={{cursor:'pointer', float:'right'}}>remove</div>                    
                    <br />
                    {                         
                         index < this.state.studies.length-1 ? <hr/> : ''
                    }
                    <br/>
                </div>
            </React.Fragment>
        );
    };

    toogleEdit = () => {
        this.setState((prevState, props) => {
            return{ isInEditMode: !this.state.isInEditMode }
        });
    }

    handleInputChange = (idx) => (evt) => {
        const studies = this.state.studies.map((study, sidx) => {
          if (idx !== sidx) return study;          
          study[evt.target.name] = evt.target.value; //I used the input 'name' (evt.target.name) attribute to update the correct property
          return { ...study, study }; //return the new object with the merged updates 
        });
    
        this.setState((prevState, props) => { 
           return { studies }
        });
    }

    handleAddStudy = () => {
        this.setState((prevState, props) =>  {
          return { studies:this.state.studies.concat([{ School: '', FromYear:'', ToYear:'', Degree:'' }]) }
        });
    }
    
    handleRemoveStudy = (idx) => () => {
        this.setState((prevState, props) =>  {
          return { studies: this.state.studies.filter((s, sidx) => idx !== sidx) }
       });
    }
} 