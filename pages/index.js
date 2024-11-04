import React, { useEffect, useState, useContext} from 'react'

//internal import
import { ChatAppContext } from "../Context/ChatAppContext";
const index = () => {
  const {} = useContext(ChatAppContext);
  return (
    <div>hey</div>
  )
}

export default index