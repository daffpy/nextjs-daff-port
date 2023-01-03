import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const entries = await prisma.guestbook.findMany({
      orderBy: {
        created_at: 'desc'
      }
    });

    return res.json(
      entries.map((entry) => ({
        id: entry.id.toString(),
        body: entry.body,
        created_by: entry.created_by,
        created_at: entry.created_at
      }))
    );
  }

  const session = await getSession({ req });
  const { email, name } = session.user;

  if (!session) {
    return res.status(403).send('Unauthorized');
  }

  if (req.method === 'POST') {
    const user = await prisma.guestbook.findMany({
      where: {
        email: email,
      },
      orderBy: {
        created_at: 'desc'
      },
      take: 1
    })
    if(user.length && Date.now() - Date.parse((user[0].created_at).toString()) < 86400000){
      return res.status(200).json({status:'429 Too Many Requests', error: 'You are still on a 1-day cooldown'})
    }
    const newEntry = await prisma.guestbook.create({
      data: {
        email,
        body: (req.body.body || '').slice(0, 250),
        created_by: name
      }
    });

    return res.status(200).json({
      id: newEntry.id.toString(),
      body: newEntry.body,
      created_by: newEntry.created_by,
      created_at: newEntry.created_at
    });
  }

  return res.send('Method not allowed.');
}