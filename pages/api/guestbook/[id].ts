import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  const { id } = req.query;
  const {discord_id} = session.user;

  const entry = await prisma.guestbook.findUnique({
    where: {
      id: Number(id)
    }
  });

  if (!session || discord_id !== entry.discord_id) {
    return res.status(403).send('Unauthorized');
  }

  if (req.method === 'DELETE') {
    await prisma.guestbook.delete({
      where: {
        id: Number(id)
      }
    });

    return res.status(204).end();
  }

  return res.send('Method not allowed.');
}