import React, {useState} from 'react'
import Button from './Button'


const Table = ({tableRows, tableRows2, defaultDay, tableHeading, defaultItems}) => {


    const [nextItems, setNextItems] = useState(defaultItems)

    const handleMoreData = () => {
        setNextItems(tableRows.length);
    }

    const handleLessData = () => {
        setNextItems(defaultItems)
    }

  return (
      <>
          <table className="table  w-5/6 ">
              <thead >
                  <tr className='hidden bg-maincolor *:font-gillRoy700 *:text-white *:text-2xl  gap-12 mb-3 *:py-3  w-full justify-around text-left border border-transparent rounded-20 largeTab:flex'>
                      {
                          tableHeading.map((element, key) => (
                              <th key={key} className={`px-0 ${key === 0 ? 'min-w-0 max-w-0 w-fit' : 'min-w-36 max-w-36 w-full'} ${key === 1 ? 'pl-3' : 'pl-0'}`}>{element}</th>
                          ))
                      }
                  </tr>
              </thead>
              <tbody className='flex flex-col gap-3'>
                  {
                      (defaultDay === 0 ? tableRows : tableRows2)?.slice(0, nextItems)?.map((element, key) => {
                          return (
                              <tr className='bg-tablebg py-0 px-0  gap-0  *:py-3 items-center w-full flex justify-around border border-transparent rounded-20' key={key}>
                                  <td className=' px-0  block h-auto items-center'>{key + 1}</td>
                                  <td className='min-w-36 max-w-36 w-full text-tabletext font-gillRoy500 text-sm px-0 '>{element.topic}</td>
                                  <td className='min-w-36 max-w-36 w-full text-maincolor font-gillRoy600 text-xl px-0'>{element.speaker}</td>
                                  <td className='min-w-36 max-w-36 w-full  text-tabletext font-gillRoy500 text-sm px-0 pl-2'>{element.company}</td>
                                  <td className='min-w-36 max-w-36 w-full  text-tabletext font-gillRoy500 text-sm text-centerm px-0'>{element.time}</td>
                              </tr>
                          );
                      })}

              </tbody>
          </table>

          {nextItems === defaultItems ?
              <div className='w-5/6'>

                  <Button className="capitalize bg-maincolor text-white font-gillRoy700 rounded-30 py-3 px-6 text-base float-right mt-8 hover:text-buttonhover" onClick={handleMoreData}>load more</Button>
              </div> :
              <div className='w-5/6'>
                  <Button className="capitalize bg-maincolor text-white font-gillRoy700 rounded-30 py-3 px-6 text-base float-right mt-8 hover:text-buttonhover" onClick={handleLessData}>show less</Button></div>
          }
      </>
  )
}

export default Table
