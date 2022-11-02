import {motion, transform} from 'framer-motion'
import React, {useState, useEffect} from 'react'

export default function LanguageSpindle(){
    const spindleTime = 3000;
    const [spindleCount, setSpindleCount] = useState(0)

    const [items, setItems] = useState([
        {
            id: 'python',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg',
            layout: true
        },
        {
            id: 'css',
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
            layout: true
        },
        {
            id: 'html',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg',
            layout: true
        },
        {
            id: 'react',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            layout: true
        },
        {
            id: 'js',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
            layout: true
        },
    ])

    function spinSpindle(){
        let newItems = [...items]

        const itmToMove = {...newItems[0]};
        const nextToMove = {...newItems[1]};

        newItems.splice(0, 1)
        itmToMove.layout = true;
        newItems.push(itmToMove)

        nextToMove.layout = false;
        newItems.splice(0, 1, nextToMove)

        setItems(newItems)
    }


    useEffect(() => {
        const interval = setInterval(() => {
          setSpindleCount( (prev) => prev+1 )
        }, spindleTime);
      
        return () => clearInterval(interval);
      }, []);

    useEffect(() => {
        spinSpindle()
    }, [spindleCount]);

    return(
        <div className='spindle-container'>
            <h2 className='spindle-title'>LANGUAGES</h2>

            <motion.div className='lang-item-container'>
                {items.map( (item, itemIndex) => {
                    if(itemIndex === 2){
                        return <motion.img layout={item.layout} key={item.id} src={item.src} className='lang-item mid'></motion.img>
                    } else {
                        return <motion.img layout={item.layout} transition={{layout: {duration:0.2}}}key={item.id} src={item.src} className='lang-item'></motion.img>
                    }
                })}
            </motion.div>
        </div>
    )
}