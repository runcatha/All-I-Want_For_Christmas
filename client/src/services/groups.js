import api from './config'

export const getAllGroups = async () => {
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

export const postGroup = async group => {
  try {
      const response = await api.post('/groups', group)
      return response.data
  } catch (error) {
      throw error
  }
}

export const postUserToGroup = async (id) => {
  try {
    const response = await api.post(`/groups/${id}/join`)
  } catch (error) {
    throw error
  }
}

export const putGroup = async (id, group) => {
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
