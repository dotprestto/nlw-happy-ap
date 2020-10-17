import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

interface HeaderProps {
    title: string
    showCancel?: boolean
}

export default function Header({ title, showCancel = true }: HeaderProps) {
    const { navigate, goBack } = useNavigation()

    function handleGoBack() {
        goBack()
    }

    function handleGoBackToHomePage() {
        navigate('OrphanagesMap')
    }

    return (
        <View style={styles.container}>
            <BorderlessButton onPress={handleGoBack}>
                <Feather name="arrow-left" size={24} color="#15B6D6"/>
            </BorderlessButton>
            <Text style={styles.title}>{title}</Text>
            
            {/* Para que o TITLE fique no meio */}
            {showCancel ? (
                <BorderlessButton onPress={handleGoBackToHomePage}>
                <Feather name="x" size={24} color="#FF669D"/>
            </BorderlessButton>
            ) :  <View />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: "#F9FAFC",
        borderBottomWidth: 1,
        borderColor: "#DDE3F0",
        paddingTop: 44,

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    title: {
        fontFamily: "Nunito_600SemiBold",
        color: "#8FA7B3",
        fontSize: 16,
    }
})