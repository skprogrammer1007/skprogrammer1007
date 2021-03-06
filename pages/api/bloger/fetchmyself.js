import Connection from "../../../Databases/Connection";
import FetchBloger from "../../../Middlewares/fetchBloger";
import allModels from "../../../Databases/Models";

const handler = async (req, res) => {
  const bloger = FetchBloger(req, res);
  const { Bloger } = allModels();
  if (bloger) {
    try {
      const data = await Bloger.findById(bloger.id).select("-password");
      console.log(data);
      res.json({ data });
    } catch (e) {
      res.json("error occured")
    }
  }
};
export default Connection(handler);
