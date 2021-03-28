import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Text, useWindowDimensions, ScrollView, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const MapScreen = ({ navigation }) => {
  const mapRef = useRef(null);
  const carouselRef = useRef(null);

  const [currentLocation, setCurrentLocation] = useState({
    latitude: 34.0686145,
    longitude: -118.4450876,
  });
  const [region, setRegion] = useState({
    latitude: 34.0686145,
    longitude: -118.4450876,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });
  const [markers, setMarkers] = useState([{
    name: 'You Are Here',
    address: '',
    coordinate: currentLocation,
  }]);

  useEffect(() => {
    let initialMarker = {
      name: 'You Are Here',
      address: '',
      coordinate: currentLocation,
    };
    (async () => {
      const { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      
      if(location) {
        const latlong = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        };

        initialMarker.coordinate = latlong;
        setCurrentLocation(latlong);
        setRegion({
          ...latlong,
          latitudeDelta: region.latitudeDelta,
          longitudeDelta: region.longitudeDelta,
        });
      }
    })();

    const nearbyMarkers = testMarkers; // TODO: GET FROM ROUTE
    setMarkers([initialMarker, ...nearbyMarkers]);
  }, []);

  const [ind, setInd] = useState(0);

  const jumpTo = (i) => {
    setInd(i);
    mapRef.current?.animateToRegion({
      ...markers[i].coordinate,
      latitudeDelta: region.latitudeDelta,
      longitudeDelta: region.longitudeDelta,
    });
  }

  const onRegionChange = (region) => setRegion(region);

  const CarouselItem = ({item, index}) => {
    return (
      <View
        key={index}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 5,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            if(index) {
              navigation.navigate('HomeScreen', /*{id: item.id}*/); // TODO: update to business's stamps list screen
            } else {
              navigation.navigate('UserScreen');
            }
          }}
          style={{
            width: '90%',
            height: '100%',
            flex: 1,
            alignItems: 'center',
            borderRadius: 10,
            borderWidth: 2,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
            }}
          >
            {item.name}
          </Text>
          <ScrollView>
          <Text
            numberOfLines={1}
            style={{flex: 1, textAlign: 'center',}}
          >
            {item.address}
          </Text></ScrollView>
        </TouchableOpacity>
      </View>
    );
  };

  const dimensions = useWindowDimensions();
  return (
    <View style={{...dimensions}}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        region={region}
        onRegionChangeComplete={onRegionChange}
        style={StyleSheet.absoluteFillObject}
      >
        {markers.map((marker, i) => (
          <Marker
            key={i}
            title={marker.name}
            description={marker.address}
            coordinate={marker.coordinate}
            onPress={() => { jumpTo(i); }}
            pinColor={i===0 ? 'blue' : 'red'}
          />
        ))}
      </MapView>
      <View style={{
        position: 'absolute',
        top: 0,
        backgroundColor: '#fff',
        width: dimensions.width,
        height: dimensions.height * 0.2,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Carousel
          ref={carouselRef}
          data={markers}
          renderItem={CarouselItem}
          sliderWidth={dimensions.width}
          itemWidth={dimensions.width}
          onSnapToItem={i => { jumpTo(i); }}
        />
        <Pagination
          dotsLength={markers.length}
          activeDotIndex={ind}
          carouselRef={carouselRef}
          tappableDots={true}
          dotStyle={{
            width: 12,
            height: 12,
            borderRadius: 6,
          }}
          inactiveDotScale={0.8}
        />
      </View>
    </View>
  );
};

export default MapScreen;

const testMarkers = [
  {
    name: 'Boba Guys Culver City',
    address: '8820 Washington Blvd #107, Culver City, CA 90232',
    coordinate: {
      latitude: 34.0272141,
      longitude: -118.3895074,
    },
  },
  {
    name: 'Wushiland Boba WCC',
    address: '10250 Santa Monica Blvd Ste 2770, Los Angeles, CA 90067',
    coordinate: {
      latitude: 34.0593723,
      longitude: -118.4221478,
    },
  },
  {
    name: 'Redstraw',
    address: '10250 Santa Monica Blvd, Los Angeles, CA 90067',
    coordinate: {
      latitude: 34.0594111,
      longitude: -118.4374687,
    },
  },
  {
    name: 'Boba Time',
    address: '11207 National Blvd, Los Angeles, CA 90064',
    coordinate: {
      latitude: 34.0274306,
      longitude: -118.4469587,
    },
  },
  {
    name: "It's Boba Time",
    address: '10946 Weyburn Ave, Los Angeles, CA 90024',
    coordinate: {
      latitude: 34.0624556,
      longitude: -118.4642974,
    },
  },
  {
    name: 'Sharetea',
    address: '1055 Broxton Ave, Los Angeles, CA 90024',
    coordinate: {
      latitude: 34.0624556,
      longitude: -118.4642974,
    },
  },
  {
    name: 'Bubble Boba',
    address: '2829 Ocean Park Blvd, Santa Monica, CA 90405',
    coordinate: {
      latitude: 34.008967,
      longitude: -118.4987671,
    },
  },
  {
    name: 'Boba Lab',
    address: '711 Pico Blvd, Santa Monica, CA 90405',
    coordinate: {
      latitude: 34.0339368,
      longitude: -118.4457237,
    },
  },
  {
    name: 'Boba Tea & Me',
    address: '1328 Wilshire Blvd, Santa Monica, CA 90403',
    coordinate: {
      latitude: 34.0210615,
      longitude: -118.4932739,
    },
  },
];