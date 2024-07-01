import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { LoginPagen } from './LoginPagen';
import { Navbar } from './Navbar';
import { UserProvider } from './context/UserProvider';

export const MainApp = () => {
   return (
      <UserProvider>
         <Navbar />

         <hr />
         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/About' element={<AboutPage />} />
            <Route path='/Login' element={<LoginPagen />} />

            {/* El por defecto, en el caso de no cuencidir con las rutas anteriores */}
            <Route path='/*' element={<Navigate to='login' />} />
         </Routes>
      </UserProvider>
   )
}
