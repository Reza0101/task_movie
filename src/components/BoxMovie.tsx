import { Link } from "react-router-dom";

const BoxMovie = () => {
  return (
    <div className="rounded-lg relative w-[280px] overflow-hidden shadow-md border border-slate-400">
      <img src="https://moviesapi.ir/images/tt0103064_screenshot1.jpg" className="w-full h-[219px]" alt="" />
      <p className="text-white font-bold bg-blue-500 p-2 rounded-r-md absolute top-4 left-0">
        HD
      </p>
      <div className="bg-black h-[30px] w-[150px] absolute top-0 -right-10 rotate-45"></div>
      <div className="px-2 my-4">
        <p className="text-blue-500 font-[700] text-[17px]">The Last Of Us</p>
        <div className="flex items-center justify-between">
            <p>Year: 2022</p>
            <p>Duration: 75min</p>
        </div>
        <div className="flex justify-end mt-3">

        <Link to='/movies/1' className="text-white bg-blue-500 py-[1px] px-4 rounded-lg">Movie</Link>
        </div>
      </div>
    </div>
  );
};
export default BoxMovie;
