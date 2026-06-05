import { useParame } from "react-router-dom";

export const UrlParameter = () => {
    const { id } = useParame();
    reture(
      <div>
        <h1>UrlParameterページです</h1>
        <p>パラメータは { id } です</p>
      </div>
    );
  };
  