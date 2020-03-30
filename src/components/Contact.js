import React from 'react';
import "../css/contact.css";

const Contact = ()=> {

  const INITIAL_STATE = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }

  const reducer = (state, action)=> {
    switch (action.type) {
      case 'updateValue':
        return ''
      default:
        return INITIAL_STATE;
    }
  }

  const [state, dispatch] = React.useReducer(reducer(INITIAL_STATE, {type: 'init'}))

  const handelSubmit = (e)=>{
    e.preventDefault()
    console.log(state)
  }

  return (
    <form>
      <input type='text' placeholder="Name"/>
      <input type="email" placeholder="Email" name="email" />
      <input type="text" placeholder="Subject" name="subject" />
      <textarea placeholder="Message"/>
      <button type="submit" onClick={handelSubmit}>Submit</button>
    </form>
  )
}

export default Contact;