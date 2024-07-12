import axios from "axios";

export  async function products() {
  try {
    const response = await axios.get("/api/proxy");
    // console.log("Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function product(productId) {
  try {
    const response = await axios.get(`/api/proxy/${productId}`);
    console.log("Response:", response.data);
    // return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
}


// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   switch (req.method) {
//     case "GET": {
//       return getCart(req, res); //only admin
//     }
//     case "POST": {
//       return createProduct(req, res);
//     }
//     case "PATCH": {
//       return updateProduct(req, res);
//     }
//     case "DELETE": {
//       return deleteProduct(req, res);
//     }
//   }
// }
