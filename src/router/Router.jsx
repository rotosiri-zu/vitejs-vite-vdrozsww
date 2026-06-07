import { Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { page1Routes } from "./Page1Routes"
import { page2Routes } from "./Page2Routes"

export const Router = () => {
    return (
        <switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/page1" render={({ match: { url } }) => ( 
            <switch>
                {page1Routes.map((route) => {
                    <Route 
                        key={route.path} 
                        exact={route.exact}
                        path={`${url}${route.path}`}
                    >
                        {route.children}
                    </Route>
                })}
            </switch>
          )} 
        />
        <Route path="/page2" render={({ match: { url } }) => ( 
            <switch>
                {page2Routes.map((route) => {
                    <Route 
                        key={route.path} 
                        exact={route.exact}
                        path={`${url}${route.path}`}
                    >
                        {route.children}
                    </Route>
                })}
            </switch>
          )}   
        />
        <Route path="*">
            <page404 />
        </Route>
        </switch>
    )
}