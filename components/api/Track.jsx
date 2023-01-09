export default function Track(track) {
  const formula = track.currPage <= 1 ? 0 : (5 * (track.currPage - 1))
    return (
      <div className="group flex flex-row items-baseline border-b border-gray-200 dark:border-gray-800 max-w-3xl w-full mt-6 mb-6">
        <p className="group-hover:text-white font-space text-sm font-bold text-[#cbd5e0]">
          {track.ranking + formula}
        </p>
        <div className="flex flex-col pl-3">
          <a
            className=" font-outfit text-[14px] font-medium tracking-wide text-gray-900 dark:text-gray-100 w-80 sm:w-96 md:w-full"
            href={track.songUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="truncate">{track.title}</div>
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