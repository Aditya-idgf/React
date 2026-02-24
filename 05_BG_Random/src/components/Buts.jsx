import React from 'react'

function Buts({bgcol}) {
  return (
    <button className={`h-10 w-20 my-4 mx-5 rounded-lg outline-0 ${bgcol}`} onClick={()=>{setbgcolor(bgcol)}}>

    </button>
  )
}

export default Buts
