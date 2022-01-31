import { styled } from "@stitches/react";

const Button = styled("button", {
  backgroundColor: "gainsboro",
  borderRadius: "9999px",
  fontSize: "13px",
  padding: "10px 15px",
  "&:hover": {
    backgroundColor: "lightgray",
  },

  variants: {
    color: {
      primary: {
        backgroundColor: "black",
        color: "white",
      },
    },
    size: {
      large: {
        fontSize: "16px",
        height: "40px",
        paddingLeft: "16px",
        paddingRight: "16px",
      },
      xlarge: {
        fontSize: "20px",
        height: "48px",
        paddingLeft: "20px",
        paddingRight: "20px",
      },
    },
  },
});

export default Button;
