import api from './apiConfig'

export const getGifts = async () => {
  try {
      const response = await api.get('/gifts')
      return response.data
  } catch (error) {
      throw error
  }
}

export const getGift = async id => {
  try {
      const response = await api.get(`/gifts/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createGift = async gift => {
  try {
      const response = await api.post('/gifts', gift)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateGift = async (id, gift) => {
  try {
      const response = await api.put(`/gifts/${id}`, gift)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteGift = async id => {
  try {
      const response = await api.delete(`/gifts/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}