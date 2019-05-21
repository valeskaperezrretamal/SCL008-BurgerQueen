import React,{Component} from'react';
class OptionMenuWaiter extends Component {
  constructor(props){
    super(props);
    this.state= {data: JSON.parse(fetch('../OptionMenu.json'))};
    

  }
  render(){
    return(
      <div>
         {this.state.data.desayuno.map(optmenu=>{
        return <p>{optmenu.option}</p>
    })}

      </div>
    )
  }

 
}
  

export default OptionMenuWaiter;


