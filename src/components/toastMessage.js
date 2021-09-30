import { Toaster } from 'react-hot-toast'

const ToastMessage = () => {
  return (
    <div>
      <Toaster
        position='top-center'
        containerStyle={{ marginLeft: 'calc(1px + 15vw)' }}
      />
    </div>
  )
}

export default ToastMessage
