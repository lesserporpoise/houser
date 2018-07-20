import React from  'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './component/dashboard/Dashboard';
import Wizard from './component/wizard/Wizard';
import Wizard2 from './component/wizard/Wizard2';
import Wizard3 from './component/wizard/Wizard3';

export default(

    <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/wizard" component={Wizard}/>
        <Route path="/wizard/two" component={Wizard2}/>
        <Route path="/wizard/three" component={Wizard3}/>
    </Switch>
)