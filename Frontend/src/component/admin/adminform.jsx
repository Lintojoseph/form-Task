import React, { useState,useEffect } from 'react';
import { Form, Row, Col, Button, Container, Card } from 'react-bootstrap';
import { fetchQuestions } from '../../axios/axios';
import { connect } from 'react-redux';
import { formSubmitted } from '../../axios/axios';

function MainForm({ formData, questions, errorMessage,  formSubmitted, fetchQuestions }) {
    const [localQuestions, setLocalQuestions] = useState([{ type: '', text: '', options: [] }]);
  
    useEffect(() => {
      // Fetch questions when the component mounts
      fetchQuestions();
    }, [fetchQuestions]);
  
    const handleAddQuestion = () => {
      setLocalQuestions([...localQuestions, { type: '', text: '', options: [] }]);
    };
    const handleFormSubmit = () => {
        // You can access the form data from your local state or Redux state
        formSubmitted(localQuestions);
      };
  
    const handleTypeChange = (index, type) => {
      const updatedQuestions = [...localQuestions];
      updatedQuestions[index].type = type;
      setLocalQuestions(updatedQuestions);
    };
  
    const handleTextChange = (index, text) => {
      const updatedQuestions = [...localQuestions];
      updatedQuestions[index].text = text;
      setLocalQuestions(updatedQuestions);
    };
  
    const handleOptionChange = (index, optionIndex, value) => {
      const updatedQuestions = [...localQuestions];
      updatedQuestions[index].options[optionIndex] = value;
      setLocalQuestions(updatedQuestions);
    };
  
    const handleAddOption = (index) => {
      const updatedQuestions = [...localQuestions];
      updatedQuestions[index].options.push('');
      setLocalQuestions(updatedQuestions);
    };

    const renderAdditionalFields = (question, index) => {
        switch (question.type) {
          case 'radio':
            return (
              <div>
                {/* Additional fields for radio type */}
                {question.options.map((option, optionIndex) => (
                  <Form.Check
                    key={optionIndex}
                    type="radio"
                    label={`Option ${optionIndex + 1}`}
                    checked={option === question.selectedOption}
                    onChange={() => handleOptionChange(index, optionIndex, option)}
                  />
                ))}
                <Button variant="secondary" onClick={() => handleAddOption(index)}>
                  Add Option
                </Button>
              </div>
            );
          case 'checkbox':
            return (
              <div>
                {/* Additional fields for checkbox type */}
                {question.options.map((option, optionIndex) => (
                  <Form.Check
                    key={optionIndex}
                    type="checkbox"
                    label={`Option ${optionIndex + 1}`}
                    checked={option === question.selectedOption}
                    onChange={() => handleOptionChange(index, optionIndex, option)}
                  />
                ))}
                <Button variant="secondary" onClick={() => handleAddOption(index)}>
                  +
                </Button>
              </div>
            );
          case 'text':
            return (
              <div>
                {/* Additional fields for short answer type */}
                <Form.Control type="text" placeholder="Short answer" />
              </div>
            );
          default:
            return null;
        }
      };
      

return (
  <Container className="mt-5">
    <Card>
      <Card.Body>
        <Form>
          {localQuestions.map((question, index) => (
            <div key={index}>
              <Row className="mb-3">
                <Col>
                  <Form.Group controlId={`questionText${index}`}>
                    <Form.Label>Question Text</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter question text"
                      value={question.text}
                      onChange={(e) => handleTextChange(index, e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId={`questionType${index}`}>
                    <Form.Label>Question Type</Form.Label>
                    <Form.Control
                      as="select"
                      value={question.type}
                      onChange={(e) => handleTypeChange(index, e.target.value)}
                    >
                      <option value="">Select Type</option>
                      <option value="radio">Radio Button</option>
                      <option value="checkbox">Check Box</option>
                      <option value="text">Short Answer</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              {renderAdditionalFields(question, index)}
            </div>
          ))}
          <Button variant="primary" onClick={handleAddQuestion}>
            +
          </Button>
        </Form>
      </Card.Body>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleFormSubmit} >
                Create Post
            </button>
    </Card>
  </Container>
  );
}

const mapStateToProps = (state) => ({
    formData: state.questions.formData,
    questions: state.questions.questions,
    errorMessage: state.questions.errorMessage,
  });
  
  // Connect your component to Redux using connect
  export default connect(mapStateToProps, { formSubmitted, fetchQuestions })(MainForm);