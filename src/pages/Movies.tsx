import { AiOutlineSearch } from "react-icons/ai";
import BoxMovie from "../components/BoxMovie";
import { useQuery } from "react-query";
import { useState } from "react";

const Movies = () => {
  const [pageCount, setPageCount] = useState<number>(1);
  const [searchMovie, setSearchMovie] = useState<string>("");

  const { data, isLoading } = useQuery(["movies", pageCount], () =>
    fetch(`https://moviesapi.ir/api/v1/movies?page=${pageCount}`).then((res) =>
      res.json()
    )
  );

  const {
    data: searchData,
    error: searchError,
    isLoading: searchLoading,
  } = useQuery(["searchMovie", searchMovie], () =>
    fetch(
      `https://moviesapi.ir/api/v1/movies?q=${searchMovie}&page={page}`
    ).then((res) => res.json())
  );

  console.log("searchData", searchData, searchError, searchLoading);

  let arrayBtn = [];

  if (data) {
    var { page_count, current_page } = data?.metadata;
    for (let i = 1; i <= page_count; i++) {
      arrayBtn.push(i);
    }
  }

  if (isLoading)
    return (
      <div className="flex items-center justify-center">
        <img src="https://i.stack.imgur.com/ATB3o.gif" />;
      </div>
    );

  return (
    <>
      <div
        style={{ backgroundImage: "url(" + "./images/landing.png" + ")" }}
        className="w-full h-[30vh] text-center text-white bg-cover bg-center"
      >
        <div className="w-full h-[30vh] bg-black opacity-[0.7] absolute z-0"></div>
        <div className="z-10 relative pt-6">
          <p className="md:text-[38px] text-[20px] font-bold">
            Wanna watch free movies & TV?
          </p>
          <p className="md:text-[22px] text-[17px]">
            Your Gateway To Movie Magic
          </p>
          <div className="mx-auto my-8 flex items-center justify-between bg-white rounded-3xl max-w-[80%] sm:w-[70%] md:w-[50%]">
            <input
              value={searchMovie}
              onChange={(e) => setSearchMovie(e.target.value)}
              className="border-none outline-none w-full text-black bg-transparent p-3 h-full"
              type="text"
              placeholder="Enter Keywords"
            />
            <div className="text-white flex items-center bg-blue-500 m-2 rounded-xl p-1 w-[30%] md:w-[23%] justify-center cursor-pointer">
              <AiOutlineSearch />
              <p>Search</p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5 px-6 md:px-28 lg:px-36 mx-auto w-full">
        <div className="flex items-center w-full gap-2 py-4">
          <button className="border shadow-sm border-blue-500 rounded-2xl p-1 w-full">
            Fims
          </button>
          <button className="border shadow-md rounded-3xl p-1 w-full">
            Series
          </button>
        </div>
        <div className="flex flex-wrap gap-5 items-center justify-center">
          {searchMovie &&
            searchData?.data.map((movie: any) => <BoxMovie {...movie} />)}

          {!searchMovie &&
            data?.data.map((movie: any) => <BoxMovie {...movie} />)}

          {searchMovie && !searchData && <h1>This Not Movie</h1>}

          {searchLoading ||
            (isLoading && <img src="https://i.stack.imgur.com/ATB3o.gif" />)}
        </div>

        <div className="flex items-center justify-center my-5">
          <button
            className={`cursor-pointer  px-2 rounded-xl ${
              pageCount > 1 ? "border border-blue-500" : "opacity-[0.5] cursor-default text-blue-500"
            }`}
            onClick={() => pageCount > 1 && setPageCount((prev) => prev - 1)}
          >
            Prev
          </button>
          {!searchMovie &&
            arrayBtn.map((num: any) => (
              <p
                onClick={() => setPageCount(num)}
                className={`${
                  num == current_page && "bg-blue-500 text-white"
                } p-1 rounded-full px-3 py-2 cursor-pointer text-center`}
              >
                {num}
              </p>
            ))}
          <button
            onClick={() =>
              pageCount < arrayBtn.length &&
              setPageCount((prev) => prev + 1)
            }
            className={`cursor-pointer rounded-xl px-2 ${pageCount < arrayBtn.length ? 'border border-blue-500' : 'opacity-[0.5] cursor-default text-blue-500'}`}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};
export default Movies;
