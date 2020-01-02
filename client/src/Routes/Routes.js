import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Index, Create, Main, Send, Privatekey, Txlist, Signout, Master, Uinfo, Usertx, Userout} from './index';

const Router = () => (
    <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/create" component={Create} />
        <Route path="/main" component={Main} />
        <Route path="/send" component={Send} />
        <Route path="/privatekey" component={Privatekey} />
        <Route path="/txlist" component={Txlist} />
        <Route path="/signout" component={Signout} />
        <Route path="/master" component={Master} />
        <Route path="/uinfo" component={Uinfo} />
        <Route path="/usertx" component={Usertx} />
        <Route path="/userout" component={Userout} />
    </Switch>
);

export default Router;