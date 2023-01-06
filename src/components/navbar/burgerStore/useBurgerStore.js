import create from 'zustand'

export const useBurgerStore = create((set)=>({
    visible: 'burger-menu',
    setVisible: (value)=> set(() => ({visible: value})),
    burgerClass: 'link-menu',
    setBurgerClass: (value)=>set(()=>({burgerClass: value}))
}))