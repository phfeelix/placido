'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useForm, SubmitHandler } from 'react-hook-form'
import React from 'react'

interface FormData {
  name: string
  phone: string
  email: string
  company: string
  description: string
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (data: unknown) => {
    console.log(data) // Aqui você pode enviar os dados para o backend
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6 w-full'>
      <div className='flex flex-col gap-4'>
        {/* Nome */}
        <div className='flex flex-col gap-2'>
          <Label className='text-base font-semibold'>Nome</Label>
          <Input
            className='w-full'
            {...register('name', { required: 'Este campo é obrigatório' })}
          />
          {errors.name && (
            <span className='text-sm text-red-500'>{errors.name.message}</span>
          )}
        </div>

        {/* Telefone */}
        <div className='flex flex-col gap-2'>
          <Label className='text-base font-semibold'>Telefone</Label>
          <Input
            className='w-full'
            {...register('phone', { required: 'Este campo é obrigatório' })}
          />
          {errors.phone && (
            <span className='text-sm text-red-500'>{errors.phone.message}</span>
          )}
        </div>

        {/* E-mail */}
        <div className='flex flex-col gap-2'>
          <Label className='text-base font-semibold'>E-mail</Label>
          <Input
            className='w-full'
            {...register('email', {
              required: 'Este campo é obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'E-mail inválido',
              },
            })}
          />
          {errors.email && (
            <span className='text-sm text-red-500'>{errors.email.message}</span>
          )}
        </div>

        {/* Empresa */}
        <div className='flex flex-col gap-2'>
          <Label className='text-base font-semibold'>Website ou nome da empresa</Label>
          <Input
            className='w-full'
            {...register('company', { required: 'Este campo é obrigatório' })}
          />
          {errors.company && (
            <span className='text-sm text-red-500'>{errors.company.message}</span>
          )}
        </div>

        {/* Descrição */}
        <div className='flex flex-col gap-2'>
          <Label className='text-base font-semibold'>Descrição</Label>
          <Textarea
            className='w-full'
            {...register('description', { required: 'Este campo é obrigatório' })}
          />
          {errors.description && (
            <span className='text-sm text-red-500'>{errors.description.message}</span>
          )}
        </div>
      </div>

      {/* Botão de Envio */}
      <div className='w-full'>
        <Button
          type='submit'
          className='w-full py-6 text-base font-semibold hover:bg-primary-700 transition-colors'
        >
          Enviar
        </Button>
      </div>
    </form>
  )
}

export default ContactForm