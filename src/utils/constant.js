export const getBadgeClass = (status) => {
  switch (status) {
    case "Verified":
    case "Approved":
    case "Approved by Admin":
      return "badge verified-btn fs-16 roboto-regular";

    case "Pending":
    case "Pending Review":
    case "Pending Admin Review":
    case "Pending Engineer Review":
      return "badge  pending-btn fs-16 roboto-regular";

    case "Pending Legal Review":
      return "badge pending-legal-btn fs-16 roboto-regular";

    case "Sent to Bank":
      return "badge send-bank-btn fs-16 roboto-regular";

    case "Pending Payment":
      return "badge pending-pay-btn fs-16 roboto-regular";

    case "Not Paid":
    case "Unpaid":
    case "Rejected":
      return "badge not-paid-btn fs-16 roboto-regular";

    default:
      return "badge bg-light text-dark fs-16 roboto-regular";
  }
};

export const regexPattern = {
  email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.com$/,
  password: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  Username: /^[a-zA-Z_.,()/:\s ]*$/,
  mobileNumber: /^[0][1-9]\d{9}$|^[1-9]\d{9}$/,
}

export const errorMessage = {
  Email_Required: "Email is required",
  Password_Required: "Password is required",
  Invalid_Email: "Invalid email format",
  Password_Criteria: "Min 8 characters, 1 uppercase, 1 digit, 1 special character",
  Username_Invalid: "Username must enter",
  UserName_Required: "User Name is required",
  Mobile_Required: "Mobile Number is required",
  Mobile_Invalid: "Enter valid 10 digit mobile number"
}

export const SESSION = {
  ADMIN_TOKEN: "adminInfo",
  USER_TOKEN: "userInfo"
};

export const HEADER = {
  CONTENT_TYPE: "application/json",
  CACHE_CONTROL: "no-cache",
  TIMEOUT: 60000,
};