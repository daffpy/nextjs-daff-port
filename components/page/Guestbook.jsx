import prisma from 'lib/prisma';
import Guestbook from 'components/GBAuth.jsx';

export default function GuestbookPage({ fallbackData }) {
  return (
    <div className='max-w-[550px] mx-auto'>
      <div className=''>
        <div className='font-outfit'>
        <p className="text-slate-800/90 dark:text-slate-400 mb-4 text-[15px] leading-relaxed sm:text-base font-light tracking-[0.015em]">
            Write something here, whether it's <b>about me</b>, <b>about my site</b>, or just <b>anything appropriate</b> really <a className='text-slate-500 italic'>(yes, really!)</a>  — 
            <b> Your presence</b> here is what makes it special!
          
        </p>
        </div> 
        <Guestbook fallbackData={fallbackData} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const entries = await prisma.guestbook.findMany({
    orderBy: {
      created_at: 'desc'
    }
  });

  const fallbackData = entries.map((entry) => ({
    id: entry.id.toString(),
    body: entry.body,
    created_by: entry.created_by.toString(),
    created_at: entry.created_at.toString()
  }));

  return {
    props: {
      fallbackData
    },
    revalidate: 60
  };
}