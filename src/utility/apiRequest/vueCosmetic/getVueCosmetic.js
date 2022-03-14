import apiCaller from "../apiCaller";
import { getAuth } from "firebase/auth";

const getRealEstateList = async (vueCosmeticId) => {
  const token = await getAuth().currentUser.getIdToken();
  const result = await apiCaller.get(`vue-Cosmetic/${realEstateId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};

export default getvueCosmeticList;
