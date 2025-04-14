import { JSX, useMemo, useState } from "react";
import Thumbnail from "./Thumbnail";
import "./thumbnails.css";
import { MdOutlineEdit, MdOutlineClose } from "react-icons/md";
import { AiOutlineKubernetes, AiOutlineDocker } from "react-icons/ai";
import { SiAmazonec2, SiAmazons3 } from "react-icons/si";
import { IconType } from "react-icons";

export interface ThumbnailType {
  name: string;
  id: string;
  disabled: boolean;
  icon: JSX.Element;
}

const items = [
  {
    name: "Kubernetes",
    id: "kubernetes",
    disabled: false,
    icon: <AiOutlineKubernetes />,
  },
  {
    name: "docker",
    id: "docker",
    disabled: false,
    icon: <AiOutlineDocker />,
  },
  {
    name: "EC2",
    id: "ec2",
    disabled: false,
    icon: <SiAmazonec2 />,
  },
  {
    name: "S3 Bucket",
    id: "s3bucket",
    disabled: false,
    icon: <SiAmazons3 />,
  },
  {
    name: "Manual Server",
    id: "manual",
    disabled: true,
    icon: <SiAmazons3 />,
  },
  {
    name: "Static Server",
    id: "static",
    disabled: false,
    icon: <SiAmazons3 />,
  },
];

type STATUS = "CHANGE" | "CANCEL" | null;

const BTN_CONFIG: any = {
  CHANGE: {
    icon: <MdOutlineEdit className="h-4 w-4" />,
    label: "Change",
  },
  CANCEL: {
    icon: <MdOutlineClose className="h-4 w-4" />,
    label: "Close",
  },
};

interface ThumbnailsProps {
  hasIcon: boolean;
}

const Thumbnails = (props: ThumbnailsProps) => {
  const { hasIcon } = props;
  const [selected, setSelected] = useState<ThumbnailType | null>();

  const [status, setStatus] = useState<STATUS>(null);

  const handleSelect = (thumbnail: ThumbnailType) => {
    setSelected(thumbnail);
    setStatus("CHANGE");
  };

  const handleChange = () => {
    setStatus(status === "CANCEL" ? "CHANGE" : "CANCEL");
  };

  const displayedItems = useMemo(() => {
    if (status === "CHANGE" && selected) {
      return [selected];
    } else if (status === "CANCEL" && selected) {
      return [selected, ...items.filter((item) => item.id !== selected.id)];
    }

    return items;
  }, [status, selected]);

  return (
    <div className="p-2 max-w-xxl border border-gray-600 rounded">
      <div className="flex overflow-x-auto space-x-4 pb-2 scrollbar-hide justify-start items-center">
        {displayedItems.map((item) => (
          <Thumbnail
            key={item.id}
            thumbnail={item}
            selected={item.id === selected?.id}
            hasIcon={hasIcon}
            onClick={(thumbnail) =>
              item.id !== selected?.id && handleSelect(thumbnail)
            }
          />
        ))}
        {status && (
          <button
            onClick={handleChange}
            className="text-blue-500 cursor-pointer text-sm flex flex-row items-center justify-center gap-1 hover:font-semibold"
          >
            {BTN_CONFIG[status].icon}
            {BTN_CONFIG[status].label}
          </button>
        )}
      </div>
    </div>
  );
};

export default Thumbnails;
