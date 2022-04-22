
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { Image, Button } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {

    image: state?.imageReducer?.image,

  };
}


const Home = (props) => {
  return (
    <View style={styles.container}>
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
        <View style={{ flex: 1, alignItems: 'center', marginTop: 40, justifyContent: 'space-between' }}>
          {props.image ?
            <Image
              source={{ uri: props.image }}
              PlaceholderContent={<ActivityIndicator />}
              style={{ width: '40%', height: undefined, aspectRatio: 1 / 1 }}

            />

            :
            <Image
              source={{ uri: 'https://i.ibb.co/MsQ8dK9/output-onlinepngtools.png' }}
              PlaceholderContent={<ActivityIndicator />}
              style={{ width: '40%', height: undefined, aspectRatio: 1 / 1 }}

            />
          }


          <View>
            <Button onPress={() => props.navigation.push('action')} containerStyle={{ width: 300 }} buttonStyle={{ backgroundColor: '#BF6FE5' }} title="Add a Photo" />

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
});


export default connect(mapStateToProps, null)(Home)