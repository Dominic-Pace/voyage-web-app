import React from 'react'
import GoogleMap, { Circle } from 'react-google-map'
import ReactGoogleMapLoader from 'react-google-maps-loader'

import iconMarker from '../../assets/icons/location-marker.svg'
import iconMarkerHover from '../../assets/icons/location-marker-hover.svg'

import './styles.css'

const MY_API_KEY = 'AIzaSyBvVPTE_J5PKelh5MjF_0Gi6_kZvuIoAY4' // fake

const Map = ({ selectedActivities }) => {

  let markers = []

  selectedActivities.map(activity => {
    markers.push({
      title: activity.name,
      icon: iconMarker,
      position: {
        lat: activity.coordinates.latitude,
        lng: activity.coordinates.longitude,
      },
      onLoaded: (googleMaps, map, marker) => {
        // Set Marker animation
        marker.setAnimation(googleMaps.Animation.BOUNCE)

        // Change icon when Marker will be hovered
        googleMaps.event.addListener(marker, "mouseover", () => {
          marker.setIcon(iconMarkerHover)
        })

        googleMaps.event.addListener(marker, "mouseout", () => {
          marker.setIcon(iconMarker)
        })
      },
    })
  })

  return (
    // GoogleMap component has a 100% height style.
    // You have to set the DOM parent height.
    // So you can perfectly handle responsive with differents heights.
    <ReactGoogleMapLoader
      params={{
        key: MY_API_KEY,
        libraries: "places",
      }}
      render={googleMaps =>
        googleMaps && (
          <div className="map">
            <GoogleMap
              googleMaps={googleMaps}
              // You can add and remove coordinates on the fly.
              // The map will rerender new markers and remove the old ones.
              coordinates={markers}
              center={{ lat: 33.745571, lng: -117.867836 }}
              styles={
                [
                  {
                    elementType: "geometry",
                    stylers: [
                      {
                        color: "#ebe3cd"
                      }
                    ]
                  },
                  {
                    elementType: "labels.text.fill",
                    stylers: [
                      {
                        color: "#523735"
                      }
                    ]
                  },
                  {
                    elementType: "labels.text.stroke",
                    stylers: [
                      {
                        color: "#f5f1e6"
                      }
                    ]
                  },
                  {
                    featureType: "administrative",
                    elementType: "geometry.stroke",
                    stylers: [
                      {
                        color: "#c9b2a6"
                      }
                    ]
                  },
                  {
                    featureType: "administrative.land_parcel",
                    stylers: [
                      {
                        visibility: "off"
                      }
                    ]
                  },
                  {
                    featureType: "administrative.land_parcel",
                    elementType: "geometry.stroke",
                    stylers: [
                      {
                        color: "#dcd2be"
                      }
                    ]
                  },
                  {
                    featureType: "administrative.land_parcel",
                    elementType: "labels.text.fill",
                    stylers: [
                      {
                        color: "#ae9e90"
                      }
                    ]
                  },
                  {
                    featureType: "administrative.neighborhood",
                    stylers: [
                      {
                        visibility: "off"
                      }
                    ]
                  },
                  {
                    featureType: "landscape.natural",
                    elementType: "geometry",
                    stylers: [
                      {
                        color: "#dfd2ae"
                      }
                    ]
                  },
                  {
                    featureType: "poi",
                    elementType: "geometry",
                    stylers: [
                      {
                        color: "#dfd2ae"
                      }
                    ]
                  },
                  {
                    featureType: "poi",
                    elementType: "labels.text",
                    stylers: [
                      {
                        visibility: "off"
                      }
                    ]
                  },
                  {
                    featureType: "poi",
                    elementType: "labels.text.fill",
                    stylers: [
                      {
                        color: "#93817c"
                      }
                    ]
                  },
                  {
                    featureType: "poi.attraction",
                    stylers: [
                      {
                        color: "#ff00ca"
                      },
                      {
                        visibility: "off"
                      }
                    ]
                  },
                  {
                    featureType: "poi.business",
                    stylers: [
                      {
                        visibility: "off"
                      }
                    ]
                  },
                  {
                    featureType: "poi.park",
                    elementType: "geometry.fill",
                    stylers: [
                      {
                        color: "#a5b076"
                      }
                    ]
                  },
                  {
                    featureType: "poi.park",
                    elementType: "labels.text.fill",
                    stylers: [
                      {
                        color: "#447530"
                      }
                    ]
                  },
                  {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [
                      {
                        color: "#f5f1e6"
                      }
                    ]
                  },
                  {
                    featureType: "road",
                    elementType: "labels",
                    stylers: [
                      {
                        visibility: "off"
                      }
                    ]
                  },
                  {
                    featureType: "road",
                    elementType: "labels.icon",
                    stylers: [
                      {
                        visibility: "off"
                      }
                    ]
                  },
                  {
                    featureType: "road.arterial",
                    elementType: "geometry",
                    stylers: [
                      {
                        color: "#fdfcf8"
                      }
                    ]
                  },
                  {
                    featureType: "road.arterial",
                    elementType: "labels",
                    stylers: [
                      {
                        visibility: "off"
                      }
                    ]
                  },
                  {
                    featureType: "road.highway",
                    elementType: "geometry",
                    stylers: [
                      {
                        color: "#f8c967"
                      }
                    ]
                  },
                  {
                    featureType: "road.highway",
                    elementType: "geometry.stroke",
                    stylers: [
                      {
                        color: "#e9bc62"
                      }
                    ]
                  },
                  {
                    featureType: "road.highway",
                    elementType: "labels",
                    stylers: [
                      {
                        visibility: "off"
                      }
                    ]
                  },
                  {
                    featureType: "road.highway.controlled_access",
                    elementType: "geometry",
                    stylers: [
                      {
                        color: "#e98d58"
                      }
                    ]
                  },
                  {
                    featureType: "road.highway.controlled_access",
                    elementType: "geometry.stroke",
                    stylers: [
                      {
                        color: "#db8555"
                      }
                    ]
                  },
                  {
                    featureType: "road.local",
                    stylers: [
                      {
                        visibility: "off"
                      }
                    ]
                  },
                  {
                    featureType: "road.local",
                    elementType: "labels.text.fill",
                    stylers: [
                      {
                        color: "#806b63"
                      }
                    ]
                  },
                  {
                    featureType: "transit",
                    stylers: [
                      {
                        visibility: "off"
                      }
                    ]
                  },
                  {
                    featureType: "transit.line",
                    elementType: "geometry",
                    stylers: [
                      {
                        color: "#dfd2ae"
                      }
                    ]
                  },
                  {
                    featureType: "transit.line",
                    elementType: "labels.text.fill",
                    stylers: [
                      {
                        color: "#8f7d77"
                      }
                    ]
                  },
                  {
                    featureType: "transit.line",
                    elementType: "labels.text.stroke",
                    stylers: [
                      {
                        color: "#ebe3cd"
                      }
                    ]
                  },
                  {
                    featureType: "transit.station",
                    elementType: "geometry",
                    stylers: [
                      {
                        color: "#dfd2ae"
                      }
                    ]
                  },
                  {
                    featureType: "transit.station.airport",
                    elementType: "geometry.fill",
                    stylers: [
                      {
                        color: "#aab8bc"
                      },
                      {
                        visibility: "on"
                      }
                    ]
                  },
                  {
                    featureType: "water",
                    elementType: "geometry.fill",
                    stylers: [
                      {
                        color: "#b9d3c2"
                      }
                    ]
                  },
                  {
                    featureType: "water",
                    elementType: "labels.text",
                    stylers: [
                      {
                        visibility: "off"
                      }
                    ]
                  },
                  {
                    featureType: "water",
                    elementType: "labels.text.fill",
                    stylers: [
                      {
                        color: "#92998d"
                      }
                    ]
                  }
                ]
              }
              zoom={10}
              onLoaded={(googleMaps, map) => {
                map.setMapTypeId(googleMaps.MapTypeId.ROADMAP)
              }}
            />
          </div>
        )}
    />
  )
}

export default Map
