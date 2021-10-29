import styled from "styled-components";

export const Container = styled.form `
  h2{
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input{
    width: 100%;
    padding: 0 1.5rem;
    font-weight: 400;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    font-size: 1rem;

    background: #e7e9ee;

    &::placeholder{
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type = 'submit']{
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;
    background: var(--green);
    border-radius: 0.25rem;
    border: 0;
    margin-top: 1.5rem;
    color: #FFF;
    font-size: 1rem;
    transition: 0.2s;
    font-weight: 600;

    &:hover{
      filter: brightness(0.9);
    }

  }
 
`;