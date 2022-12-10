import { getLanyard} from '../../lib/lanyard';

export default async (_, res) => {
  const response = await getLanyard();
  const  items  = await response.json();

  return res.status(200).json( items );
};