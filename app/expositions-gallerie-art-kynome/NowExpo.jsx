'use client'

import {useContext,useEffect} from "react"
import GlobalContext from "../GlobalContext"


export default () => {
    const {dates,activedExpo,setActivedExpo,setDates_before,setDates_after} = useContext(GlobalContext)


    useEffect(() => {
        //RESET LES DONNÉES DES EXPOS
        const nowDate = new Date()
        , currentExpo = dates.filter((item,i) => (new Date(item[0])<nowDate && new Date(item[1])>nowDate))
        setActivedExpo(currentExpo[0] || null)
        setDates_before(dates.filter((item,i) => (new Date(item[1])<new Date(nowDate))))
        setDates_after(dates.filter((item,i) => (new Date(item[0])>new Date(nowDate))))

        
        // console.log(document.querySelector('#exposCalendar'))
        // if(activedExpo && document.querySelector('#exposCalendar'))
        if(activedExpo)
            exposCalendar.classList.add('expoAlreadySelected')
        else 
            exposCalendar.classList.remove('expoAlreadySelected')
    }, [activedExpo])

    if(!activedExpo)
        return <>
            <p>Navré ..aucune exposition actuellement :(</p>
            <p>Veuillez choisir une exposition ci-dessus.</p>
        </>
    else
        return <p>okok</p>
}
