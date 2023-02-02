import React from 'react';
import { StyleSheet,
        TouchableOpacity ,
        Dimensions,
        } from 'react-native';
import {HStack,
       
        Box,
        Text,
        Image,
        Icon,
        } from 'native-base';
import { Ionicons} from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const ScanQRCodeScreen  = props => {
  

  
    return (
        <SafeAreaView  style={styles.container}>
                <Box
                alignItems={'flex-start'}
                justifyContent={'center'}
                h={50}
                w={'90%'}
             
                > 
                    <HStack
                    w={'45%'}
                    alignItems={'center'}
                    >
                        <TouchableOpacity
                        onPress={()=>props.navigation.goBack()}
                        >
                            <Icon
                            as={Ionicons}
                            name="chevron-back-sharp"
                            size={'2xl'}
                            color="white"
                            />
                        </TouchableOpacity>
                        <Text
                        fontWeight={'bold'}
                        fontSize={20}
                        color={'white'}
                        ml={2}
                        >
                            Scan Code
                        </Text>

                    </HStack>
                    </Box>

                    <Box
                    borderTopRadius={30}
                    h={windowHeight- 100}
                    w={windowWidth}
                    bg={'white'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    >
                        <Box
                        h={220}
                        w={'90%'}
                        borderRadius={20}
                      
                        >

                        <Image
                        id={'10000'}
                        source={require('../assets/qr_code.jpg')}
                        size={'full'}
                        alt='image'
                        resizeMode='contain'
                        /> 
                        </Box>
                       

                    </Box>
                   

                
                
                
                
                
                
             
            
            </SafeAreaView>
    ) 
};


const styles = StyleSheet.create({
  
    container: {
        flex:1,
        alignItems: 'center',
        backgroundColor:'#612B91',
       
    },
   
});


export default React.memo(ScanQRCodeScreen);