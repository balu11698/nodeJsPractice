import axios from "axios";

export const getAllAnime = async (req, res) => {
  const animeData = await axios.get("https://api.jikan.moe/v4/seasons/now");
  res.status(200).json(animeData.data);
};
