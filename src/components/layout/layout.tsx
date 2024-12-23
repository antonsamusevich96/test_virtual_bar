import React, { Suspense } from 'react'
import { NavLink, Outlet } from 'react-router'
import styles from './styles.module.scss'
import { COCKTAIL_CODES } from '../../types'

const Layout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <nav className={styles.navbar}>
          {
            Object
              .values(COCKTAIL_CODES)
              .map(cocktail => (
                <NavLink
                  key={cocktail}
                  to={cocktail}
                  className={(route) => route.isActive ? styles.isActive : ''}
                >
                  {cocktail}
                </NavLink>
              ))
          }
        </nav>
        <main className={styles.content}>
          <Suspense fallback={<div>...LOADING...</div>}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
  )
}

export default Layout
