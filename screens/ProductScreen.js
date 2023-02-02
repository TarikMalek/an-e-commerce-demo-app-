import React from 'react';
import { StyleSheet,
        TouchableOpacity ,
        Dimensions,
        View,
        ScrollView} from 'react-native';
import {HStack,
        VStack,
        Box,
        Text,
        Image,
        Icon,
        Circle,
        Button} from 'native-base';
import {  useState } from 'react';
import { useSelector } from 'react-redux';
import { SimpleLineIcons,Ionicons} from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ProductScreen  = props => {
    const [color,setColor] = useState(null);
    const [size,setSize] = useState(null);


    const itemId = props.route.params.itemId;
    const item = useSelector(state=> state.products.products.filter(item=> item.id === itemId)[0]);
    const imageUrl = item.image_url;
    const itemName=  item.name;
    const itemPrice = item.price
    const desc = item.description;

    const baseFile = 'https://develop.yeshtery.com/files/';
    
    return (    
        <SafeAreaView  style={styles.container}>
        <ScrollView
        showsVerticalScrollIndicator={false}  
        >
        <HStack
                alignItems={'center'}
                justifyContent={'space-around'}
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
                            Product Details
                        </Text>

                    </HStack>

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
                w={windowWidth}
                bg={'white'}
                alignItems={'center'}
                >
                   <Box
                    h={220}
                    w={'90%'}
                    borderRadius={20}
                    borderWidth={2}
                    borderColor={'muted.100'}
                    mt={10}
                    mb={2}
                    >
                        <Image
                        id={itemId}
                        source={ {uri: baseFile+imageUrl }}
                        size={'full'}
                        alt='image'
                        resizeMode='contain'
                        />
                    </Box>

                    <HStack
                    w={'90%'}
                    h={null}
                    my={2}
                    justifyContent={'space-between'}
                    >
                        <VStack
                        w={'45%'}
                        justifyContent={'flex-start'}
                        >
                            <Text
                            fontSize={18}
                            >
                                {itemName}
                            </Text>

                        </VStack>

                        <VStack
                         w={'45%'}
                         alignItems={'flex-end'}
                         justifyContent={'flex-start'}
                        >
                            <Text
                            fontSize={18}
                            color={'blue.800'}
                            >
                                ( {itemPrice} EGP )
                            </Text>

                            <Text
                            fontSize={16}
                            color={'muted.400'}
                            strikeThrough
                            >
                                {itemPrice*2} EGP
                            </Text>
                            
                        </VStack>
                        
                    </HStack>

                    <Box
                    my={2}
                    w={'90%'}
                    alignItems={'center'}
                    >
                    <Text
                    fontSize={16}
                    color={'muted.500'}
                    textAlign={'justify'}
                    >
                        {desc}
                    </Text>
                    </Box>

                    <Box
                     my={2}
                     w={'90%'}
                    //  alignItems={'center'}
                    >
                    <Text
                    fontSize={20}
                    color={'blue.800'}
                    
                    >
                        color
                    </Text>

                    <HStack
                    my={2}
                    >

                    <TouchableOpacity
                      style={{
                        marginRight:2,
                    }}
                    onPress={()=>setColor('#830B14')}
                    >
                        <Circle 
                        w={color === '#830B14'  ? 28 : 26}
                        h={color === '#830B14'  ? 28 : 26}
                        bg={'#830B14'}
                        mx={2}
                        borderWidth={color === '#830B14' ? 2 : null }
                        borderColor={color === '#830B14' ?  'blue.800' : null}
                        />

                    </TouchableOpacity>

                    <TouchableOpacity
                      style={{marginRight:2}}
                      onPress={()=>setColor('#000000')}
                    >
                        <Circle 
                        w={color === '#000000'  ? 28 : 26}
                        h={color === '#000000'  ? 28 : 26}
                        bg={'#000000'}
                        mx={2}
                        borderWidth={color === '#000000' ? 2 : null }
                        borderColor={color === '#000000' ?  'blue.800' : null}
                        />

                    </TouchableOpacity>

                    <TouchableOpacity
                   style={{marginRight:2}}
                   onPress={()=>setColor('#0052D3')}
                    >
                        <Circle 
                         w={color === '#0052D3'  ? 28 : 26}
                         h={color === '#0052D3'  ? 28 : 26}
                        bg={'#0052D3'}
                        mx={2}
                        borderWidth={color === '#0052D3' ? 2 : null }
                        borderColor={color === '#0052D3' ?  'blue.800' : null}
                        />

                    </TouchableOpacity>

                    <TouchableOpacity
                    style={{marginRight:2}}
                    onPress={()=>setColor('#FCBC04')}
                    >
                        <Circle 
                         w={color === '#FCBC04'  ? 28 : 26}
                         h={color === '#FCBC04'  ? 28 : 26}
                        bg={'#FCBC04'}
                        mx={2}
                        borderWidth={color === '#FCBC04' ? 2 : null }
                        borderColor={color === '#FCBC04' ?  'blue.800' : null}
                        />

                    </TouchableOpacity>
                   

                    

                    </HStack>

                    </Box>
                    

                    <Box
                     my={2}
                     w={'90%'}
                    //  alignItems={'center'}
                    >
                    <Text
                    fontSize={20}
                    color={'blue.800'}
                    
                    >
                        size
                    </Text>

                    <HStack
                    my={2}
                    alignItems={'center'}
                    >

                    <TouchableOpacity
                    style={{marginRight:4}}
                    onPress={()=>setSize('S')}
                    > 
                        <Box
                        w={67}
                        h={37}
                        alignItems={'center'}
                        justifyContent={'center'}
                        borderRadius={25}
                        borderWidth={2}
                        borderColor={size === 'S' ?  'blue.800' : 'muted.400'}
                      
                        >
                            <Text
                            fontSize={18}
                            color={'muted.400'}
                            >
                                S
                            </Text>


                        </Box>
                    </TouchableOpacity>

                    <TouchableOpacity
                   style={{marginRight:4}}
                    onPress={()=>setSize('M')}
                    > 
                        <Box
                       w={67}
                       h={37}
                        alignItems={'center'}
                        justifyContent={'center'}
                        borderRadius={25}
                        borderWidth={2}
                        borderColor={size === 'M' ?  'blue.800' : 'muted.400'}
                      
                        >
                            <Text
                            fontSize={18}
                            color={'muted.400'}
                            >
                                M
                            </Text>


                        </Box>
                    </TouchableOpacity>

                    <TouchableOpacity
                    style={{marginRight:4}}
                    onPress={()=>setSize('L')}
                    > 
                        <Box
                        w={67}
                        h={37}
                        alignItems={'center'}
                        justifyContent={'center'}
                        borderRadius={25}
                        borderWidth={2}
                        borderColor={size === 'L' ?  'blue.800' : 'muted.400'}
                      
                        >
                            <Text
                            fontSize={18}
                            color={'muted.400'}
                            >
                                L
                            </Text>


                        </Box>
                    </TouchableOpacity>
                    </HStack>

                    </Box>
                    
                    
                    <HStack
                     my={2}
                     h={null}
                     w={'90%'}
                     justifyContent={'space-between'}
                    >
                        <HStack
                        w={'55%'}
                        h={null}
                        alignItems={'center'}
                        // justifyContent={'space-around'}
                        >

                            <Icon 
                            as={Ionicons}
                            name="ios-qr-code-outline"
                            size="3xl" 
                            color={'blue.800'}
                            mr={2}
                            />

                            <VStack
                            >
                                <Text
                                fontSize={18}
                                color={'blue.800'}
                                >
                                    Scan
                                </Text>

                                <Text
                                 fontSize={16}
                                 color={'black'}
                                 mt={-2}
                                >
                                    & get 100 points
                                </Text>
                            </VStack>

                        </HStack>

                        <Box
                        w={'40%'}
                        >
                        <Button
                         w={'90%'}
                        colorScheme={'cyan'}
                        bg={'cyan.600'}
                        alignSelf={'flex-end'}
                        borderRadius={10}
                        onPress={()=>props.navigation.navigate('ScanQRCodeScreen')}
                        >
                        <Text
                            fontSize={16}
                            fontWeight={'bold'}
                            color={'white'}
                        >
                            Scan
                        </Text>

                        </Button>

                        </Box>

                    </HStack>

                    <HStack
                     my={2}
                     h={null}
                     w={'90%'}
                     justifyContent={'space-between'}
                    >
                        <HStack
                        w={'55%'}
                        h={null}
                        alignItems={'center'}
                        // justifyContent={'space-around'}
                        >

                            <Icon 
                            as={Ionicons}
                            name="ios-qr-code-outline"
                            size="3xl" 
                            color={'blue.800'}
                            mr={2}
                            />

                            <VStack
                            >
                                <Text
                                fontSize={18}
                                color={'blue.800'}
                                >
                                    Buy & Submit
                                </Text>

                                <Text
                                 fontSize={14}
                                 color={'black'}
                                 mt={-2}
                                >
                                    the receipt for 120 points
                                </Text>
                            </VStack>

                        </HStack>

                        <Box
                        w={'40%'}
                        >
                        <Button
                        w={'90%'}
                        colorScheme={'cyan'}
                        bg={'cyan.600'}
                        alignSelf={'flex-end'}
                        borderRadius={10}
                        >
                        <Text
                            fontSize={14}
                            fontWeight={'bold'}
                            color={'white'}
                        >
                           Add To Cart
                        </Text>

                        </Button>

                        </Box>

                    </HStack>

                    <Box
                    w={windowWidth}
                    h={windowHeight*.05}
                    />

                    
                </Box>
             
            </ScrollView>
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



export default React.memo(ProductScreen);