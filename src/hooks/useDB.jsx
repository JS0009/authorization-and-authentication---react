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
        }
        if (inputName && inputSurname && emailInput && newPassword && repeatPassword !== '') {
            alert('поля заполнены правильно')
            }
        else{ return alert('поля не заполнены')}
            
        
        }
    
    return [useDataBase]
}