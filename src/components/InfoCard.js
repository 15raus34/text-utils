import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeProvider'

export default function InfoCard({img,info}) {

  const useThemeContext = useContext(ThemeContext);
  const { mode } = useThemeContext;

  return (
    <div className={`card mx-3 mb-4 bg-${mode === 'light' ? 'dark' : 'light'}`} style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={info} />
      <div className="card-body">
        <h5 className={`card-title text-${mode}`}>{info}</h5>
      </div>
    </div>
  )
}
