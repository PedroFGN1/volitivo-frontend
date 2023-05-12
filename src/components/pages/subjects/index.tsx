import { Filter } from "@/components/interface/filter";
import { Table } from "@/components/interface/table";

const lists = [
  {id: 1, name:"Raciocínio Lógico", questions: 678, comments: 46 },
  {id: 1, name:"História do Brasil", questions: 345, comments: 18 },
]

export const Subjects = () => {
  return(
    <>
      <Filter />
      <Table lists={lists}/>
    </>
  )
}