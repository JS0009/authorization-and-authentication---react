import React from 'react';
import { Button } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

function MainPage() {
    return (
        <div style={{
            textAlign: 'right',
            marginTop: 5,
            borderTop: 50
        }}>

            <Button>Войти</Button>
            <Button>Зарегистрироваться</Button>

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