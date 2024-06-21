import { Tabs } from 'expo-router'
import React from 'react'

import { TabBarIcon } from '@/src/components/navigation/TabBarIcon'
import { Colors } from '@/src/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme'

export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" options={{ href: null }} />
      <Tabs.Screen name="Index" options={{ href: null }} />
      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menu',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'home' : 'home-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Order',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'code-slash' : 'code-slash-outline'}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  )
}
