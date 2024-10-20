import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
  ReactNode,
} from 'react'

interface UserType {
  name?: string
  setName: Dispatch<SetStateAction<string | undefined>>
}

const UserContext = createContext<UserType | null>(null)

const useUser = () => {
  return useContext(UserContext)
}

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState<string | undefined>(undefined) // Specify the type here

  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider, useUser }
