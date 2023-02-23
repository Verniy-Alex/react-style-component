import React from 'react';
import SignIn from '../pages/signin/SignIn';
import SignUp from '../pages/signup/SignUp';
import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';
export const appRoutes = {
    signIn: {
        id: 1,
        path: '/sigin',
        element: <SignIn />
    },
    signUp: {
        id: 2,
        path: '/signup',
        element: <SignUp />

    }
}
const Routes = () => {
    return (
        <div>
            {/* <SignIn /> */}
            {/* <SignUp /> */}

            <ReactRouterRoutes>
                {Object.values(appRoutes).map(({ id, path, element }) => {
                    return <Route key={id} path={path} element={element} />
                })}
            </ReactRouterRoutes>
        </div>
    );
};

export default Routes;