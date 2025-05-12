import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const createAdmin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const hash = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hash,
        role: 'admin',
      },
    });

    res.status(201).json({ message: 'Admin erstellt', userId: user.id });
  } catch (error) {
    res.status(500).json({ error: 'Fehler beim Erstellen des Admins' });
  }
  
};

export const createUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;
  
    try {
      const hashed = await bcrypt.hash(password, 10);
  
      const user = await prisma.user.create({
        data: {
          email,
          password: hashed,
          role: 'user',
        },
      });
  
      res.status(201).json({ message: 'User erstellt', userId: user.id });
    } catch (error) {
      res.status(500).json({ error: 'Fehler beim Erstellen des Users' });
    }
  };
  
