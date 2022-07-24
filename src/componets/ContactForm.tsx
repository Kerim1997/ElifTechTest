import Col from 'react-bootstrap/Col';
export function ContactForm (){
    return (
        <Col className ="col-xs-12 col-md-5 bg-light mt-5 mx-auto p-5 shadow rounded" style={{maxHeight:'430px'}}>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Name:</label>
                        <input type="text" className="form-control" id="exampleInputName" aria-describedby="name" style={{maxWidth: '30rem'}}/>
                      </div>
                    <div className="mb-3">
                      <label  className="form-label">Email address:</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{maxWidth: '30rem'}}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone:</label>
                        <input type="phone" className="form-control" id="exampleInputName" aria-describedby="Phone" style={{maxWidth: '30rem'}}/>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Address:</label>
                        <input type="text" className="form-control" id="exampleInputName" aria-describedby="name" style={{maxWidth: '30rem'}}/>
                      </div>        
                </form>
        </Col>
    );
}