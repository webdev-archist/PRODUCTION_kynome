import Image from "next/image"

export default function Fondateurs() {
  return (
    <section id="fondateurs">
        <h2>FONDATEURS</h2>
        <ul>
            <li>
                <Image
                    src="/img/fondateurs/nathalie.jpg"
                    alt="Mme ACHI Nathalie"
                    layout='fill'
                />
                {/* <img src="/img/fondateurs/nathalie.jpg" alt="Mme ACHI Nathalie" /> */}
                <div>
                    <h3>Mme ACHI Nathalie</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi temporibus velit dignissimos dolorum, facere quia incidunt qui quis itaque voluptatibus molestiae ut cupiditate quasi, dolorem odio, officia placeat repellendus! Illo!</p>
                </div>
            </li>
            <li>
                <Image
                    src="/img/fondateurs/raymond.jpg"
                    alt="Mr ACHI Raymond"
                    layout='fill'
                />
                {/* <img src="/img/fondateurs/raymond.jpg" alt="Mr ACHI Raymond" /> */}
                <div>
                    <h3>Mr ACHI Raymond</h3> 
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi temporibus velit dignissimos dolorum, facere quia incidunt qui quis itaque voluptatibus molestiae ut cupiditate quasi, dolorem odio, officia placeat repellendus! Illo!</p>
                </div>
            </li>
        </ul>
    </section>
  )
}
