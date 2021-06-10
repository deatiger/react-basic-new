import React, {useState} from 'react';

const ToggleButton = () => {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(prevState => !prevState)
  }

  return (
    <button onClick={toggle}>
      {open ? 'OPEN': 'CLOSE'}
    </button>
  );
};

export default ToggleButton;