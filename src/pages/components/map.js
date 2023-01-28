import { MapContainer, TileLayer,Marker,Circle,Mui,Tooltip} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import PopUp from './popUp';

const Map = () => {
//   var greenIcon = new LeafIcon({
//     iconUrl: 'http://leafletjs.com/examples/custom-icons/leaf-green.png',
//     shadowUrl: 'http://leafletjs.com/examples/custom-icons/leaf-shadow.png'
// })

  return (
    <MapContainer className='border' center={[28.7041, 77.1025]} zoom={18} scrollWheelZoom={false} style={{height: "100%", width: "100%"}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[28.7041, 77.1025]} icon={L.divIcon({
            className: "mymarker",
            html:'<img src="https://img.icons8.com/fluency-systems-filled/24/228BE6/visit.png"/>',
          })}
          >
        <Tooltip>
          <PopUp/>
        </Tooltip>
      </Marker>
      <Marker position={[28.7041, 77.1020]} icon={L.divIcon({
            className: "mymarker",
            html:'<img src="https://img.icons8.com/fluency-systems-filled/24/228BE6/visit.png"/>',
          })}
          >
        <Tooltip>
          <PopUp/>
        </Tooltip>
      </Marker>
      <Marker position={[28.7043, 77.1027]} icon={L.divIcon({
            className: "mymarker",
            html:'<img src="https://img.icons8.com/fluency-systems-filled/24/228BE6/visit.png"/>',
          })}
          >
        <Tooltip className='rounded-2xl'>
          <PopUp/>
        </Tooltip>
      </Marker>
      <Marker position={[28.7047, 77.1025]} icon={L.divIcon({
            className: "mymarker",
            html:'<img src="https://img.icons8.com/fluency-systems-filled/24/228BE6/visit.png"/>',
          })}
          >
        <Tooltip>
          <PopUp/>
        </Tooltip>
      </Marker>
      <Circle 
                  center={{lat:28.7041, lng: 77.1025}}
                  fillColor="blue" 
                  radius={150}
                  className='border-0'/>
    </MapContainer>
  )
}

export default Map