import { FormRow } from "routes/Checkout/styles";
import styled from "styled-components";
export const Input = styled.div`
  margin: 1rem 0;
`;
export const InputLabel = styled.p`
  font-size: 0.75rem;
  margin: 0.5rem 0;
`;

export const InputContainer = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  border: 1px solid #828282;
  border-radius: 12px;

  > span {
    color: #828282;
  }
  > input {
    border: none;
    outline: none;
    margin-left: 0.5rem;
    ::placeholder {
      font-weight: 600;
      font-size: 1rem;
    }
  }
  > select {
    border: none;
    outline: none;
    font-weight: 600;
    font-size: 1rem;
    color: #828282;
  }
  @media (max-width: 430px) {
    padding: 0.5rem;
  }
  @media (max-width: 400px) {
    padding: 0.2rem;
  }
`;

export const AckContainer = styled(FormRow)`
  justify-content: flex-start;
  > span {
    margin-left: 0.5rem;
    font-weight: 600;
    color: #4f4f4f;
  }
`;
