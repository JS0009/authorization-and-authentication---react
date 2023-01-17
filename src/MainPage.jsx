import React from 'react';
import { Outlet } from 'react-router-dom';

function MainPage() {
    return (
        <div>

            <div>Главная Страница</div>
            <div>
                Routerlar buraya render olacak
                <Outlet/>
            </div>
        </div>
    );
}

export default MainPage;