import { useRouteError } from 'react-router-dom';

export const ErrorBoundary = () => {
    let error = useRouteError();

    console.error(error);

    return (
        <div>
            <h3>Error boundary</h3>
            <a href="/">On main</a>
        </div>
    );
};
