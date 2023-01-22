import { Button } from "react-bootstrap";
import MyInput from "../MyInput/MyInput";

function AuthForm() {
    return (
        <div>
        <form >
            <MyInput placeholder ='Веедите свое имя'/><br />
            <MyInput placeholder ='Веедите свою фамилию'/><br />
            <MyInput placeholder ='Веедите свой email'/><br />
            <MyInput type='password' placeholder ='Веедите пароль'/><br />
            <MyInput type='password' placeholder='Веедите повторно пароль' /><br />
            <Button>Создать учетную запись</Button>
        </form>
    </div> 
    );
}

export default AuthForm;