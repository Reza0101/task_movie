import BoxMovie from "./BoxMovie";

const DetailMovie = () => {
  return (
    <div className="px-6 sm:px-14 md:px-28 lg:px-36 p-10">
      <p>Home / Movies / movieName</p>
      <div className="shadow-lg rounded-lg p-5 w-full flex flex-col sm:flex-row gap-4 my-10">
        <div className="flex justify-center md:justify-start">
          <BoxMovie />
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
              Movie
            </button>
            <button className="border-blue-500 border rounded-lg text-blue-500 px-2">
              HD
            </button>
          </div>
          <div className="flex flex-col my-5 md:items-center gap-3 md:flex-row md:justify-between justify-center">
            <div className="flex flex-col gap-2 font-[700]">
              <p>Duration: 75 min</p>
              <p>Country: United States of America</p>
              <p>Production: Deal Breaker Studios</p>
            </div>
            <div className="flex flex-col gap-2 font-[700]">
              <p>Released: 2023-07-07</p>
              <p>Genre: Thriller</p>
              <p>Casts: Enhle Mbali Mlotshwa, Lumko Leqela,</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailMovie;
