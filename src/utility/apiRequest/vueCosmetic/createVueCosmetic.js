import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const createRealEstate = async (vueCosmeticBody) => {
  const token = await getAuth().currentUser.getIdToken();
  const { data } = await apiCaller.post("vue-cosmetic/create", vueCosmeticBody, {
    authorization: `Bearer ${token}`,
  });

  return data;
};

export default createvueCosmetic;
