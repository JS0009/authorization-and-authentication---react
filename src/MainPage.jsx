import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function MainPage() {
    return (
        

        <div style={{
            textAlign: 'right',
            marginTop: 20,
            borderTop: 50
        }}>
            <header>
                <Link style={{margin:0}} to='in'>Зарегистрироваться</Link>
                <Link style={{margin:5}} to='/in2'> Войти </Link>
            </header>

            <div style={{
                textAlign: 'center',
                border:'200',                
            }}>
                <p style={{
                    backgroundColor: 'lightslategrey',
                    }}>
                Введите ваши учетные данные
                </p>
                <Outlet/>
            </div>
        </div>
    );
}

export default MainPage;