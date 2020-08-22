import ReactDOM from 'react-dom';
import React from 'react';

import {Button,ButtonToolbar} from 'react-bootstrap';
import Pcat from './Createnew';


class Test extends React.Component {

constructor(props){
  super(props);
  this.state={
    title:"CRUD App",
    productList:['uniliver','dove','aci'],
    addModalshow:false
  };
  this.changeHandler=this.changeHandler.bind(this);
  //this.handleSubmit=this.handleSubmit.bind(this);
}

 
changeHandler(event){
  if(event.target.value==='Create new category')
{
  this.setState({
    addModalshow:true
  });
  this.addProduct.reset();
}

}

  render() {

    var modalclose=()=>this.setState({addModalshow:false});

 return( 
    <div className="App">
    <h1> This is {this.state.title} </h1>

  <form ref={input=>this.addProduct=input}>
    <label >
      <h3 style={{color:"red"}}><b> Product Brand </b>  </h3>
      </label>
      <br>
      </br>
<input  placeholder="Product_brand" list="browsers" onChange={this.changeHandler}/>
  <datalist id="browsers">
  
      <option value ="Create new category" ></option>


       {this.state.productList.map(item=> <option key={item} value={item}></option>)}
      </datalist>
      
      </form>

      <Pcat show={this.state.addModalshow} onHide={modalclose}  />

             </div>
    );
  }
}

ReactDOM.render(<Test />, document.getElementById('root'));

export default Test;