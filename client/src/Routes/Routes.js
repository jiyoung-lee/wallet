import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Index, Create, Main, Send, Privatekey, Txlist, Signout} from './index';

const Router = () => (
    <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/create" component={Create} />
        <Route path="/main" component={Main} />
        <Route path="/send" component={Send} />
        <Route path="/privatekey" component={Privatekey} />
        <Route path="/txlist" component={Txlist} />
        <Route path="/signout" component={Signout} />
    </Switch>
);

export default Router;