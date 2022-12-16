import { getTime} from '../../lib/time';

export default async (_, res) => {
  const response = getTime();
  const items  = response;

  return res.status(200).json( items );
};