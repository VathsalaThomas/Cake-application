import React, { useState } from 'react';
import './CakeDetails.css'

function CakeDetails() {
 /* const [userInput, setUserInput] = useState({
    type: '',
    quantity: '',
    description:'',
   email:'',
    date:''
  });*/
  const [type, setType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const handleSubmit = (event) => {
      event.preventDefault();
      fetch('http://localhost:9000/submit-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          type: type, 
          Quantity: quantity,
        Description: description,
        Email: email,
        Date: date
        })
      })
      .then(response => response.text())
      .then(data => {
        console.log(data);
        // Do something with the response data if needed
      })
      .catch(error => {
        console.error(error);
        // Handle the error if needed
      });
  
    };
 

  

  return (
    <form className='add-cake' onSubmit={handleSubmit}>
      <label>
        Type
        <br />
        <input 
          type="text"
          id="type"
          name="type"
          value={type}
          onChange={event => setType(event.target.value)}
        />
      </label>
      <label>
        Quantity
        <br />
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={quantity}
          onChange={event => setQuantity(event.target.value)}
        />
      </label>
      <label>
        Description
        <br />
        <input
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={event => setDescription(event.target.value)}
        />
      </label>
       
      <label>
        Email
        <br />
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
      </label>
      <label>
        Date
        <br />
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={event => setDate(event.target.value)}
        />
      </label>
      <button className='button add' type="submit">Add To List
      </button>
    </form>
  );
}
/*window.addEventListener('load', function() { const form = document.querySelector('form');
  
form.addEventListener('add', (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  fetch('/submit-data', {
    method: 'POST',
    body: formData
  })
  .then((response) => {
    // Handle response from server
  })
  .catch((error) => {
    console.error('Error:', error);
  }); })

});*/


export default CakeDetails;

