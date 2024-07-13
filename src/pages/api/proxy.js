import axios from "axios";

const params = {
  organization_id: process.env.ORGAN_ID,
  // reverse_sort: false,
  // page: 2,
  // size: 10,
  Appid: process.env.APP_ID,
  Apikey: process.env.API_KEY,
};
axios.defaults.headers.common.Authorization = `Bearer ${process.env.API_KEY}`;

async function getProducts(req, res) {
  try {
    const response = await axios.get("https://api.timbu.cloud/products", {
      params: params,
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getProduct(req, res) {
  try {
    const response = await axios.get(
      `https://api.timbu.cloud/products/${req.query.productId}`,
      {
        params: params,
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export default async function handler(req, res) {
  const { method } = req;
  if (req.query.productId && method === "GET") {
    await getProduct(req, res);
  } else {
    await getProducts(req, res);
  }
}
