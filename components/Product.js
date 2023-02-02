import React,{useState,useEffect} from 'react';

import { StyleSheet,
        TouchableOpacity ,
        Dimensions,
        } from 'react-native';
import {HStack,
        VStack,
        Box,
        Text,
        Image,
        Icon,
        Button} from 'native-base';

import { MaterialCommunityIcons,Ionicons} from '@expo/vector-icons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const ProductItem = ({navigation,item})=>{
   
   const baseFile = 'https://develop.yeshtery.com/files/';
   const itemId = item.id;
   const itemName = item.name;
   const imageUrl = item.image_url;


    return (
        <TouchableOpacity
         onPress={()=>navigation.navigate('ProductScreen',{
            itemId: itemId,
          })}
        >
        <HStack
                w={'95%'}
                h={150}
                // bg={'black'}
                my={3}
                borderRadius={20}
                borderWidth={2}
                borderColor={'muted.100'}
                alignItems={'center'}
                justifyContent={'space-around'}
                alignSelf={'center'}
                >
                    <Box
                    h={'95%'}
                    w={'30%'}
                    // bg={'black'}
                    >
                        <Image
                        id={itemId}
                        source={ {uri: baseFile+imageUrl }}
                        size={'full'}
                        alt='image'
                        resizeMode='contain'
                        />
                    </Box>

                    <VStack
                    h={'65%'}
                    w={'60%'}
                    >
                        <Text
                        textAlign={'left'}
                        alignSelf={'flex-start'}
                        fontSize={16}
                        >
                           {itemName}
                        </Text>

                        <HStack
                        w={'100%'}
                        mt={5}
                        alignItems={'flex-start'}
                        >
                            <Button
                            colorScheme={'success'}
                            w={'35%'}
                            h={45}
                            bg={'muted.100'}
                            borderRadius={10}
                            mx={2}
                            leftIcon={
                            <Icon 
                            as={Ionicons}
                            name="ios-qr-code-outline"
                            size="xl" 
                            color={'blue.500'}
                           
                            />
                            }
                           
                            onPress={()=>navigation.navigate('ScanQRCodeScreen')}
                            >
                                <Text
                                color={'blue.500'}
                                >
                                    120
                                </Text>
                            </Button>

                            <Button
                            colorScheme={'success'}
                            w={'35%'}
                            h={45}
                            bg={'muted.100'}
                            borderRadius={10}
                            leftIcon={
                            <Icon 
                            as={MaterialCommunityIcons}
                            name="file-certificate-outline"
                            size="2xl" 
                            color={'blue.500'}
                            />
                            }
                            onPress={()=>console.log('points')}
                            >
                                <Text
                                color={'blue.500'}
                                >
                                    200
                                </Text>
                            </Button>

                        </HStack>


                    </VStack>

                </HStack>
                </TouchableOpacity>
    )
}


export default ProductItem