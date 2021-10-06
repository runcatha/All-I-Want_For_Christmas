import api from './config';

export const getAllGifts = async () => {
  const resp = await api.get('/gifts');
  return resp.data;
};

export const getOneGift = async (id) => {
  const resp = await api.get(`/gifts/${id}`);
  return resp.data;
};

export const postGift = async (giftData) => {
  const resp = await api.post('/gifts', { gift: giftData });
  return resp.data;
};

export const deleteGift = async (id) => {
  const resp = await api.delete(`/gifts/${id}`);
  return resp;
};

export const putGift = async (id, giftData) => {
  const resp = await api.put(`/gifts/${id}`, { gift: giftData });
  return resp.data;
};

// export const addFlavorToFood = async (flavorId, id) => {
//   const resp = await api.put(`/flavors/${flavorId}/foods/${id}`);
//   return resp.data;
// };
