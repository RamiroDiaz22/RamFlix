import styled from "styled-components";

const handleWidth = (wide) => {
  switch (wide) {
    case "fullWidth":
      return "100%";
    case "medium":
      return "240px";
    default:
      return "140px";
  }
};

export const NetflixButton = styled.button`
  margin: 0;
  padding: 0;
  z-index: 15;
  color: ${(props) => (props.color === "grey" ? "#111" : "#fff")};
  border-radius: ${(props) => (props.radius ? "5px" : null)};
  text-transform: inherit;
  background-color: ${(props) => (props.color === "grey" ? "#ccc" : "#e50914")};
  padding: 5px 10px;
  height: 44px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  width: ${({ wide }) => handleWidth(wide)};
`;

export const NetflixInput = styled.input`
  margin: 0;
  padding: 0;
  z-index: 30;
  background-color: #fff;
  height: 20px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
`;
