import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "5d68b2d5baa6435893735863e739d633",
  },
});
