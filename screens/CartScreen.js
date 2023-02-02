import React from 'react';
import { StyleSheet,TouchableOpacity } from 'react-native';
import {HStack,
         Text,
         Icon,
         Box
        } from 'native-base';
import { Ionicons} from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';


const CartScreen  = props => {
  

  
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
                            The Cart
                        </Text>

                    </HStack>
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


export default React.memo(CartScreen);