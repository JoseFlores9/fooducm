import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import CategoryView from '../components/Home/CategoryView'
import TopSection from '../components/Home/TopSection'
import { listCategories } from '../mocks/products'

export default function Home() {
    return (
        <ScrollView style={{backgroundColor: '#DDEAE9'}}>
            <TopSection />
            <CategoryView categories={listCategories} />
            <View
                style={{marginTop: 30, paddingHorizontal: 8}}
            >
                <View
                    style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}
                >
                    <Text style={styles.tittle}>
                        Recomendados
                    </Text>
                    <Text>
                        Ver Todos
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

export const styles = StyleSheet.create({
    tittle: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})


