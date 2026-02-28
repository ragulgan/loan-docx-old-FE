export const safeJSONParse = (data) => {
  try {
    // Return null if data is null, undefined, or empty string
    if (!data || data === "undefined" || data === "null") {
      return null;
    }
    // Try to parse the JSON string
    return JSON.parse(data);
  } catch (error) {
    console.error("JSON parse error:", error);
    return null;
  }
};

export const unsetLocalStorage = (key) => {
  localStorage.removeItem(key);
};