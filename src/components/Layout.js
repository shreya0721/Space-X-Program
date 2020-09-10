import React from "react";
import Helmet from "react-helmet";
import routes from "../routes";
import { Switch, Route } from "react-router-dom";
class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Space X Launch Programs",
        };
    }

    render() {
        return (
            <div>
                <Helmet>
                <title>"Space X Launch Programs"</title>
                <meta property="og:title" content="Space X Launch Programs" />
                <meta property="og:type" content="website"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta property="og:url" content="http://localhost:2048/"/>
                <meta name="description" content="View details of Sapce X Launch Program Missiles"/>
                <link rel="canonical" href="http://localhost:2048/"/>
               </Helmet>
               <h1 className="title">{ this.state.title }</h1>
               <Switch>
                    { routes.map( route => <Route key={ route.path } { ...route } /> ) }
                </Switch>               
            </div>
        );
    }
}

export default Layout;
