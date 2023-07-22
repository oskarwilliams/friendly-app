import { ImageBackground, View, ViewProps } from "react-native";


const BaseView = (props: ViewProps) => {

    return <ImageBackground source={require("../../assets/splash.png")} style={{width: '100%', height: '100%'}}>
        <View {...props}/>
    </ImageBackground>
}

export default BaseView