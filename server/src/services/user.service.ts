import prisma from '../lib/database';
import { hashSync } from 'bcryptjs'
import { User } from '@prisma/client';

export const getAllUsers = async () => {
  return await prisma.user.findMany();
};

export const createUser = async (data: User) => {
  data.password = hashSync(data.password, 10)
  return await prisma.user.create({
    data
  });
};

export const getUser = async (data: User) => {
  console.log(data);
  
  return await prisma.user.findFirst({
    where: data
  })
};

export const updateUser = async (id: string, data: User) => {
  const user = await prisma.user.findFirst({
    where: { id }
  })
  if (!user) return null;

  return await prisma.user.update({
    where: { id },
    data
  });
};

export const deleteUser = async (id: string) => {
  const user = await prisma.user.update(
    {
      where: { id },
      data: { isDeleted: true }
    }
  );
  return user;
};
