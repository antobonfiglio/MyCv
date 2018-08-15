import React from 'react';

const defaultStyle = {fontSize:22+'px', margin:'10px 20px 0px 0px', cursor:'pointer', float:'right', zIndex:1};

const Toogle = ({isInEditMode, style, onToggle}) => {

    const toggleStyle = style || defaultStyle;    
    return(
        isInEditMode ?
        <i className="fa fa-save" style={toggleStyle} onClick={onToggle}></i>                             
        :                            
        <i className="fa fa-edit" style={toggleStyle} onClick={onToggle}></i>                            
    )
}

export default Toogle;