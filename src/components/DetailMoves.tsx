import { useParams } from "react-router-dom";
import BoxMovie from "./BoxMovie";
import { useQuery } from "react-query";

const DetailMovie = () => {
  // get id in params
  const { id } = useParams();

  // get movie by id f
  const { data, isLoading } = useQuery("singleMovie", () =>
    fetch(`https://moviesapi.ir/api/v1/movies/${id}`).then((res) => res.json())
  , {
    cacheTime: 0,
  })
  console.log(data);

  // show loading 
  if (isLoading)
    return (
      <div className="flex items-center justify-center">
        <img src="https://i.stack.imgur.com/ATB3o.gif" />;
      </div>
    );

  return (
    <div className="px-6 sm:px-14 md:px-28 lg:px-36 p-10">
      <p>Home / Movies / {data.title}</p>
      <div className="shadow-lg rounded-lg p-5 w-full flex flex-col sm:flex-row gap-4 my-10">
        <div className="flex justify-center md:justify-start">
          <BoxMovie {...data} />
        </div>
        <div className="w-[100%] md:w-[80%] text-center md:text-start">
          <p>
            A down on her luck lawyer, dangerously jealous of her old college
            friend's successful career and enviable relationship, attempts to
            step into her friend's professional and personal shoes- no matter
            the cost.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-2 my-2">
            <button className="bg-blue-500 text-white rounded-lg px-4 py-[2px]">
              {data.type}
            </button>
            <button className="border-blue-500 border rounded-lg text-blue-500 px-2">
              HD
            </button>
          </div>
          <div className="flex flex-col my-5 md:items-center gap-3 md:flex-row md:justify-between justify-center">
            <div className="flex flex-col gap-5 font-[700]">
              <p>Duration: {data.runtime}</p>
              <p>Country: {data.country}</p>
              <p>Production: Deal Breaker Studios</p>
            </div>
            <div className="flex flex-col gap-5 font-[700]">
              <p>Released: {data.released}</p>
              <p>Genre: {data?.genres?.map((item: string) => ` ${item} `)}</p>
              <p>Casts: Enhle Mbali Mlotshwa, Lumko Leqela,</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailMovie;
