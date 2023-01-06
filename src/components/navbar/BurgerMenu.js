import React from 'react'
import { Link } from 'react-router-dom'
import { useBurgerStore } from './burgerStore/useBurgerStore'


const BurgerMenu = () => {
  const {visible, burgerClass} = useBurgerStore()
  return (
     <section className={visible}>
        <article className={burgerClass}>
            <Link to='/About'>Om Mig</Link>
            <Link to='/Projects'>Mine Projekter</Link>
            <Link to='/Contact'>Kontakt Mig</Link>
        </article>
    </section>
  )
}

export default BurgerMenu