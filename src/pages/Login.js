import React, {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext'


function LoginPage() {

  let navigate = useNavigate()
  let {setUser} = useContext(AuthContext)
		const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
			
				e.preventDefault();

    if (e.target.username.value === ""){
					   setErrorMessage('Username is required!');
   	}
    else if (e.target.password.value === ""){
				   	setErrorMessage('Password is required!');
    }
    else{
       console.log('user logged in');
       setUser(true)
							localStorage.setItem('user', true);
       navigate('/home')
    }
  };


  return (
   <>
    <form onSubmit={handleSubmit}>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      	<div className="relative py-3 sm:max-w-xl sm:mx-auto">
      		<div
      			className="absolute inset-0 bg-gradient-to-r from-orange-300 to-orange-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
      		</div>
      		<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
      			<div className="max-w-md mx-auto">
      				<div>
      					<h1 className="text-2xl font-semibold">Welcome Back!</h1>
      				</div>
										{errorMessage && ( <p className="error text-red-500"> {errorMessage} </p> )}
      				<div className="divide-y divide-gray-200">
      					<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
      						<div className="relative">
      							<input autoComplete="off" id="username" name="username" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="username" />
      							<label for="username" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Username</label>
      						</div>
      						<div className="relative">
      							<input autoComplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
      							<label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
      						</div>
      						<div className="relative">
      							<button className="bg-orange-500 text-white rounded-md px-2 py-1">Submit</button>
      						</div>
      					</div>
      				</div>
      			</div>
      		</div>
      	</div>
      </div>
    </form>
   </>
  )
}

export default LoginPage