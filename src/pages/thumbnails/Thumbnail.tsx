import { FaCheck } from "react-icons/fa";
import { ThumbnailType } from ".";
import clsx from "clsx";
import { memo } from "react";

interface ThumbnailProps {
  thumbnail: ThumbnailType;
  selected: boolean;
  onClick: (thumbnail: ThumbnailType) => void;
  hasIcon: boolean;
}
const Thumbnail = memo(function Thumbnail(props: ThumbnailProps) {
  const { thumbnail, selected, onClick, hasIcon } = props;

  return (
    <button
      disabled={thumbnail.disabled}
      onClick={() => onClick(thumbnail)}
      className={clsx(
        hasIcon ? "min-w-[70px] h-auto " : "h-16 min-w-[250px] text-left"
      )}
    >
      <div
        className={clsx(
          "relative rounded-md shadow p-4",
          hasIcon
            ? "w-[70px] h-[70px] flex items-center justify-center flex-grow"
            : "h-16 w-[250px]",
          selected ? "border border-blue-500" : "",
          thumbnail.disabled
            ? "bg-gray-400 cursor-not-allowed text-white"
            : "cursor-pointer hover:shadow-lg transition hover:bg-blue-100"
        )}
      >
        {selected && (
          <div className="absolute top-0 right-0 w-0 h-0 border-t-[30px] border-l-[30px] border-t-blue-500 border-l-transparent rounded-tr-md">
            <div className="absolute top-[-25px] right-[2px] text-white text-sm font-bold">
              <FaCheck className="h-3 w-3" />
            </div>
          </div>
        )}

        {hasIcon ? thumbnail.icon : thumbnail.name}
      </div>

      <p className="text-neutral-500 text-sm pt-1">
        {hasIcon && thumbnail.name}
      </p>
    </button>
  );
});

export default Thumbnail;
