// actions/questionActions.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

// Define action types for Redux
export const FORM_SUBMITTED = 'FORM_SUBMITTED';
export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';

export const formSubmitted = (formData) => async (dispatch) => {
  try {
    const requiredFields = ['field1', 'field2', 'field3']; // Replace with your actual required fields
    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      dispatch({ type: 'FORM_SUBMISSION_ERROR', payload: 'Required fields are missing' });
      return;
    }

    const response = await axios.post(API_BASE_URL, formData);

    // Dispatch an action to update Redux state for successful form submission
    dispatch({ type: FORM_SUBMITTED, payload: response.data });
    console.log('Form submitted successfully');
  } catch (error) {
    console.error('Form submission failed:', error.message);

    // Dispatch an action to update Redux state for form submission failure
    dispatch({ type: 'FORM_SUBMISSION_ERROR', payload: 'Form submission failed' });
  }
};

// Action creator for fetching questions
export const fetchQuestionsSuccess = (questions) => ({
  type: FETCH_QUESTIONS_SUCCESS,
  payload: questions,
});

// Action creator for fetching questions from the server
export const fetchQuestions = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/questions`);

    // Dispatch an action to update Redux state with the fetched questions
    dispatch(fetchQuestionsSuccess(response.data));
    console.log('Questions fetched successfully');
  } catch (error) {
    console.error('Fetching questions failed:', error.message);

    // Dispatch an action to update Redux state for fetching questions failure
    dispatch({ type: 'FETCH_QUESTIONS_ERROR', payload: 'Fetching questions failed' });
  }
};
