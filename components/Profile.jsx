import Image from "next/image";

export default function Profile(url) {

    return (
        <Image src={!url ? "/assets/img/pp-placeholder.jpg":`https://cdn.discordapp.com/avatars/820569882860716072/${url[0]}.webp?size=512`} 
        width={100}
        height={100}
        className='rounded-full'
        alt='urmom'/>
    );
  }