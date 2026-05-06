import { FaWhatsapp, FaLinkedin, FaXTwitter } from "../ui/icons";
import { FaDiscord } from "react-icons/fa6";
import { CiShare2 } from "react-icons/ci";

export const ShareSection = () => {
  return (
    <div className="space-y-2">
      <p className="flex items-center gap-2 text-sm text-gray-500">
        <CiShare2 /> Compartilhar
      </p>

      <div className="flex items-center gap-4 text-xl text-gray-500">
        <FaWhatsapp className="cursor-pointer hover:text-green-500" />
        <FaLinkedin className="cursor-pointer hover:text-blue-500" />
        <FaDiscord className="cursor-pointer hover:text-indigo-500" />
        <FaXTwitter className="cursor-pointer hover:text-black dark:hover:text-white" />
      </div>
    </div>
  );
};
