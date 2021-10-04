/* eslint-disable react/prop-types */
import { Toaster } from 'react-hot-toast'

const ToastMessage = ({ positionToast }) => {
  return (
    <div>
      <Toaster
        position='top-center'
        containerStyle={{ marginLeft: { positionToast } }}
      />
    </div>
  )
}

export default ToastMessage
