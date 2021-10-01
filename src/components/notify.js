import { toast } from 'react-hot-toast'

const Modify = 'Votre modification a été bien effectuée'
const MailSended = 'Un mail vient de vous être envoyé.'
const notify = key => {
  switch (key) {
    case 0:
      return toast.success(Modify)
    case 1:
      return toast.success(MailSended)
    default:
      return toast.success('Hello')
  }
}

export default notify
