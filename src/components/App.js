import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {
  state = { language: 'english', color:'red' }

  onLanguageChange = (language,color) =>
  {
    this.setState({language:language, color:color})
  }

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i className = "flag us" onClick={()=>this.onLanguageChange('english','red')}/>
          <i className = "flag nl" onClick={()=> this.onLanguageChange('dutch','green')}/>
        </div>
        <LanguageContext.Provider value={this.state.language} >
          <ColorContext.Provider value={this.state.color}>
        <UserCreate />
        </ColorContext.Provider>
        </LanguageContext.Provider>
      </div>
    )
  }
}

export default App;