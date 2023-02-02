import React from 'react';
import { StyleSheet,Dimensions } from 'react-native';
import { Box,Text,Image } from 'native-base';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const SplashScreen  = props => {
  

  
    return (
        
        <Box
           w={windowWidth}
           h={windowHeight} 
           alignItems={'center'}
           justifyContent={'center'}
           bg={'#612B91'}
            >


                <Image
                source={require('../assets/yeshtery-logo.jpeg')}
                size={'lg'}
                alt='image'
                resizeMode='cover'
                        
                />
                <Text
                fontWeight={'bold'}
                fontSize={20}
                color={'white'}
                >
                    Welcome to Yeshtery!
                </Text>

                <Text
                fontSize={15}
                color={'white'}
                // mt={1}
                >
                    a demo app developed by Tarik Malek
                </Text>
               

            </Box>
                
               
                
                
                
    ) 
};


const styles = StyleSheet.create({
  

    titleContainer: {
        flex:1,
        alignItems: 'center',
       
    },
   
});


export default React.memo(SplashScreen);