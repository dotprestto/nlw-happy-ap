import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import mapIcon from '../utils/mapIcon'

import '../styles/pages/orphanages-map.css'

export default function OrphanagesMap() {
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

            <Marker position={[-25.5411, -54.5562]} icon={mapIcon} >
                <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                    Lar das Meninas
                    <Link to="/orphanages/1"><FiArrowRight size={20} color="#FFF" /></Link>
                </Popup>
            </Marker>
        </Map>

        <Link to="" className="create-orphanage">
            <FiPlus size={32} color="#FFF"/>
        </Link>
    </div>
    )
}