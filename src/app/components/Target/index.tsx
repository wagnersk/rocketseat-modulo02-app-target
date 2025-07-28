import { View ,Text, ColorValue, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'

import { styles } from './styles'

export type TargetProps = {
    id?:string
    name:string
    percentage:string
    current:string
    target:string
}

type Props = TouchableOpacityProps & {
    data:TargetProps

}

export function Target({data,...rest}:Props){
    return (
        <TouchableOpacity {...rest} style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.name} numberOfLines={1}>{data.name}</Text>
                <Text style={styles.status}>
                    {data.percentage} • {data.current} de {data.target}
                </Text>
            </View>

            <MaterialIcons 
                name='chevron-right'
                size={20}
            />
        </TouchableOpacity>
    )

}