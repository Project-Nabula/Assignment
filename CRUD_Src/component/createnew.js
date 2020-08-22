import react,{component} from 'react';
import{Modal, Button, Row, Col, Form} from 'react-bootstrap';



export class createNew extends Component {
    constructor(props){
        super(props);

    }


    render(){
        return(
                 
            
            
            <Modal
                    {...props}
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
                      <div>
                        <form>
                        Add form 
                          </form>
                          </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={props.onHide}>Close</Button>
                    </Modal.Footer>
                  </Modal>
                
              


        );
    }
}