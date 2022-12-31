import Image from "next/image";


export default function Profile(data) {

    return (
        <Image src={'/picture/profile7.jpg'} 
        width={130}
        height={130}
        className='rounded-full'
        alt='urmom' />
    );
  }