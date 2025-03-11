import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AuthServices } from "../../../app/services/AuthServices";
import { useMutation } from "@tanstack/react-query";
import { signupParams } from "../../../app/services/AuthServices/SignUp";
import { toast } from "react-hot-toast";
import { useAuth } from "../../../app/hooks/useAuth";

const schema = z.object({
  name: z.string().nonempty('Nome é obrigatorio'),
  email: z.string().nonempty('E-mail é obrigatorio').email('informe um e-mail válido'),
  password: z.string().nonempty('Senha é obrigatória').min(8, 'Senha deve conter pelo menos 8 digitos')
})

type formData = z.infer<typeof schema>

export function useRegisterController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors }
  } = useForm<formData>({
    resolver: zodResolver(schema)
  })

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: signupParams) => {
      return AuthServices.signup(data)
    },
  })
  const { signIn } = useAuth()

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data)
      signIn(accessToken);
    } catch {
      toast.error('Erro ao cadastrar usuário')
    }
  });

  return {
    handleSubmit,
    register,
    errors,
    isPending
  }
}