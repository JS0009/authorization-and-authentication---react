import Button from 'react-bootstrap/Button';

function TypesExample({children,...props}) {
  return (
    <>
      <Button variant="primary">{children}</Button>{' '}
     
    </>
  );
}

export default TypesExample;