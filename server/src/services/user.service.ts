import prisma from '../lib/database';
import { hashSync, compareSync } from 'bcryptjs'
import { User } from '@prisma/client';
import { error } from 'console';

//#region OBTENER LISTA
export const getAllUsers = async () => {
  return await prisma.user.findMany();
};
//# endregion

//#region CREAR USUARIO
export const createUser = async (data: User) => {
  try {
    data.password = hashSync(data.password, 10)
    const newUser = await prisma.user.create({
      data
    });
    if (!newUser) {
      return [{ error: 'Error creando usuario' }]
    }
    const { password, ...user } = newUser
    return [null, user]
  } catch (error) {
    return [{ error: 'Error creando usuario' }]
  }
};
//# endregion

//#region OBTENER USUARIO
export const getUser = async (data: User) => {
  try {
    const retrievedUser = await prisma.user.findFirst({
      where: data
    })
    if (!retrievedUser) {
      return [{ error: 'Usuario no existe' }]
    }
    const { password, ...user } = retrievedUser
    return [null, user]
  } catch (error) {
    return [{ error: 'Error obteniendo usuario' }]
  }
}
//# endregion

//#region MODIF USUARIO
export const updateUser = async (id: string, data: User) => {
  try {
    const retrievedUser = await prisma.user.findFirst({
      where: { id }
    })
    if (!retrievedUser) return [{ error: 'Usuario no existe' }];

    const updatedUser = await prisma.user.update({
      where: { id },
      data
    });
    const { password, ...user } = updatedUser
    return [null, user]
  } catch (error) {
    return [{ error: 'Error actualizando usuario' }]
  }
};
//# endregion

//#region BORRAR USUARIO
export const deleteUser = async (id: string) => {
  try {
    const retrievedUser = await prisma.user.findFirst({
      where: { id }
    })
    if (!retrievedUser) return [{ error: 'Usuario no existe' }];

    await prisma.user.update(
      {
        where: { id },
        data: { isDeleted: true }
      }
    );
    return null
  } catch (error) {
    return { error: 'No se pudo eliminar usuario' }
  }
};
//# endregion