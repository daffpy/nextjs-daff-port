import Image from "next/image";


export default function Profile(data) {

    return (
        <Image src={!data ? "https://api.lanyard.rest/820569882860716072.webp":`https://cdn.discordapp.com/avatars/820569882860716072/${data.url}.webp?size=512`} 
        width={100}
        height={100}
        className='rounded-full'
        alt='urmom' />
    );
  }