import { Button } from "react-bootstrap";
import MyInput from "../MyInput/MyInput";

function Authentication() {
    return (
    <form>
        <MyInput placeholder ='Веедите свой email'/><br />
        <MyInput type='password' placeholder='Веедите пароль' /><br />
        <Button>Вход в учетную запись</Button>
    </form> 
     );
}

export default Authentication;