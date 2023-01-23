import { Button, Form } from "react-bootstrap";
import MyInput from "../MyInput/MyInput";

function Authentication() {
    return (
        <div>
            <p style={{
                    backgroundColor: 'lightslategrey',
                    }}>
                Введите ваши учетные данные
            </p>
    <Form>
        <MyInput placeholder ='Веедите свой email'/><br />
        <MyInput type='password' placeholder='Веедите пароль' /><br />
        <Button>Вход в учетную запись</Button>
    </Form> 
        </div>
     );
}

export default Authentication;