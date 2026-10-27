import { useNavigate } from "react-router-dom";

export const useGoBack = () => {
  const navigate = useNavigate();

  const goBack = (path?: string) => {
    if (path) {
      navigate(path);

      return;
    }

    navigate(-1);
  };

  return {
    goBack,
  };
};
