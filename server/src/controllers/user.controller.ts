import { Request, Response } from 'express';
import {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser
} from '../services/user.service';

export const getUsers = async (req: Request, res: Response) => {
  const users = await getAllUsers();
  res.json(users);
};

export const createUserHandler = async (req: Request, res: Response) => {
  const { data } = req.body;
  try {
    const user = await createUser(data);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: 'Error creating user.' });
  }
};

export const getUserHandler = async (req: Request, res: Response) => {
  const { data } = req.body;
  const user = await getUser(data);
  if (!user) return res.status(404).json({ error: 'User not found.' });

  res.json(user);
};

export const updateUserHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await updateUser(id, req.body);
  if (!user) return res.status(404).json({ error: 'User not found.' });

  res.json(user);
};

export const deleteUserHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await deleteUser(id);
  if (!user) return res.status(404).json({ error: 'User not found.' });

  res.json({ message: 'User deleted successfully.' });
};
