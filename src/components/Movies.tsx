import { AiOutlineSearch } from "react-icons/ai";


const Movies = () => {
    return (
        <div
        style={{ backgroundImage: "url(" + "./images/landing.png" + ")" }}
        className="w-full h-[30vh] text-center text-white bg-cover bg-center"
      >
        <div className="w-full h-[30vh] bg-black opacity-[0.7] absolute z-0"></div>
        <div className="z-10 relative pt-6">
          <p className="md:text-[38px] text-[20px] font-bold">Wanna watch free movies & TV?</p>
          <p className="md:text-[22px] text-[17px]">
            Your Gateway To Movie Magic
          </p>
          <div className="mx-auto my-8 flex items-center justify-between bg-white rounded-3xl max-w-[80%] sm:w-[70%] md:w-[50%]">
            <input
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
    )
}
export default Movies;