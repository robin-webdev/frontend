import React from 'react'

const Axios = () => {

    async function getData(){
        const data = await Axios.get("")
    }
  return (
    <div>Axios</div>
  )
}

export default Axios