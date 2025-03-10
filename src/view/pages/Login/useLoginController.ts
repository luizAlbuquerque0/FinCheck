import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { httpClient } from '../../../app/services/HttpClient'
import { useMutation } from '@tanstack/react-query'
import { signInParams } from '../../../app/services/AuthServices/SignIn'
import { AuthServices } from '../../../app/services/AuthServices'
import toast from 'react-hot-toast'

const schema = z.object({
  email: z.string().nonempty('E-mail é obrigatorio').email('informe um e-mail válido'),
  password: z.string().nonempty('Senha é obrigatória').min(8, 'Senha deve conter pelo menos 8 digitos')
})

type formData = z.infer<typeof schema>

export function useLoginController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors }
  } = useForm<formData>({
    resolver: zodResolver(schema)
  })

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: signInParams) => {
      return AuthServices.signIn(data)
    },
  })

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      await mutateAsync(data)
    } catch {
      toast.error('Erro ao logar')
    }
  })

  return {
    handleSubmit,
    register,
    errors,
    isPending
  }
}