import { Button, Form } from "react-bootstrap";
import MyInput from "../MyInput/MyInput";

function Authentication() {

    function singIn(event) {
        event.preventDefault();
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
                    placeholder='Веедите свой email' />
                <br />
                <MyInput
                    type='password'
                    placeholder='Веедите пароль' />
                <br />
                <Button type='sabmit'>
                    Вход в учетную запись
                </Button>
    </Form> 
        </div>
     );
}

export default Authentication;