import React, {useEffect, useState} from 'react';

const ToggleButton = () => {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(prevState => !prevState)
  }

  useEffect(() => {
    console.log('Current state is', open)
    if (open) {
      console.log('Subscribe database...')
    }
    return () => {
      console.log('Unsubscribe database!')
    }
  })

  return (
    <button onClick={toggle}>
      {open ? 'OPEN': 'CLOSE'}
    </button>
  );
};

export default ToggleButton;