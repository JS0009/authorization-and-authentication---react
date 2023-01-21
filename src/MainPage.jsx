import React from 'react';
import { Outlet } from 'react-router-dom';
import TypesExample from './Button/Button';

function MainPage() {
    return (
        <div style={{
            backgroundColor: 'lightslategrey',
            textAlign: 'right',
            marginTop: 5,
            borderTop: 50
        }}>

            <TypesExample>Войти</TypesExample>
            <TypesExample>Зарегистрироваться</TypesExample>

            <div style={{
                textAlign: 'center',
                border:'200',                
            }}>
                <p>
                Введите ваши учетные данные
                </p>
                <Outlet/>
            </div>
        </div>
    );
}

export default MainPage;