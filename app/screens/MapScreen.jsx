import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Text, useWindowDimensions } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const CarouselItem = ({item, index}) => {
  <View
    key={index}
    style={{
      width: '75%',
      height: '75%',
      backgroundColor: '#000',
      padding: '10',
      color: 'black',
    }}
  >
    <Text
      onPress={() => navigation.navigate('ViewBusinessScreen', {id: item.id})}
      style={{
        fontSize: 20,
        fontWeight: '700',
      }}
    >
      {item.title}
    </Text>
    <Text>{item.address}</Text>
  </View>
}

const MapScreen = () => {
  const mapRef = useRef(null);
  const carouselRef = useRef(null);

  const [region, setRegion] = useState({});
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    setRegion({
      latitude: 34.0686145,
      longitude: -118.4450876,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    });
    setMarkers(testMarkers);
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
            title={marker.title}
            description={marker.address}
            coordinate={marker.coordinate}
            onPress={() => { jumpTo(i); }}
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
          itemWidth={dimensions.width/2}
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
    id: 0,
    title: 'Boba Guys Culver City',
    address: '8820 Washington Blvd #107, Culver City, CA 90232',
    coordinate: {
      latitude: 34.0272141,
      longitude: -118.3895074,
    },
  },
  {
    id: 1,
    title: 'Wushiland Boba WCC',
    address: '10250 Santa Monica Blvd Ste 2770, Los Angeles, CA 90067',
    coordinate: {
      latitude: 34.0593723,
      longitude: -118.4221478,
    },
  },
];