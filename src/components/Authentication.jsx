import { Button, Form } from "react-bootstrap";
import MyInput from "../MyInput/MyInput";
import { useState } from "react";

function Authentication() {

        const [inputEmail, setInputEmail] = useState()
        const [password, setInputPassword] = useState()
        const [openPage, setOpenPage] = useState(false)


    function singIn(event) {
        event.preventDefault();
        if (inputEmail === localStorage.getItem('email') && password === localStorage.getItem('pass')) {
            alert('данные совпадают')
            setOpenPage(true)
        } else{alert('не правилно введен email или пароль')}
    }
    return (
        <div>
            <p style={{
                    backgroundColor: 'lightslategrey',
                    }}>
                Введите ваши учетные данные
            </p>
    <Form onSubmit={singIn}>
                <MyInput
                    type='email'
                    placeholder='Веедите свой email'
                    onChange={(e)=> setInputEmail(e.target.value)} />
                <br />
                <MyInput
                    type='password'
                    placeholder='Веедите пароль'
                    onChange={(e)=> setInputPassword(e.target.value)} />
                <br />
                <Button type='sabmit'>
                    Вход в учетную запись
                </Button>
    </Form> 
        </div>
     );
}

export default Authentication;