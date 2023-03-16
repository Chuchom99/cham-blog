import axios from 'axios';
import React,{useState, } from 'react';
import { Col, Container, Form, Row, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import "./Home.css";


const Create = () => {

    const [post, setPost] = useState({
        title: "",
        content: "",
    })
    const navigate = useNavigate();

    const handleChange = (e) => {
        setPost(prev => ({...prev, [e.target.name]: e.target.value}))
    }
    const onClick = async e => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:3000/posts", post)
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }


  return (
    <Container>
        <Row>
            <Col md={6} className="login-form-container" >
              <Form >
                  <h1>Add your favourite movie</h1>
                  <Form.Group>
                      <Form.Label>Title</Form.Label>
                      <Form.Control type="text" placeholder="Movie name" name='title'  onChange={handleChange} />
                  </Form.Group>
                  <Form.Group>
                      <Form.Label>Content</Form.Label>
                      <Form.Control as="textarea" type="text" placeholder="Enter content" name='content' onChange={handleChange} />
                  </Form.Group>
                  <Form.Group>
                      <Button type="submit"  onClick={onClick} >Create</Button>
                      <p>Refresh home page after creating </p>
                  </Form.Group>
                 
              </Form>
            </Col>
            <Col md={6} className="signup-image" >

            </Col>
        </Row>
    </Container>
  )
}

export default Create