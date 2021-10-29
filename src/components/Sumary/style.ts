import styled from "styled-components";


export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div{
    background: var(--shape);
    padding: 1rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);
  }

  header{
    display: flex;
    justify-content: space-between;    
    align-items: center;
  }

  strong{
    display: block;
    margin-top: 1rem;
    font-weight: 500;
    font-size: 2rem;
    line-height: 3rem;
  }

  div.text-decoration{
    background: var(--green);
  }

`