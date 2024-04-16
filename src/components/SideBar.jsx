import { useContext } from "react";
import { categories } from "./../constants/index";
import { VideoContext } from "../context/VideoContext";
const SideBar = () => {
  const { selectedCategory, setSelectedCategory } = useContext(VideoContext);
  return (
    <div className="flex flex-col p-1 mb-0 md:p-1">
      {categories.map((item) => (
        <div key={item.name} onClick={() => setSelectedCategory(item)}>
          <div
            className={`${
              selectedCategory.name === item.name && `bg-[#c6c5c5]`
            } flex items-center gap-2 py-4 px-2 pb-0 md:px-3 text-base md:text-lg cursor-pointer rounded-md hover:bg-[#c6c5c5]`}
          >
            <span className="max-md:text-2xl">{item.icon}</span>
            <span className="max-md:hidden">{item.name}</span>
          </div>
          {item.divider && <hr className="mt-2 border-black" />}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
