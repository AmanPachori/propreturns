const axios = require("axios");
const url ="https://graph-ql-server-two.vercel.app/graphql"
const Query = `
query Query {
  getAlluser {
    price
    address
    image
    noOfBedroom
    noOfBathroom
    area
  }
}
  `



export const getdata = async () => {
  const data = axios.post(url,{query:Query}).then((result) => {
    return result.data.data.getAlluser;
  });
  return data;
};

