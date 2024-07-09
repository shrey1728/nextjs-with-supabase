'use client'

import { createClient } from '@/utils/supabase/client'
import { useEffect, useState } from 'react'

export default function Page() {
  const [notes, setNotes] = useState<any[] | null>(null)
  const supabase = createClient()

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from('notes').select()
      setNotes(data)
    }
    getData()
  }, [])

  return (
    <div className="p-4 sm:p-6 xl:p-9">
     <div className="min-w-[370px] max-w-max rounded-md border border-stroke py-1 dark:border-strokedark">
       <ul className="flex flex-col">
       {notes?.map(note => (
               <li className="flex items-center gap-2.5 border-b border-stroke px-5 py-3 last:border-b-0 dark:border-strokedark">
                 <span> {note.title} </span>
               </li>)
       )}
       </ul>
     </div>
   </div>
  ) 
}