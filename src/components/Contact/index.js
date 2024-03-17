import React from "react";
import "./contact.css";

function App() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "40e9dae6-d854-4a99-9ff5-82dc926dae51");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
     setResult("Form Submitted Successfully");
     
      event.target.reset();
    } else {
      console.log("Error", data);
      alert("error");
      setResult(data.message);
    }
  };

  return (
    <div className="form">
      <form onSubmit={onSubmit}>
      <div className="form_box_outer">
        <div className="form_box">
          <div className="form_name">
            <p className="form_question_text">Your Name</p>
        <input  type="text" name="name" required/>
        </div>
        <div className="form_email">
          <p className="form_question_text">Email</p>
        <input  type="email" name="email" required/>
        </div>
        <div className="form_name">
            <p className="form_question_text">Subject</p>
        <input  type="text" name="subject" required/>
        </div>

        <div className="form_message">
        <p className="form_question_text">Message</p>
        <textarea  name="message" required></textarea>
      </div>
      <div className="form_button">
        <button type="submit">Submit Form</button>
        </div>
        <div className="result_box">
      <span className="result">{result}</span>
      </div>
        </div>
      </div>

      </form>

    </div>
  );
}

export default App;