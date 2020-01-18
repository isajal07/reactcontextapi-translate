import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
class Button extends React.Component {
  //static contextType = LanguageContext; //It has to be 'contextType' 

  renderButton(value) {
    return (
      <button className= {`ui button ${value ==='red'?'red':'green'}`}>
      <LanguageContext.Consumer>
        {(value)=> value === 'english' ? 'submit' : 'voorleggen'}
      </LanguageContext.Consumer>
    </button>
    )
  }
  render(){
  
    return(
      <div>
      <ColorContext.Consumer>
      {(value)=>this.renderButton(value)}
      </ColorContext.Consumer>
      </div>
    )}
}

export default Button;