import { FiChevronLeft } from "./icons";
import { Button } from "./Button";

interface BackButtonProps {
  text: string;
  onClick: () => void;
}

export const BackButton = ({ text, onClick }: BackButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className="relative flex items-center justify-center border border-gray-200 dark:border-gray-700 hover:border-(--primary-color) py-2 px-4 text-sm cursor-pointer text-(--text-color) dark:text-(--text-color-dark) hover:text-(--primary-color) rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
    >
      <FiChevronLeft className="absolute left-0" />
      {text}
    </Button>
  );
};
