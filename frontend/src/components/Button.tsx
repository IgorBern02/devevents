export const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-100 dark:bg-gray-800 shadow p-2 text-xl rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
    >
      {children}
    </button>
  );
};
