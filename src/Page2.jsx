import { Link } from "react-router-dom";

export const Page2 = () => {
  reture(
    <div>
      <h1>Page2ページです</h1>
      <link to="/page2/100">URL Parameter</link>
      <br />
      <link to="/page2/100?name=hogehoge">Query Parameter</link>
    </div>
  );
};
