
import { StyleSheet, Text, View, ActivityIndicator, Platform, TouchableOpacity } from 'react-native';
import { Image, Button } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import React, { useRef,  useState, } from 'react';

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import RBSheet from "react-native-raw-bottom-sheet";




const Home = (props) => {

  const bottomSheetRef = useRef(null);
  const [image, setImage] = useState(null)




  const handleTakePicture = () => {

    showCamera()


  }

  const showCamera = async () => {
    const result = await launchCamera();
    processResult(result)
    

  }


  const handleShowGallery = () => {

    showImagePicker()


  }

  const processResult = (result) => {
    if (!result?.didCancel){
      setImage(result?.assets?.[0].uri)
      bottomSheetRef.current.close()
    }

  }

  const showImagePicker = async () => {
    const result = await launchImageLibrary({ mediaType: 'photo' })
    processResult(result)
    
  }




  return (
    <View style={styles.container}>

      <RBSheet
        ref={bottomSheetRef}
        closeOnPressMask={false}
        closeOnDragDown={false}
        >
        <View style={{ paddingHorizontal: 20, backgroundColor: '#1A1A1A', flex: 1, justifyContent: 'center' }}>
         
          <TouchableOpacity onPress={handleTakePicture}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={{ uri: 'https://i.ibb.co/MsQ8dK9/output-onlinepngtools.png' }}
                style={{ width: 30, height: undefined, aspectRatio: 1 / 1 }}
              />
              <Text style={{ color: '#fff', fontSize: 20, marginLeft: 20 }}> Take a Photo</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleShowGallery}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginBottom: 30 }}>
              <Icon name="images" size={30} color="white" />
              <Text style={{ color: '#fff', fontSize: 20, marginLeft: 30 }}>Choose a picture...</Text>
            </View>
          </TouchableOpacity>


        </View>
      </RBSheet>
      <LinearGradient
        // Background Linear Gradient
        colors={['#3B2845', 'transparent']}
        style={{
          flex: 1, paddingHorizontal: 20,
          paddingVertical: 100
        }}
      >
        <Text style={{ color: '#fff', fontSize: 40 }}>Profile picture</Text>
        <Text style={{ color: '#fff', fontSize: 15, marginTop: 20 }}>Upload your photo so that you can optionally display it to others</Text>
        <View style={{ flex: 1, alignItems: 'center', marginTop: 40 }}>
          {image ?
            <Image
              source={{ uri: image }}
              PlaceholderContent={<ActivityIndicator />}
              style={{ width: '40%', height: undefined, aspectRatio: 1 / 1, marginBottom: 50 }}

            />

            :
            <Image
              source={{ uri: 'https://i.ibb.co/MsQ8dK9/output-onlinepngtools.png' }}
              PlaceholderContent={<ActivityIndicator />}
              style={{ width: '40%', height: undefined, aspectRatio: 1 / 1, marginBottom: 50 }}

            />
          }


          <View>
            <Button onPress={() => bottomSheetRef.current.open()} containerStyle={{ width: 300 }} buttonStyle={{ backgroundColor: '#BF6FE5' }} title="Add a Photo" />

            <Button containerStyle={{ width: 300, marginTop: 20 }} buttonStyle={{ backgroundColor: 'transparent' }} title="Skip" />
          </View>
        </View>

      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',

  },

  contentContainer: {
    flex: 1,
    alignItems: 'center',

  },
});


export default Home