import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { BtnTop } from "~/components/BtnTop";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { Author } from "~/pages/Author";
import { Home } from "~/pages/Home";
import { NoPageFound } from "~/pages/NoPageFound";
import { Post } from "~/pages/Post";

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/author/:author" component={Author} />
                <Route path="/post/:slug" component={Post} />
                <Route component={NoPageFound} />
            </Switch>
            <Footer />
            <BtnTop />
        </BrowserRouter>
    );
};

export { Router };
