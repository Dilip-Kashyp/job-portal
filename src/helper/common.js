export function isLoggedInUserJobSeeker({ userType }) {
  return userType === 1 ? true : false;
}

export function isLoggedInUserRecruiter({ userType }) {
  return userType === 2 ? true : false;
}
