import React from 'react';
import { Outlet } from 'react-router-dom';
import TypesExample from './Button/Button';

function MainPage() {
    return (
        <div>
            <TypesExample/>
            <div>
                Routerlar buraya render olacak
                <Outlet/>
            </div>
        </div>
    );
}

export default MainPage;