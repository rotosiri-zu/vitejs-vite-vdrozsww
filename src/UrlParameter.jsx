import { useParame, useLocation } from "react-router-dom";

export const UrlParameter = () => {
    const { id } = useParame();
    const { search } = useLocation();
    const query = new URLSearchParams(search);

    reture(
      <div>
        <h1>UrlParameterページです</h1>
        <p>パラメータは { id } です</p>
        <p>クエリパラメータは { query.get("name") } です</p>
      </div>
    );
  };
  