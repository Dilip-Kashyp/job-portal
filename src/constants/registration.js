import { DROPDOWN_OPTIONS } from "./options";

export const REGISTRATION_FORM_CONFIG = {
  REGISTRATION_HEADER: {
    typographyProps: {
      children: "Create Account",
      variant: "h5",
    },
  },
  EMAIL_INPUT: {
    inputProps: {
      label: "Email",
      required: true,
      type: "email",
      name: "email",
    },
  },
  PASSWORD_INPUT: {
    inputProps: {
      label: "Password",
      required: true,
      type: "password",
      name: "password",
    },
  },
  CONFIRM_PASSWORD_INPUT: {
    inputProps: {
      label: "Confirm Password",
      required: true,
      type: "password",
      name: "confirmPassword",
    },
  },
  NAME_INPUT: {
    inputProps: {
      label: "First Last Name",
      required: true,
      name: "firstName",
      type: "text",
    },
  },
  BUTTON: {
    buttonProps: {
      children: "Create Account",
      variant: "contained",
      size: "large",
      type: "submit",
    },
  },
  LOGIN_LINK: {
    buttonProps: {
      children: "Login",
      variant: "text",
      size: "small",
    },
  },
  ALREADY_HAVE_ACCOUNT: {
    typographyProps: {
      children: "Already have an account?",
      variant: "body3",
      align: "center",
    },
  },

  DROPDOWN_CONFIG: {
    selectProps: {
      name: "userType",
      label: "User Type",
      required: true,
    },
    inputLabelProps: {
      children: "User Type",
    },
    options: DROPDOWN_OPTIONS,
  },

};
