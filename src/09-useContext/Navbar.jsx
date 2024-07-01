import { NavLink } from 'react-router-dom';

// NavLink reaciona cuando esta en la ruta

export const Navbar = () => {
   console.log('Se esta renderizando Navbar')
   return ( 


      <nav className='menu'>
         <span>MainaApp</span>

         <NavLink to={'/'} className={({ isActive }) => `${isActive ? 'linkActive' : ''}`}>
            Home
         </NavLink>
         <NavLink to={'/About'} className={({ isActive }) => `${isActive ? 'linkActive' : ''}`}>
            About</NavLink>
         <NavLink to={'/Login'} className={({ isActive }) => `${isActive ? 'linkActive' : ''}`}>
            Login</NavLink>
      </nav>
   )
}
