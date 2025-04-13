import { FaCheck } from "react-icons/fa";
import { ThumbnailType } from ".";
import clsx from "clsx";
import { memo } from "react";

interface ThumbnailProps {
  thumbnail: ThumbnailType;
  selected: boolean;
  onClick: (thumbnail: ThumbnailType) => void;
}
const Thumbnail = memo(function Thumbnail(props: ThumbnailProps) {
  const { thumbnail, selected, onClick } = props;

  console.log(" - - ", thumbnail.id);

  return (
    <button
      className={clsx(
        "relative min-w-[250px] text-left h-16 rounded-md shadow p-4",
        selected ? "border border-blue-500" : "",
        thumbnail.disabled
          ? "bg-gray-400 cursor-not-allowed text-white"
          : "cursor-pointer hover:shadow-lg transition hover:bg-blue-100"
      )}
      disabled={thumbnail.disabled}
      onClick={() => onClick(thumbnail)}
    >
      {selected && (
        <div className="absolute top-0 right-0 w-0 h-0 border-t-[30px] border-l-[30px] border-t-blue-500 border-l-transparent rounded-tr-md">
          <div className="absolute top-[-25px] right-[2px] text-white text-sm font-bold">
            <FaCheck className="h-3 w-3" />
          </div>
        </div>
      )}

      {thumbnail.name}
    </button>
  );
});

export default Thumbnail;
