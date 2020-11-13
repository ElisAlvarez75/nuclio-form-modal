import React, { useState } from 'react';
import { validateLength, validatePassword } from '../../utils/validate';

const Form = () => {
  const [canSubmit, setCanSubmit] = useState(true);
  const [errors, setErrors] = useState();

  console.debug(errors);

  return (
    <div>
      <div>
        {errors && Object.keys(errors).map(error => <p>{errors[error]}</p>)}
      </div>
      <form>
        <input type="text" name="name" placeholder="Name" onChange={event => {
          setCanSubmit(validateLength(event.target.value, 5));
          if (!validateLength(event.target.value, 5) && (errors && !errors.name || !errors)) {
            setErrors({ ...errors, name: 'Name not valid' });
          }
        }} />
        <input type="text" name="surname" placeholder="Last name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" onChange={event => {
          setCanSubmit(validatePassword(event.target.value));
          if (!validatePassword(event.target.value) && (errors && !errors.password || !errors)) {
            setErrors({ ...errors, password: 'Password not valid' });
          }
        }} />
        <button type="submit" disabled={!canSubmit}>Send</button>
      </form>
    </div>
  );
};

export default Form;