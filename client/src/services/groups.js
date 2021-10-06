import api from './apiConfig'

export const getGroups = async () => {
  try {
      const response = await api.get('/groups')
      return response.data
  } catch (error) {
      throw error
  }
}

export const getGroup = async id => {
  try {
      const response = await api.get(`/groups/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createGroup = async group => {
  try {
      const response = await api.post('/groups', group)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateGroup = async (id, group) => {
  try {
      const response = await api.put(`/groups/${id}`, group)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteGroup = async id => {
  try {
      const response = await api.delete(`/groups/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}
