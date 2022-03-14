import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const deleteVueCosmetic = async (id) => {
  const token = await getAuth().currentUser.getIdToken();

  return apiCaller.delete(`vue-cosmetic/${id}`, {
    headers: { authorization: `Bearer ${token}` },
  });
};

export default deleteRealEstate;
