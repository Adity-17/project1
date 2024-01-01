// ** React Imports
import React, { useContext } from 'react'
import '../App.css';
// ** Component Imports
import { Button } from "@/components/ui/button"

// ** React Router V6 Imports
import { useNavigate } from "react-router-dom"

// ** Context
import { AuthContext } from '@/context/AuthContext';

const Header = () => {

    // ** Hooks
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);

    return (
        <header className="w-full h-14 flex items-center justify-center py-2 bg-violet-400 shadow-sm">
            <div className="flex items-center justify-between px-2 md:px-1 w-full max-w-[1440px]">

                <div
                    className="flex items-center cursor-pointer"
                    onClick={() => navigate('/')}
                >
                    <p className="ml-18 text-base font-semibold text-gray-900">Assignment - Task Board
</p>
                </div>

                {
                    !user && (
                        <div className="flex items-center">
                            <Button
                                variant="mr-4 ghost"
                                size="sm"
                                onClick={() => navigate('/signup')}
                            >
                                Sign up/Register
                            </Button>
                            <Button
                                variant="default"
                                size='sm'
                                onClick={() => navigate('/signin')}
                            >
                                Sign in
                            </Button>
                        </div>
                    )
                }
                {
                    user && (
                        <div className="flex items-center">
                            <p className='mr-4 text-sm font-semibold text-gray-900'>{user}</p>
                            <Button
                                variant="default"
                                size='sm'
                                onClick={logout}
                            >
                                Log out
                            </Button>
                        </div>
                    )
                }


            </div>
        </header>
    )
}

export default Header