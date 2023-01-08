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
        discord_id: entry.discord_id,
        discord_discriminator: entry.discord_discriminator,
        created_by: entry.created_by,
        created_at: entry.created_at
      }))
    );
  }

  const session = await getSession({ req });
  const { discord_id, name, discord_discriminator } = session.user;

  if (!session) {
    return res.status(403).send('Unauthorized');
  }

  if (req.method === 'POST') {
    const user = await prisma.guestbook.findMany({
      where: {
        discord_id: discord_id,
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
        discord_id: discord_id,
        discord_discriminator: discord_discriminator,
        body: (req.body.body || '').slice(0, 250),
        created_by: name
      }
    });

    return res.status(200).json({
      id: newEntry.id.toString(),
      body: newEntry.body,
      discord_id: newEntry.discord_id,
      discord_discriminator: newEntry.discord_discriminator,
      created_by: newEntry.created_by,
      created_at: newEntry.created_at
    });
  }

  return res.send('Method not allowed.');
}