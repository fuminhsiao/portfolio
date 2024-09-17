// api.js
const API_URL = "https://django-portfolio-k1kg.onrender.com/";  // 替换为你的 Render URL

export const fetchData = async () => {
  try {
    const response = await fetch(`${API_URL}endpoint/`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
