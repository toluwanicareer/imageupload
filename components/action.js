import { TouchableOpacity, Text, View } from 'react-native';
import { Image, Button } from '@rneui/themed';


import React, { useState, useEffect } from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux'
import {addImage} from '../store/action'



const mapStateToProps = state => {
    return {

        image: state?.imageReducer?.image,
        

    };
}




const ActionScreen = (props) => {

   

    
    
    const navigation = props.navigation

    const handleTakePicture = () => {
       
            showCamera()
        

    }

    const showCamera = async () => {
        const result = await launchCamera()
       
        props.dispatch(addImage(result?.assets?.[0].uri))
       

    }


    const handleShowGallery = () => {

        showImagePicker()


    }

    const showImagePicker = async () => {
        const result = await launchImageLibrary({mediaType: 'photo'})
        props.dispatch(addImage(result?.assets?.[0].uri))
    }






    return (
        <View style={{ paddingVertical: 60, paddingHorizontal: 20, backgroundColor: '#1A1A1A', flex: 1, justifyContent: 'center' }}>
            <TouchableOpacity onPress={handleTakePicture}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={{ uri: 'https://i.ibb.co/MsQ8dK9/output-onlinepngtools.png' }}
                        style={{ width: 50, height: undefined, aspectRatio: 1 / 1 }}
                    />
                    <Text style={{ color: '#fff', fontSize: 20, marginLeft: 20 }}> Take a Photo</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleShowGallery}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginBottom: 30 }}>
                    <Icon name="images" size={50} color="white" />
                    <Text style={{ color: '#fff', fontSize: 20, marginLeft: 30 }}>Choose a picture...</Text>
                </View>
            </TouchableOpacity>
            {props?.image &&
                <>
                    <Image source={{ uri: props.image }} style={{ width: 50, height: 50, alignSelf: 'center', marginBottom: 20 }} />

                    <Button onPress={() => props.navigation.push('home')} containerStyle={{ width: 300 }} buttonStyle={{ backgroundColor: '#BF6FE5' }} title="Image Uploaded, Go Back" />
                </>
            }

        </View>
    )
}

export default connect(mapStateToProps, null)(ActionScreen)