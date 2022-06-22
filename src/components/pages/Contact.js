import React, { useState } from "react";
import "../styles/contact.css";
const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/13c15d10-f269-11ec-8ed8-456386acdd98"; 

const ContactForm = () => {
  const [status, setStatus] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Anything you need to inject dynamically
    const injectedData = {
      DYNAMIC_DATA_EXAMPLE: 123,
    };
    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    Object.assign(data, injectedData);

    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        // spam bot captcha protection
        if (response.status === 422) {
          Object.keys(injectedData).forEach((key) => {
            const el = document.createElement("input");
            el.type = "hidden";
            el.name = key;
            el.value = injectedData[key];

            e.target.appendChild(el);
          });

          e.target.submit();
          throw new Error("Please complete the captcha");
        }

        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then(() =>
        setStatus("Thank you for your interest! We'll be in touch soon!")
      )
      .catch((err) => setStatus(err.toString()));
  };

  if (status) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">{status}</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div class="contactform">
        <h3>
          If you wish to contact me, please fill out the form and I will get
          back to you via the e-mail given!
        </h3>
        <div class="contactinput">
          <div class="formsubtitles">
            <h4>Your name:</h4>
          </div>
          <input type="text" placeholder="name" name="name" required />
        </div>

        <div class="contactinput">
          <div class="formsubtitles">
            <h4>Your e-mail:</h4>
          </div>
          <input type="email" placeholder="Email" name="email" required />
        </div>
        <div class="contactinput">
          <div class="formsubtitles">
            <h4>Your message:</h4>
          </div>
          <textarea placeholder="message" name="message" required />
        </div>
        <div class="contactsend">
          <button type="submit" id="send">
        
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
