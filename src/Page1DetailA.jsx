import { useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  console.log(state);

  reture(
    <div>
      <h1>Page1DetailAページです</h1>
    </div>
  );
};
