import React from 'react';

const Toogle = ({isInEditMode, onToggle}) => {

    const style = {fontSize:22+'px', margin:'10px 20px 0px 0px', cursor:'pointer', float:'right', zIndex:1};

    return(
        isInEditMode ?
        <i className="fa fa-save" style={style} onClick={onToggle}></i>                             
        :                            
        <i className="fa fa-edit" style={style} onClick={onToggle}></i>                            
    )
}

export default Toogle;