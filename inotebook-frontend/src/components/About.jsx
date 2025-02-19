import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'

export default function About() {
  const a = useContext(noteContext);
  useEffect(() => {
    a.update();
  }, []);

  return (
    <div>
      This Is About Components Name is: {a.state.name} and class is: {a.state.class}
    </div>
  )
}
