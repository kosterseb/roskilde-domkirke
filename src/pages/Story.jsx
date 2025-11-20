import React from 'react';
import HeaderNav from '../components/HeaderNav.jsx';
import { Link } from 'react-router';
import './Story.sass';

export default function Story() {
    return (
        <>
            <HeaderNav />
            <div className="story-page-one">
                <div className='story-one'>
                    <h1>The Royal and Religious Foundation (c. 980s - 1400s)</h1>
                    <h2>Viking Roots</h2>
                    <p>The first religious structure on the site was a wooden church built by Viking King Harald Bluetooth around the 980s.
                        Roskilde was one of Denmark's most important early cities and served as the capital until 1443.</p>
                    <p>
                        The current cathedral's construction began in the 12th century under Bishop Absalon, replacing an earlier travertine (limestone) church.
                        It was built using the new technique of red brick, becoming the first Gothic building in Scandinavia and inspiring the spread of the "Brick Gothic" style throughout Northern Europe.
                    </p>
                    <p>
                        By the 15th century, the cathedral was firmly established as the preferred burial site for the Danish monarchy.
                        The tomb of Queen Margrete I, who united the Scandinavian kingdoms in the Kalmar Union, was placed here in 1413, cementing the church's national importance just decades before the first great fire.
                    </p>
                </div>
                <div className='story-page-two'>
                    <h1>The Context for the Great Fire of 1443</h1>
                    <h2>The Medieval City</h2>
                    <p>Roskilde was a densely packed medieval town, with many buildings constructed of wood, making it highly vulnerable to fire.</p>
                    <p>Though the cathedral was made of brick, its roof structure was timber and covered with lead—materials that were easily consumed by a massive conflagration like the one that swept the city.</p>
                    <p>In 1443, a devastating city-wide fire broke out, destroying most of Roskilde and inflicting massive structural damage on the cathedral, including shattering windows and melting the lead roof.
                        It was a tragedy that coincided with the shifting of the Danish capital to Copenhagen, further straining the resources needed for reconstruction.</p>
                </div>
                <div className='story-page-three'>
                    <h1>The Lead-up to the 1968 Spire Fire</h1>
                    <h2>800 Years of Style</h2>
                    <p>Between the 15th and 20th centuries, the cathedral was continuously modified. Successive kings, most notably Christian IV in the 17th century, added chapels, ornate interiors, and its characteristic copper-clad spires, including the one known as "Margrethe's Spire."</p>
                    <p>By the 1960s, a major restoration project was underway to maintain the aging structure and its centuries of royal additions.</p>
                    <p>The 1968 fire occurred precisely during this restoration work on Margrethe's Spire. The very effort to preserve the spire's beauty—the use of equipment, materials, and labor—tragically became the source of its destruction.</p>
                </div>
                <div className="conclusion">
                    <h1>The Aftermath and Restoration Efforts</h1>
                    <p>The 1968 fire caused significant damage to Margrethe's Spire, destroying its wooden framework and copper cladding.
                        However, the cathedral itself remained structurally sound, thanks to its robust medieval construction.</p>
                    <p>Restoration efforts began almost immediately, with a focus on faithfully reconstructing the spire using traditional materials and techniques.
                        The restoration was completed in the early 1970s, and today, Roskilde Domkirke stands as a testament to resilience and the enduring legacy of Danish history and architecture.</p>
                </div>
                <Link to="/equationsone" className="next-button">Proceed to Equations Challenge</Link>
            </div>
        </>
    )
}