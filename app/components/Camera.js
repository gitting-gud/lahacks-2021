import React, {useState, useEffect} from 'react';
import { Camera } from 'expo-camera';
import styles from '../screens/styles';
import { View, Text, Button } from 'react-native';
import * as Permissions from 'expo-permissions';

export default class CameraObject extends React.Component {

    camera = null;

    state = {
        captures: [],
        capturing: null,
        data: 'Scanning...',
        hasCameraPermission: null,
        cameraType: Camera.Constants.Type.back,
        flashMode: Camera.Constants.FlashMode.off,
    };

    // setQrData = (scannedData) => this.setState({data: scannedData})
    setFlashMode = (flashMode) => this.setState({ flashMode });
    setCameraType = (cameraType) => this.setState({ cameraType });
    handleCaptureIn = () => this.setState({ capturing: true });

    handleCaptureOut = () => {
        if (this.state.capturing)
            this.camera.stopRecording();
    };

    handleShortCapture = async () => {
        const photoData = await this.camera.takePictureAsync();
        this.setState({ capturing: false, captures: [photoData, ...this.state.captures] })
    };

    handleLongCapture = async () => {
        const videoData = await this.camera.recordAsync();
        this.setState({ capturing: false, captures: [videoData, ...this.state.captures] });
    };

    async componentDidMount() {
        const camera = await Permissions.askAsync(Permissions.CAMERA);
        const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
        const hasCameraPermission = (camera.status === 'granted' && audio.status === 'granted');
        this.setState({ hasCameraPermission });
    };

    render() {
        const { hasCameraPermission, flashMode, cameraType, capturing, captures } = this.state;

        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>Access to camera has been denied.</Text>;
        }

        return (
            <Camera
              type={cameraType}
              flashMode={flashMode}
              style={styles.preview}
              ref={camera => this.camera = camera}
              onBarCodeScanned={value => this.props.readData(value)}
            />
        );
    };
};