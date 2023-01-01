import Image from "next/image";
import profilePic from 'public/picture/profile7.jpg'


export default function Profile(data) {

    return (
        <Image src={profilePic} 
        width={130}
        height={130}
        className='rounded-full'
        alt='urmom'
        placeholder="blur" />
    );
  }