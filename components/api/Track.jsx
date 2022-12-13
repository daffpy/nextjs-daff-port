export default function Track(track) {
    return (
      <div className="group flex flex-row items-baseline border-b border-gray-200 dark:border-gray-800 max-w-3xl w-full mt-8">
        <p className="group-hover:text-white font-space text-sm font-bold text-[#cbd5e0]">
          {track.ranking}
        </p>
        <div className="flex flex-col pl-3">
          <a
            className=" font-space text-[14px] font-bold text-gray-900 dark:text-gray-100 truncate w-60 sm:w-96 md:w-full"
            href={track.songUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="inline-block group-hover:bg-[length:100%_100%] marker marker--mark">{track.title}</div>
          </a>
          <p
            className="font-space text-[12px] text-[#cbd5e0] mb-4 truncate w-60 sm:w-96 md:w-full"
            color="gray.500"
          >
            {track.artist}
          </p>
        </div>
      </div>
    );
  }