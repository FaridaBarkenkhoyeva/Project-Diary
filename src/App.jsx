import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Title from './Title'
import NewEntryButton from './NewEntryButton'
import SortFilter from './SortFilter'
import EntriesList from './EntriesList'
import EntryCard from './EntryCard'
import TextField from './TextField'
import SubmitButton from './SubmitButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Title/>
      <NewEntryButton/>
      <SortFilter/>
      <EntriesList/>
      <EntryCard/>
      <TextField/>
      <SubmitButton/>
      
    </>
  )
}

export default App
