import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import mapIcon from '../utils/mapIcon'

import '../styles/pages/orphanages-map.css'
import api from '../services/api'

interface Orphanage {
    id: number
    name: string
    latitude: number
    longitude: number
    about: string
    instructions: string
    opening_hours: string
    open_on_weekends: boolean
}

export default function OrphanagesMap() {
    const [orphanages, setOrphanages] = useState<Orphanage[]>([])

    useEffect(()=>{
        api.get('orphanages').then((response) => {
            setOrphanages(response.data)
        })
    }, [])

    return (
    <div id="page-map">   
        <Map 
            center={[-25.5411, -54.5562]} 
            zoom={12} 
            style={{
                width: "100%", height: "100%"
            }}
        >
            <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {
                orphanages.map((orphanage) => (
                    <Marker key={orphanage.id} position={[orphanage.latitude, orphanage.longitude]} icon={mapIcon} >
                        <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                            {orphanage.name}
                            <Link to={`/orphanages/${orphanage.id}`}><FiArrowRight size={20} color="#FFF" /></Link>
                        </Popup>
                    </Marker>
                ))
            }
        </Map>

        <Link to="" className="create-orphanage">
            <FiPlus size={32} color="#FFF"/>
        </Link>
    </div>
    )
}