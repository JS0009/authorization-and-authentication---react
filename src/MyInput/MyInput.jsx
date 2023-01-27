import classes from './MyInput.module.css'

function MyInput(props) {

    const rootClasses = [classes.myInput]
    if (props.value === '') {

        rootClasses.push(classes.err)
        
    }

    return ( 
        <input
            className={rootClasses.join(` `)} {...props}
        />
     );
}

export default MyInput;