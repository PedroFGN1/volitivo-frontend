'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

import { cn } from '@/lib/utils'

export const Filter = () => {
  const searchParams = useSearchParams()
  const search = searchParams?.get('search')

  const FilterAlphabet = [
    { name: 'A', current: search === 'A' },
    { name: 'B', current: search === 'B' },
    { name: 'C', current: search === 'C' },
    { name: 'D', current: search === 'D' },
    { name: 'E', current: search === 'E' },
    { name: 'F', current: search === 'F' },
    { name: 'G', current: search === 'G' },
    { name: 'H', current: search === 'H' },
    { name: 'I', current: search === 'I' },
    { name: 'J', current: search === 'J' },
    { name: 'K', current: search === 'K' },
    { name: 'L', current: search === 'L' },
    { name: 'M', current: search === 'M' },
    { name: 'N', current: search === 'N' },
    { name: 'O', current: search === 'O' },
    { name: 'P', current: search === 'P' },
    { name: 'Q', current: search === 'Q' },
    { name: 'R', current: search === 'R' },
    { name: 'S', current: search === 'S' },
    { name: 'T', current: search === 'T' },
    { name: 'U', current: search === 'U' },
    { name: 'V', current: search === 'V' },
    { name: 'W', current: search === 'W' },
    { name: 'X', current: search === 'X' },
    { name: 'Y', current: search === 'Y' },
    { name: 'Z', current: search === 'Z' },
    { name: 'Todos', current: search === null || search === 'Todos' }
  ]

  return (
    <div className="my-5">
      <Accordion type="single" collapsible>
        <AccordionItem value="filter">
          <AccordionTrigger>
            <h2 className="text-lg">Filtros</h2>
          </AccordionTrigger>
          <AccordionContent>
            <div>
              <div className="mb-5 flex justify-end">
                <div className="grid grid-cols-2 justify-items-center gap-3 sm:justify-items-end">
                  <div className="max-w-[180px]">
                    <Input
                      type="text"
                      id="name"
                      placeholder="Digite a disciplina"
                    />
                  </div>
                  <div>
                    <Select>
                      <SelectTrigger className="max-w-[180px]">
                        <SelectValue placeholder="Área de formação" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Português</SelectItem>
                        <SelectItem value="dark">Matemática</SelectItem>
                        <SelectItem value="system">Química</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <ul className="flex w-full flex-wrap justify-center">
                {FilterAlphabet.map((item) => (
                  <li key={item.name} className="inline-block">
                    <Link
                      href={`/discipline?search=${item.name}`}
                      className={cn(
                        item.current
                          ? 'bg-slate-100 text-slate-900'
                          : 'text-slate-500 hover:bg-slate-100 hover:text-slate-700',
                        'inline-flex items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium'
                      )}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
