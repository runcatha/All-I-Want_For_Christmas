import api from './config'

export const getUser = async id => {
  try {
      const response = await api.get(`/users/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}