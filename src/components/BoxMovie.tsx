import { Link } from "react-router-dom";

const BoxMovie = ({
  runtime,
  id,
  year,
  title,
  poster,
}: {
  runtime: string;
  id: string;
  year: string;
  title: string;
  poster: string;
}) => {
  return (
    <div className="rounded-lg relative w-[280px] overflow-hidden shadow-md border border-slate-400">
      <div className="w-[280px] h-[214px] overflow-hidden">
        <Link to={`/movies/${id}`}>
          <img
            src={poster}
            className="w-[280px]  cursor-pointer hover:scale-110 duration-300"
            alt=""
          />
        </Link>
      </div>
      <p className="text-white font-bold bg-blue-500 p-2 rounded-r-md absolute top-4 left-0">
        HD
      </p>
      <div className="bg-black h-[30px] w-[150px] absolute top-0 -right-10 rotate-45"></div>
      <div className="px-2 my-4">
        <p className="text-blue-500 font-[700] text-[17px] overflow-hidden h-[50px]">
          {title}
        </p>
        <div className="flex items-center justify-between">
          <p>Year: {year}</p>
          <p>Duration: {runtime}</p>
        </div>
        <div className="flex justify-end mt-3">
          <Link
            to={`/movies/${id}`}
            className="text-white bg-blue-500 py-[1px] px-4 rounded-lg"
          >
            Movie
          </Link>
        </div>
      </div>
    </div>
  );
};
export default BoxMovie;
