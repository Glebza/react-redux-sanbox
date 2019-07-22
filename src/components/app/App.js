import React from 'react';
import Counter from "../counter";
import ErrorBoundry from "../error-boundry";

const App = () => {

    return (
        <ErrorBoundry>
            <Counter/>
        </ErrorBoundry>

    )
};

export default App;