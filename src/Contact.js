import styled from "styled-components";

const Contact = () => {
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
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.62520769873!2d77.69420811435393!3d12.995806917863955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae110b04a3be4b%3A0xcffb252dab2e9643!2sPhoenix%20Marketcity!5e0!3m2!1sen!2sbd!4v1670519393175!5m2!1sen!2sbd" 
      width="100%" 
      height="400" 
      style={{border:0}}
      allowFullScreen="" 
      loading="lazy"
      title="location" 
      referrerPolicy="no-referrer-when-downgrade">
    </iframe>
    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/xqkjrypk" method="POST" className="contact-inputs">
          <input type="text" placeholder="username" name="username" required autoComplete="off" />
          <input type="emain" placeholder="Email" name="Email" required autoComplete="off" />
          <textarea name="message" cols="30" rows="10" required autoComplete="off" placeholder="Enter your Message"></textarea>
          <input type="submit" value="send" />
        </form>
      </div>
    </div>
  </Wrapper>
  );
};

export default Contact;
