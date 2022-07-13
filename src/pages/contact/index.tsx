import React, { useState } from 'react'

type TypeProps = {
  category: string;
  value: string;
}

function Contact() {
  const formInitialDetails = {
    name: '',
    Company: '',
    email: '',
    phone: '',
    message: '',
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('send');
  const [status, setStatus] = useState({});

  const onFormUpdate = ({category, value}: TypeProps) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:3000/contact", { 
      method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(formDetails),
  });
  setButtonText("Send");
  let result = await response.json();
  setFormDetails(formInitialDetails);
  if(result.code == 200) {
    setStatus({ success: true, message: 'Message sent successfully'});
  } else {
    setStatus({ success: false, message: 'Something went wrong, please try again later.'});
  }
  }
  
  return (
    <>
    </>
  )
}

export default Contact