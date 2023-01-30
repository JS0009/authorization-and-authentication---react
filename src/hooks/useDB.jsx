export const useDB = (
    inputName,
    inputSurname,
    emailInput,
    newPassword,
    repeatPassword,
    setRepeatPassword
) => {

    function useDataBase() {
        if (newPassword !== repeatPassword) {
            setRepeatPassword('')
            alert('Пароли не совпадают')
        }else if (inputName && inputSurname && emailInput && newPassword && repeatPassword !== ''){
            alert('поля заполнены правильно')
        } else {
            alert('поля не заполнены')
        }
        }
    
    return [useDataBase]
}