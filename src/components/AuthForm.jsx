import { Button, Form } from "react-bootstrap";
import MyInput from "../MyInput/MyInput";

function AuthForm() {
    return (
        <div>
            <p style={{
                    backgroundColor: 'lightslategrey',
                    }}>
                Введите ваши учетные данные
                </p>
        <Form>
            <MyInput placeholder ='Веедите свое имя'/><br />
            <MyInput placeholder ='Веедите свою фамилию'/><br />
            <MyInput placeholder ='Веедите свой email'/><br />
            <MyInput type='password' placeholder ='Веедите пароль'/><br />
            <MyInput type='password' placeholder='Веедите повторно пароль' /><br />
            <Button>Создать учетную запись</Button>
        </Form>
    </div> 
    );
}

export default AuthForm;