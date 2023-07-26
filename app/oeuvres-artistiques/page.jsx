'use client'

import { useState } from "react"
import Link from 'next/link'
import Craft from "./Craft"



export default function Oeuvre({datas, artists, expos}) {

    const artistsOptionTags = artists.map((elt,i)=> <option value={"artist_"+i}>{elt.pseudo} - {elt.nom} - {elt.prenom}</option> )
    , exposOptionTags = expos.map((elt,i)=> <option value={"oeuvre_"+i}>{elt.title}</option> )
    handleChangeType = (e) => {
        const id = e.target.id
        setShowSelectionOptionTags(id=="radioExpos"?exposOptionTags:artistsOptionTags)
        alert(id)
    }
    , handleChangeSelect = (e) => {

        // setSelectedCrafts(FILTRER ICI datas POUR NE RÉCUPÉRER QUE LES OEUVRES CORREPSONDANTS)
        alert("handleChangeSelect")
    }
    , handleChangeText = (e) => {

        // setSelectedCrafts(FILTRER ICI datas POUR NE RÉCUPÉRER QUE LES OEUVRES CORREPSONDANTS)
        alert("handleChangeText")
    }

    let [selectedCrafts, setSelectedCrafts] = useState(datas)
    , [showSelectionOptionTags, setShowSelectionOptionTags] = useState([<></>])


    return (
        <main>
            <h2>TOUTES LES OEUVRES AU BOUT DU CLIC !</h2>
            <form>
                <fieldset>
                    <label>
                        <input type="radio" onChange={handleChangeType} name="searchType" id="radioExpos" />
                    </label>
                    <label>
                        <input type="radio" onChange={handleChangeType} name="searchType" id="radioArtists" />
                    </label>
                </fieldset>
                <fieldset>
                    <input id="searchOeuvreText" onChange={handleChangeText} />
                    <select id="searchOeuvreSelect" onChange={handleChangeSelect}>{showSelectionOptionTags}</select>
                </fieldset>
                <img id="contextualOeuvreImage" />
            </form>
            <section>
                {selectedCrafts.map((elt)=><Craft data={elt} />)}
            </section>
        </main>
    )
}


export async function getStaticProps(){

    const datas = {}
    , artists = []
    , expos = []

    return {
        props: {
            datas
            , artists
            , expos
        }
    }
}
