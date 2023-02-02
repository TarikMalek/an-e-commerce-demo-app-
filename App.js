import React,{useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import { navigationRef } from './navigation/RootNavigation';

import { axiosInstance } from './utilities/axiosClient';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { productsReducer } from './store/reducers/productsReducer';
import { Provider,useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { setProducts } from './store/actions/productsActions';

import SplashScreen from './screens/SplashScreen';
import RootStack from './navigation/RootStackNavigator';


const store = configureStore({
  middleware: [thunk,],
  reducer: {
    products:productsReducer,
   
  },
})








const App = ()=> {
  const [ isLoading, setIsLoading ] = useState(true);
  const dispatch = useDispatch();

  const fetchProducts = async () =>{

    const response = await axiosInstance.get('products/')
    .then((res) => {
      let fullProducts = res.data['products'];
      let products = [];
      fullProducts.map((product) => {
        let finalProduct = {
          id : product.id, 
          name : product.name  ,
          price : product.price ,
          image_url : product.image_url , 
          description :  product.description
        }
        products.push(finalProduct)

      }
        
      )

      dispatch(setProducts(products))
      setTimeout(() => {
        setIsLoading(false)
      }, 2000);
      })
    .catch(err => {
     
      console.log(err)
    });

    return response

  }


  
  useEffect(()=>{
      fetchProducts()
  },[])

  return (
      <NavigationContainer ref={navigationRef}>
        


        {isLoading ? 
        <SafeAreaView style={styles.container}>
        <SplashScreen />
        </SafeAreaView>
        :
      
        <RootStack />
        }



       

     
        <StatusBar style="light" />

     </NavigationContainer>
  
  );
};

const AppWrapper= () => {
    
  return (
    <Provider store={store}> 
      <NativeBaseProvider>
      
        <App /> 
      </NativeBaseProvider>
    </Provider>
  )
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#612B91'
  },
});


export default AppWrapper;