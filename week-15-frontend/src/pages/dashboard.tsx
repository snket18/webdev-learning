import '../App.css'
import { Button } from '../components/Button'
import { PlusIcon } from '../icons/plusIcon'
import { ShareIcon } from '../icons/shareIcon'
import { Card } from '../components/Card'
import { useState } from 'react'
import { CreateContentModal } from '../components/CreateContentModal'
import { Sidebar } from '../components/Sidebar'




function Dashboard() {
  const [openModal, setOpenModal] = useState(false);

  return <div>
    <Sidebar  />
    <div className='p-4 ml-72 min-h-screen bg-grey-100'>
      <CreateContentModal open={openModal} onclose={() => {
        setOpenModal(false);
      }} />

      <div className='flex justify-end gap-4'>
        <Button onClick={() => {
          setOpenModal(true)
        }} variants='primary' text='Add Content' startIcon={<PlusIcon />} />
        <Button variants='secondary' text='Share Brain' startIcon={<ShareIcon />} />

      </div>

    <div className='flex gap-4'>


      <Card />
    </div>


    </div>
  </div>
  
}

export default Dashboard
