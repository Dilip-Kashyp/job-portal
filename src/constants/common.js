export const JOB_SEEKER_TITLE = "Job Seeker";
export const RECRUITER_TITLE = "Recruiter";

export const FEATURE_WIP_CONFIG = {
  BUTTON_CONFIG: {
    buttonProps: {
      children: "Home",
    },
  },
  TITLE_TEXT_CONFIG: ({ text }) => {
    return {
      typographyProps: {
        children: text,
        variant: "h6",
      },
    };
  },
  DESCRIPTION_TEXT_CONFIG: ({ text }) => {
    return {
      typographyProps: {
        children: text,
        variant: "caption",
      },
    };
  },


};

export const MENU_ITEMS = [
  { id: "home", label: "Home", path: "/" },
  { id: "about", label: "About me", path: "/about" },
  { id: "contact", label: "Login", path: "/login" },
];