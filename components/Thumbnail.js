import Image from 'next/image';

const Thumbnail = ({result}) => {
  console.log (result);

  const BASE_URL = 'https://image.tmdb.org/t/p/original';
  // console.log (result);
  return (
    <div className="p-2 rounded-lg">
      <div className="container relative group">
        <div className="rounded-lg">
          <Image
            layout="responsive"
            objectFit="cover"
            src={`${BASE_URL}${result.backdrop_path || result.poster_path}`}
            height={1080}
            width={1920}
          />
        </div>
        <div className="data opacity-0 transition duration-300 text-white absolute top-0 p-8 font-xl z-0 group-hover:opacity-100 h-full w-full bg-[#000] hover:bg-opacity-80">
          <p className="line-clamp-3">
            {result.overview}
          </p>
          <img src="/icons/thumbup.svg" className="w-[20px]" />
          <p>
            {result.vote_count}
            {' '}
          </p>
        </div>
      </div>
      <div className="p-2 text-white">
        <h2 className="text-2xl">{result.title || result.original}</h2>
        <p className="">
          {result.vote_average}

        </p>
      </div>
    </div>
  );
};

export default Thumbnail;
