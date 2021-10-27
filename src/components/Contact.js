import React, { Component } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
const regForName = RegExp('[a-zA-Z][a-zA-Z ]*')
const regForEmail=RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForMobile=RegExp(/^[0-9]{10}/);

export class Contact extends Component {
    constructor(props){
        super(props);
        this.state={ename:null, email:null, contact:null,gender:null, feedback:null,
            errors:{
                ename:' ', email:' ', contact:' ', gender:' ', feedback:' '
            }
        };
    }

    handler=(event)=>{
        const{name,value}=event.target;
        let errors = this.state.errors;

        switch(name){
            case 'ename':
                errors.ename=regForName.test(value)?'':'Invalid Name, Use Character Only';
                break;
            case 'email':
                errors.email=regForEmail.test(value)?'':'Email is not valid';
                break;
            case 'contact':
                errors.contact=regForMobile.test(value) ?'':'Number should be 10 digit';
                break;
            case 'gender':
                errors.gender=value.toLowerCase()==='male' || value.toLowerCase()==='female' ? '':'Invalid gender';
                break;
            case 'feedback':
                errors.feedback=regForName.test(value)?'':'Invalid Name, Use Character Only';
                break;
        }
        this.setState({errors,[name]:value},()=>{
            console.log(errors)
        })
    }
    formSubmit=(event)=>{
        event.preventDefault();
        if(this.validate(this.state.errors)){
            alert("form submitted")
        }
        else{
            alert("Invalid form")
        }
    }
    validate=(errors)=>{
        let valid=true;
        Object.values(errors).forEach((val)=> val.length >0 && (valid=false));
        return valid;
    }
    render() {
        const {errors}=this.state;
        return (
            <div>
                <div className="text-center font-weight-bold pt-5 mt-5">
            <h3>Complaint/Feedback Form</h3>
          </div>
          <Container>
            <Form onSubmit={this.formSubmit}>
                <Form.Group>
                    <Form.Label><b>Name</b></Form.Label>
                    <Form.Control type="text" name="ename" id="ename" placeholder="Enter your name" onChange={this.handler}/>
                    {errors.ename.length>0 && <span style={{color:'red'}}>{errors.ename}</span>}
                </Form.Group>
                <Form.Group>
                    <Form.Label><b>Email</b></Form.Label>
                    <Form.Control type="text" id="email" name="email" placeholder="Enter your email-id" onChange={this.handler}/>
                    {errors.email.length>0 && <span style={{color:'red'}}>{errors.email}</span>}
                </Form.Group>
                <Form.Group>
                    <Form.Label><b>Contact No.</b></Form.Label>
                    <Form.Control type="text" id="contact" name="contact" placeholder="Enter your Contact No." onChange={this.handler}/>
                    {errors.contact.length>0 && <span style={{color:'red'}}>{errors.contact}</span>}
                </Form.Group>
                <Form.Group>
                    <Form.Label><b>Gender</b></Form.Label>
                    <Form.Control type="text" name="gender" id="gender" placeholder="Enter your gender" onChange={this.handler}/>
                    {errors.gender.length>0 && <span style={{color:'red'}}>{errors.gender}</span>}
                </Form.Group>
                <Form.Group>
                    <Form.Label><b>Feedback/Complaint</b></Form.Label>
                    <Form.Control as="textarea" rows={5} name="feedback" id="feedback"  placeholder="Enter your feedback/complaint" onChange={this.handler}/>
                    {errors.feedback.length>0 && <span style={{color:'red'}}>{errors.feedback}</span>}
                </Form.Group>
                <Button as="input" type="submit" value="Submit"/>
            </Form>
          </Container>

            </div>
        )
    }
}
export default Contact
