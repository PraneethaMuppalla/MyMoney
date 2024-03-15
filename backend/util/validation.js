function isValidText(value) {
  return value && value.trim().length > 0;
}

function isValidDate(value) {
  const date = new Date(value);
  return value && date !== "Invalid Date";
}

function isValidImageUrl(value) {
  return value && value.startsWith("http");
}

function isValidEmail(value) {
  return value && value.indexOf("@") > -1 && value.endsWith(".com");
}

function isValidPassword(value) {
  return value && value.trim().length > 6;
}

exports.isValidText = isValidText;
exports.isValidDate = isValidDate;
exports.isValidImageUrl = isValidImageUrl;
exports.isValidEmail = isValidEmail;
exports.isValidPassword = isValidPassword;
