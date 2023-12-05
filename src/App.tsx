import { Routes, Route } from 'react-router-dom';

import DefaultLayout from './layouts/DefaultLayout';
import { publicRoutes } from './routes';

function App() {
    return (
        <Routes>
            {publicRoutes.map((Item, index) => {
                return (
                    <Route
                        key={index}
                        path={Item.path}
                        element={
                            <DefaultLayout layout={Item.layout}>
                                <Item.component />
                            </DefaultLayout>
                        }
                    />
                );
            })}
        </Routes>
    );
}

export default App;
