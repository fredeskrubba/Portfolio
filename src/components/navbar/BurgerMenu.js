import React from 'react'
import { Link } from 'wouter'
import { useBurgerStore } from '../stores/useBurgerStore'


const BurgerMenu = () => {
  const {visible, burgerClass} = useBurgerStore()
  return (
     <section className={visible}>
        <article className={burgerClass}>
            <Link href='/about'>Om Mig</Link>
            <Link href='/projects'>Mine Projekter</Link>
            <Link href='/contact'>Kontakt Mig</Link>
        </article>
    </section>
  )
}

export default BurgerMenu