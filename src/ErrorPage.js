import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from "./styles/Button";
import styled from 'styled-components';

const Error = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h2>404</h2>
          <h3>Uh OH! You're lost.</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam nobis illo atque nostrum architecto, necessitatibus doloremque rerum dolor impedit aliquam earum quod sapiente officiis dolore maiores cumque tempora facilis accusamus.
          </p>
          <NavLink to="/">
            <Button>Go Back to Home</Button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;
    h2 {
      font-size: 10rem;
    }
    h3 {
      font-size: 4.2rem;
    }
    p {
      margin: 2rem 0;
    }
  }
`;

export default Error;
