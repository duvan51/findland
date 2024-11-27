import axios from "axios";

export async function updateUser({ id, user }) {
  try {
    const { data } = await axios.put(`/ruta-de-usuario?id=${id}`, user)
    
    if (!data || !data.user) throw new Error('Error actualizando usuario')
    return [null, data.user]
  } catch (error) {
    return [error]
  }
}

export async function deleteUser(id) {
  try {
    const { data } = await axios.put(`/ruta-de-usuario?id=${id}`, { isDeleted: true })
    
    if (!data || !data.user) throw new Error('Error eliminando usuario')
    return [null, data.user]
  } catch (error) {
    return [error]
  }
}