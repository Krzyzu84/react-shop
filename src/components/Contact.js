import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return <Wrapper>
    <div className="section-center">
      <h3>Join our newsletter and get 20% off</h3>
    <div className="content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula tempor elit, at dignissim erat. Nulla velit est, egestas nec consectetur in, dignissim vel mauris. Morbi augue ipsum, finibus sed odio a, molestie aliquam nunc. Nunc id tincidunt magna, at venenatis urna. Vivamus velit enim, dapibus vitae magna sit amet, viverra ultricie</p>
      <form  action="https://formspree.io/f/xknpdeon"
  method="POST"
  className="contact-form">
      <input type="email" name="_replyto" className="form-input" placeholder="enter email"></input>
      <button type="submit" className="submit-btn">subscribe</button>
      </form>
    </div>
    </div>
  </Wrapper>
}
const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`

export default Contact
