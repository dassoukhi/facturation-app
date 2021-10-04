import { toast } from 'react-hot-toast'

const Modify = 'Votre modification a été bien effectuée'
const MailSended = 'Un mail vient de vous être envoyé.'
const passwordChange = 'Votre mot de passe a été bien changé.'
const notify = key => {
  switch (key) {
    case 0:
      return toast.success(Modify)
    case 1:
      return toast.success(MailSended)
    case 2:
      return toast.success(passwordChange)
    default:
      return toast.success('Hello')
  }
}

export default notify
