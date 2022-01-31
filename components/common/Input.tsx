import { styled } from "@stitches/react";
import { $$StyledComponentProps } from "@stitches/react/types/styled-component";
import { FC, InputHTMLAttributes } from "react";

const StyledInput = styled("input", {});

type InputProps = InputHTMLAttributes<HTMLInputElement> &
  typeof StyledInput[$$StyledComponentProps];

const Input: FC<InputProps> = (props) => {
  return <StyledInput {...props} />;
};

export default Input;
