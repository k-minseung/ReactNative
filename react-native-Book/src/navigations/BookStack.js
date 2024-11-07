import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BookMainScreen from "../book/BookMainScreen";
import BookList from "../book/BookListScreen";
import BookDetail from "../book/BookDetailScreen";

const Stack = createStackNavigator();

const BookStackNavigation = () => {
    return(
        <Stack.Navigator initialRouteName="BookMain">
            <Stack.Screen name="BookMain" component={BookMainScreen} />
            <Stack.Screen name="BookList" component={BookList} />
            <Stack.Screen name="BookDetail" component={BookDetail} />
        </Stack.Navigator>
    )
}

export default BookStackNavigation;