import axios from "axios";

//istek için gerekli ayarlar
const options = {
  headers: {
    "X-RapidAPI-Key": "defe6cde8cmsh20e0872fe2fb06cp128390jsn9d1682f342de",
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
  params: {
    lang: "tr",
    geo: "TR",
  },
};

//yapılan bütün isteklerin ortak olan başlangıç kısmını belirle
axios.defaults.baseURL = "https://yt-api.p.rapidapi.com";

//parametre olarak aldığı url'e istek atıp
//geriye elde ettiği verileri döndüren
export const getData = async (endpoint) => {
  try {
    //api isteği at
    const res = await axios.get(endpoint, options);
    return res.data;
  } catch (err) {
    console.log("Verileri çekerken bir sorun oluştu", err);
  }
};
