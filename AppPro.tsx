import React from "react";
import { ScrollView, View , Text, StyleSheet, useColorScheme} from "react-native";

function AppPro():JSX.Element{
    const isDarkMode = useColorScheme() === 'dark'
    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={isDarkMode?styles.whiteText:styles.darkText}>Namaste Duniya!!!</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height:'100%',
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 24,
    },
    whiteText:{
        color:'#FFFFFF',
        
    },
    darkText:{
        color:'#000000',
        
    }
})

export default AppPro