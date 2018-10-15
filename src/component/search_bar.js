import React, {Component} from 'react';

// class Search_bar extends Component{
// constructor(props){
// super(props);

// this.state = {term:''};

// }
//     render()
//     {
       
//         return <div> <input onChange={(event) => this.setState({term: event.target.value})}
//         />;
//         input: { this.state.term };
//         </div>
//     }
    
// }

class Search_bar extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state ={term:''};
  }
  
  render()
  {
    return (<div>
     
      <input onChange={event=>this.setState({term:event.target.value})} />
      <p>Input value:{this.state.term}</p> 
      </div>);
  }

}
export default Search_bar;