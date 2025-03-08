import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

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

  const handleSubmit = hookFormHandleSubmit((data) => {
    console.log(data)
  })

  return {
    handleSubmit,
    register,
    errors
  }
}