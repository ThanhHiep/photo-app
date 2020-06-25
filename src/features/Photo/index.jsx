import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import Addedit from './Pages/Addedit';
import Main from './Pages/Main';

Photo.propTypes = {

};

function Photo(props) {
    const match = useRouteMatch();
    console.log({ match });
    return (
        <Switch>
            <Route exact path={match.url} component={Main} />

            <Route path={`${match.url}/add`} component={Addedit} />

            <Route component={NotFound} />
        </Switch>
    );
}

export default Photo;