import React,{Component} from 'react';
import{Modal, Button, Form} from 'react-bootstrap';


 class Pcat extends React.Component {
    constructor(props){
        super(props);
        this.state={
          datas:[]
          
        };
        
        
        this.handleSubmit=this.handleSubmit.bind(this);
        
        
    }
        
    handleSubmit(event) {
      
      event.preventDefault();
      const {datas}=this.state;
      const newItem=this.newItem.value;
    
      const isOndatas=datas.includes(newItem);
      if(isOndatas){
    alert(' Already in productList ')
      }
    else{
      this.setState({
        datas:[...this.state.datas, newItem]
       });
      alert('Successfully submitted ');
      
      this.addItem.reset();
    }}
    

render(){
  const {datas}=this.state
    
        return(
                 
              <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="contained-modal-title-vcenter">
                     Create New Category
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div className='container'>
                        
                       <h3 style={{color:'red'}}> Add Product Item</h3>
                       
                              <form ref={input=> this.addItem=input} onSubmit={e=>this.handleSubmit(e)}>
                                      <input ref={input=> this.newItem=input} type="text" placeholder='Add new'    />

                                             <input type="submit" value="save"/>

                              </form>
                      <div>
                          {datas.map(item=> {return (<tr key={item}> <td> {item} </td> </tr>)})}
                     </div>
                        

                      </div>


            </Modal.Body>
                    <Modal.Footer>
                      <Button variant='danger' onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                  </Modal>
                
              


        );
    }
  }


export default Pcat;