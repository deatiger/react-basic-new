import React, {useState} from 'react';

const TextInput = () => {
  const [name, setName] = useState('')

  const handleName = (event) => {
    setName(event.target.value)
  }

  return (
    <input
      onChange={(event) => handleName(event)}
      type={'text'}
      value={name}
    />
  );
};

export default TextInput;