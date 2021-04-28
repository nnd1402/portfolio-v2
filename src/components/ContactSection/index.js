import React, { useState } from 'react'
import { useForm } from "react-hook-form";

import {GlobalStyle, StyledFormWrapper, StyledForm, StyledInput, StyledTextArea, StyledButton, HomeButtonContainer, LinkBtn, Title, StyledError, StyledSuccess} from './ContactElements'
import {RiArrowGoBackFill} from 'react-icons/ri';

import emailjs from 'emailjs-com';


const ContactSection = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const { register, handleSubmit, formState: { errors } } = useForm();


  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_TExGpyWZbi5mEJbkEQace";

  const onSubmit = (data, r) => {
      sendEmail(serviceID, templateID, {
          name: data.name,
          email: data.email,
          subject: data.subject,
          description: data.description
      },
      userID
      )
      r.target.reset();
  }

  const sendEmail = (serviceID, templateID, variables, userID) => {
      emailjs.send(serviceID, templateID, variables, userID)
        .then(() => {
          setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.")
        }).catch(err => console.error(`Something went wrong ${err}`))
        };

    return (
        <>
      <GlobalStyle />
      <StyledFormWrapper>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Title>Contact Form</Title>
          <span>
            <StyledSuccess>
              <p>{successMessage}</p>
            </StyledSuccess>
          </span>
          <label htmlFor="name">Name</label>
          <StyledInput
            id="name"
            type="text"
            name="name"
            {...register("name", {
              required: "Please enter your name",
              maxLength: {
                value: 20,
                message:
                  "Please enter a name with fewer than 20 characters",
              },
            })}
          />
          <span>
            <StyledError>
              <p>{errors.name && errors.name.message}</p>
            </StyledError>
          </span>
          <label htmlFor="email">Email</label>
          <StyledInput
            id="email"
            type="email"
            name="email"
            {...register("email", {
              required: "Please provide your email",
              pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid Email"
              }
              })
          } 
          />
          <span>
            <StyledError>
              <p>{errors.email && errors.email.message}</p>
            </StyledError>
          </span>
          <label htmlFor="subject">Subject</label>
          <StyledInput
            id="subject"
            type="text"
            name="subject"
            {...register("subject", {
              required: "OOPS, you forgot to add the subject.",
              })
          } 
          />
          <span>
            <StyledError>
              <p>{errors.subject && errors.subject.message}</p>
            </StyledError>
          </span>
          <label htmlFor="description">Description</label>
          <StyledTextArea
            id="description"
            type="text"
            name="description"
            {...register("description", {
              required: "Please enter the text of your message",
              })
          } 
          />
          <span>
            <StyledError>
              <p>{errors.description && errors.description.message}</p>
            </StyledError>
          </span>
            <HomeButtonContainer>
                <StyledButton type="submit">Send Message</StyledButton>
                <LinkBtn to="/home"><RiArrowGoBackFill size={40}  /></LinkBtn>
            </HomeButtonContainer>
        </StyledForm>
      </StyledFormWrapper>
    </>   
    );
}
export default ContactSection
