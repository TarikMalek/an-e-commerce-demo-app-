import React from 'react';
import { StyleSheet,
        TouchableOpacity ,
        Dimensions,
        View,
        FlatList} from 'react-native';
import {HStack,
        Box,
        Text,
        Icon,
        } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useSelector } from 'react-redux';
import { SimpleLineIcons} from '@expo/vector-icons';
import ProductItem from '../components/Product';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen  = props => {
  
    const products = useSelector(state=> state.products.products);
    
  
    return (
        <SafeAreaView  style={styles.container}>
            
                <HStack
                alignItems={'center'}
                justifyContent={'space-around'}
                h={50}
                w={'90%'}
             
                >
                    <Box
                    w={'45%'}
                    alignItems={'flex-start'}
                    
                    >
                        <Text
                        fontWeight={'bold'}
                        fontSize={20}
                        color={'white'}
                        >
                            Home
                        </Text>

                    </Box>

                    <Box
                    w={'45%'}
                    alignItems={'flex-end'}
                    >
                       <TouchableOpacity
                       onPress={()=> props.navigation.navigate('CartScreen')}
                       >

                       <Icon
                            as={SimpleLineIcons}
                            name={'basket'}
                            size={'2xl'}
                            // alignSelf={'center'}
                            color={'white'}
                            />
                       </TouchableOpacity>
                          

                    </Box>

                </HStack>
                
                
              <Box
              borderTopRadius={30}
              h={null}
              w={null}
              bg={'white'}
              >
                <FlatList 
                showsVerticalScrollIndicator={false}  
                data={products}
                keyExtractor={item => item['id'].toString()}
                contentContainerStyle={{
                    marginTop:10,
                    width:windowWidth,
                    alignItems:'center'
                }}
                renderItem={({ item }) =>   
                <ProductItem 
                    item={item}
                    navigation={props.navigation}
                    /> 
                }
                
                ListFooterComponent={
                    <View style={{marginBottom:100}} />
    
                }
                
            
                ListEmptyComponent = { 
                
                    <Box
                    mt={2}
                    w={windowWidth}
                    h={60}
                    bg={'white'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    >
    
                    <Text>No products available at this time</Text>
    
                    </Box>
              
                }
                    
    
                
                />
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


export default React.memo(HomeScreen);