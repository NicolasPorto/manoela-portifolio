import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import MyServices from "./pages/MyServices";
import SingleWork from "./pages/projects/SingleWork";
import Works from "./pages/Works";

function Routes (){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/contato" component={Contact}/>
                <Route path="/sobre-mim" component={AboutMe}/>
                <Route path="/meus-servicos" component={MyServices}/>
                <Route path="/projeto-unico" component={SingleWork}/>
                <Route path="/projetos" component={Works}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;