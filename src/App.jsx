import './bootstrap.min.css'
import React from 'react'
import UserForm from './UserForm'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className="card mt-3 shadow">
          <div className="card-body">
            <h1>Hook Form</h1>
            <UserForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App