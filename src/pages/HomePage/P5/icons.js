import L from 'leaflet';

const iconITMeet = new L.Icon({
    iconUrl: require('../../../assets/images/logoLight.png'),
    iconRetinaUrl: require('../../../assets/images/logoLight.png'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 20),
    className: 'leaflet-div-icon'
});

export { iconITMeet };