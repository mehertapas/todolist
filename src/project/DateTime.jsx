import React, { useEffect, useState } from 'react'

const DateTime = () => {
    const [dateTime, setDateTime] = useState("");

    useEffect(() => {
        const datTimeFormate = setInterval(() => {
          const now = new Date();
          const date = now.toLocaleDateString();
          const time = now.toLocaleTimeString();
          setDateTime(`${date}-${time}`);
        }, 1000);
    
        return () => {
          clearInterval(datTimeFormate);
        };
      }, []);

    
  return (
<h1 className="text-lg  text-white">{dateTime}</h1>
  )
}

export default DateTime
