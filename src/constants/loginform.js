export const LOGIN_FORM_CONFIG = {
  LOGIN_HEADER: {
    typographyProps: {
      children: "Login",
      variant: "h5",
    },
  },
  FORGOT_PASSWORD: {
    buttonProps: {
      children: "Forgot Password?",
      variant: "text",
      size: "small",
    },
  },
  CREATE_ACCOUNT_TEXT: {
    typographyProps: {
      children: "No account?",
      variant: "body3",
      align: "center",
    },
  },
  SIGNUP: {
    buttonProps: {
      children: "Create Account",
      variant: "text",
      size: "small",
    },
  },

  EMAIL_INPUT: {
    inputProps: {
      label: "Email",
      required: true,
      name: "email",
    },
  },
  PASSWORD_INPUT: {
    inputProps: {
      label: "Password",
      required: true,
      name: "password",
    },
  },
  BUTTON: {
    buttonProps: { children: "Login", variant: "contained", size: "large" },
  },
};
