import axios from "axios";

export  async function products() {
  try {
    const response = await axios.get("/api/proxy");
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function productItem(productId) {
  try {
    const response = await axios.get(`/api/proxy?productId=${productId}`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
}
