
import './App.css';
import React from 'react';

import abc from "./img.jpg";



class App extends React.Component {
  constructor (props){
    super(props)
   this.state={
        show : false,
        count : 0,
        fullName : 'Fedi Joubali',
        profession: 'reactjs developper ',
        bio: "It management",
        profilePhoto: <img src='abc' alt='profilepicture'/>

    };
this.toggleDiv = this.toggleDiv.bind(this)
    
}

oggleDiv = () =>{
  const {show} = this.state;
  this.setState({show : !show})
}
componentDidMount(){
  this.myIInterval = setInterval(()=> this.tick(), 1000);
}
componentWillUnmount(){
  clearInterval(this.myIInterval);
}
tick = ()=>{
  this.setState(prevState => ({
      count : prevState.count + 1 
  }))
}

  render() {
    const { count } = this.state 
    return (
      <div>
                    <button onClick={()=> this.toggleDiv()}>show</button>
            {this.state.show && 
            <div className="container">
              <p>{this.state.fullName}</p>
               <p>{this.state.profession}</p>
               <p>{this.state.bio}</p>
               <img  src={abc} alt="profile-pic"/>
               <p>current count: {count}</p>
            </div>
            
             }


      </div>
    )
  }
}

export default App;
