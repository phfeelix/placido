'use client'

import { questions } from '@/constants/countries'
import React, { useState } from 'react'

const Faq = () => {
  const [opened, setOpened] = useState<number | undefined>()

  return (
    <div className="max-w-[85rem] px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14 mx-auto mt-14">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Suas perguntas, respondidas
        </h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">
          Respostas às perguntas mais frequentes.
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        {questions.map((question, index) => {
          const isOpen = opened === index

          return (
            <FaqItem
              key={index}
              question={question}
              isOpen={isOpen}
              onClick={() => setOpened(isOpen ? undefined : index)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Faq

interface FaqItemProps {
  question: { title: string; description: string }
  isOpen: boolean
  onClick: () => void
}

const FaqItem = ({ question, isOpen, onClick }: FaqItemProps) => {
  return (
    <div
      className={`rounded-xl p-6 transition-colors ${
        isOpen ? 'bg-neutral-100 shadow-sm' : 'bg-white hover:bg-neutral-50'
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-x-3 text-start"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-gray-800">{question.title}</span>
        <svg
          className={`shrink-0 size-5 text-gray-600 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="overflow-hidden">
          <p className="mt-4 text-gray-600">{question.description}</p>
        </div>
      </div>
    </div>
  )
}