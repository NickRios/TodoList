import styled from "styled-components";

type ContainerProps = {
  finished: boolean;
};

export const Container = styled.div(
  ({ finished }: ContainerProps) => `
	display: flex;
  background-color: #20212c;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;

  input {
    width: 40px;
    height: 18px;
    margin-right: 10px;
		
  }

  label {
		font-size: 18px;
    color: #ccc;
		text-decoration: ${finished ? "line-through" : "initial"};
		flex: 1
  }
`
);

export const Button = styled.button`
  background-color: transparent;
  height: 35px;
  padding: 0 17px;
  border-radius: 5px;
  width: 100%;
  font-size: 20px;
  color: red;
  border: none;
`;
