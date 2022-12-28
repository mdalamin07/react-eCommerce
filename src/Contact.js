import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {
  const { user, isAuthenticated} = useAuth0();
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
  <Wrapper>
    <h2 className="common-heading">Contact page</h2>
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57903.12952438149!2d91.82596223070259!3d24.8998373168711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d3d270329f%3A0xf58ef93431f67382!2sSylhet!5e0!3m2!1sen!2sbd!4v1672239753012!5m2!1sen!2sbd" 
      width="100%" 
      height="400" 
      style={{border:0}}
      allowFullScreen="" 
      loading="lazy"
      title="Sylhet Map" 
      referrerPolicy="no-referrer-when-downgrade">
    </iframe>
    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/xqkjrypk" method="POST" className="contact-inputs">
          <input 
            type="text" 
            placeholder="username" 
            name="username"
            value={isAuthenticated ? user.name : ""} 
            required 
            autoComplete="off" 
          />
          <input 
            type="emain" 
            placeholder="Email" 
            name="Email" 
            value={isAuthenticated ? user.email : ""} 
            required 
            autoComplete="off" 
          />
          <textarea 
            name="message" 
            cols="30" 
            rows="10" 
            required 
            autoComplete="off" 
            placeholder="Enter your Message">
          </textarea>
          <input type="submit" value="send" />
        </form>
      </div>
    </div>
  </Wrapper>
  );
};

export default Contact;
