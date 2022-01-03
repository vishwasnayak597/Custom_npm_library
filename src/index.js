import React,{useState,useEffect} from 'react'
import './index.css';

export const ExampleComponent = ( props) => {
  
  const {children} = props

  return (
     <div>
      <h1>{children.toUpperCase()}</h1>
    <form>
     <label>Username: </label>
     <input type="text" ></input>
     <br/>
    <label>Password: </label>
     <input type="text"></input>
   
    <br/>
      <input type="submit" style={{ backgroundColor: '#6976d9',color: 'white',fontFamily: 'sans-serif',fontSize: '14px',margin: '20px 0px'}}></input>
     </form>
  
   </div>
   
  )
}

export const ExampleComponents = ( props) => {
  const [color, setColor] = useState(null)
  useEffect(() => {
      if (props.variant) {
          if (props.variant === 'primary') {
              setColor('#0077ff')
          } else if (props.variant === 'secondary') {
              setColor('#ff0062')
          } else if (props.variant === 'success') {
              setColor('#0f8000')
          } else {
              setColor('#949393')
          }
      }
  })
  const {children} = props

  return (
      <button 
          className='buttonComponent'
          style={{
              backgroundColor: color
          }}
      >
          {children.toUpperCase()}
      </button>
  )
}







