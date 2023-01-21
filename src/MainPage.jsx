import React from 'react';
import { Outlet } from 'react-router-dom';
import TypesExample from './Button/Button';

function MainPage() {
    return (
        <div style={{
            disply: 'flex',
            backgroundColor: 'lightblue',
            textAlign: 'right',
            margin:0,
            position: 'relative',
        }}>

            <TypesExample>Войти</TypesExample>
            <TypesExample>Зарегистрироваться</TypesExample>

            <div style={{
                textAlign: 'center',
                border:'200',                
            }}>
                Routerlar buraya render olacak
                <Outlet/>
            </div>
        </div>
    );
}

export default MainPage;