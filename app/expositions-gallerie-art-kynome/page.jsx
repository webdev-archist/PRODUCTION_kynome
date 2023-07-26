'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Slider from "react-slick";
import ExposCalendar from './ExposCalendar'
import ExpoSelected from './ExpoSelected'
import ExpoList from './ExpoList'




let  settingsSlider = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    adaptiveHeight: true
}


export default function Expo() {


    let [expoSelected, setExpoSelected] = useState({})

    
    
    return <main id="expositionsGallerieArtKynome">
        <Slider {...settingsSlider} >
            <figure>
                <h3>Un teste</h3>
                <Link href="/">lien ici</Link>
            </figure>
            <figure>
                <h3>Un teste1</h3>
                <Link href="/">lien ici</Link>
            </figure>
            <figure>
                <h3>Un teste2</h3>
                <Link href="/">lien ici</Link>
            </figure>
        </Slider>
        <ExposCalendar {...{setExpoSelected}} />
        <ExpoSelected>
            <a href="#">lien vers l'expo en cours (as children)</a>
        </ExpoSelected>
        <ExpoList type="past" {...{data:expoSelected}} />
        <ExpoList type="futur"/>
    </main>
}