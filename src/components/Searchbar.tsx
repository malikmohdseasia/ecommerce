import { SearchIco } from "../assets/Icons"

const Searchbar = ({setSearchShow}:any) => {
  return (
    <div className="rounded-full border border-footer flex items-center px-3 lg:mx-2 lg:w-40 xl:w-50">
      <input type="search" name="" id="" className="outline-none w-full " />
     <button onClick={()=>setSearchShow(false)}
      className="cursor-pointer"
      > {SearchIco}</button>
    </div>
  )
}

export default Searchbar
