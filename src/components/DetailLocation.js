import { useState } from 'react';
import Image from './Image';
import EditE from './EditE';
import AddE from './AddE';


const detailData = [
  {
    id: 1,
    name: "Light LED 20W",
    type: "Light",
    location: "Warehouse 1",
    state: true,
    fInfo: "",
    date: "24.12.2020",
    time: "11:16 AM"
  },

  {
    id: 2,
    name: "Italy LUVE Unit Cooler",
    type: "Cooler",
    location: "Warehouse 2",
    state: false,
    fInfo: "Temp: 20",
    date: "24.05.2020",
    time: "8:20 PM"
  },

  {
    id: 3,
    name: "Insulated Panel Door",
    type: "Door",
    location: "Warehouse 1",
    state: true,
    fInfo: "",
    date: "24.05.2019",
    time: "8:00 AM"
  },

  {
    id: 4,
    name: "Light LED 20W",
    type: "Light",
    location: "Warehouse 3",
    state: true,
    fInfo: "",
    date: "24.12.2020",
    time: "11:16 AM"
  },

  {
    id: 5,
    name: "Italy LUVE Unit Cooler",
    type: "Cooler",
    location: "Warehouse 5",
    state: false,
    fInfo: "Temp: 25",
    date: "24.05.2020",
    time: "8:20 PM"
  },

  {
    id: 6,
    name: "Insulated Panel Door",
    type: "Door",
    location: "Warehouse 1",
    state: true,
    fInfo: "",
    date: "24.05.2019",
    time: "8:00 AM"
  },

  {
    id: 7,
    name: "Light LED 20W",
    type: "Light",
    location: "Warehouse 4",
    state: true,
    fInfo: "",
    date: "24.12.2020",
    time: "11:16 AM"
  },

  {
    id: 8,
    name: "Italy LUVE Unit Cooler",
    type: "Cooler",
    location: "Warehouse 2",
    state: false,
    fInfo: "Temp: 27",
    date: "24.05.2020",
    time: "8:20 PM"
  },

  {
    id: 9,
    name: "Insulated Panel Door",
    type: "Door",
    location: "Warehouse 5",
    state: true,
    fInfo: "",
    date: "24.05.2019",
    time: "8:00 AM"
  }
];

export default function DetailLocation() {
  const [data, setData] = useState(detailData);
  const handleDelete = (index,e) => {
      setData(data.filter((v, i) => i !== index));
  }
  const rows = data.map((item, index) => {
    return (
        <tr key={index}>
          <td className="sm:p-3 py-2 px-1 border-b border-gray-200">
            <div className="flex items-center">{item.id}</div>
          </td>
          <td className="sm:p-3 py-2 px-1 border-b border-gray-200">
            <div className="flex items-center">
              {item.name}
            </div>
          </td>
          <td className="sm:p-3 py-2 px-1 border-b border-gray-200 md:table-cell hidden">
            <div className="flex items-center">
              {item.type === "Light" ? <Image path={`https://svgshare.com/i/hj5.svg`} className="w-4 h-4 mr-2.5"/> : item.type === "Cooler" ? <Image path={`https://svgshare.com/i/hoA.svg`} className="w-4 h-4 mr-2.5"/>: <Image path={`https://svgshare.com/i/hnH.svg`} className="w-4 h-4 mr-2.5"/>}
              {item.type}
            </div>
          </td>
          {item.state ? <td className="sm:p-3 py-2 px-1 border-b border-gray-200 text-green-600">On</td> : <td className="sm:p-3 py-2 px-1 border-b border-gray-200 text-red-600">Off</td>}
          <td className="sm:p-3 py-2 px-1 border-b border-gray-200 md:table-cell hidden">
            <div className="flex items-center">
              {item.fInfo}
            </div>
          </td>
          <td className="sm:p-3 py-2 px-1 border-b border-gray-200">
            <div className="flex items-center">
              <div className="sm:flex hidden flex-col">
                {item.date}
                <div className="text-gray-400 text-xs">{item.time}</div>
              </div>
              {/* <button className="w-4 h-4 inline-flex items-center justify-center text-gray-400 ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                </svg>
              </button> */}
              <EditE
                id={item.id}
                name={item.name}
                type={item.type}
                state={item.state}
                location={item.location}
                fInfo={item.fInfo}
              />
              <button className="w-4 h-4 inline-flex items-center justify-center text-gray-400 ml-10" onClick={e => handleDelete(index,e)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                  <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
              </button>
            </div>
          </td>
        </tr>
  )})
  return (
    <div className="w-full p-2">
        <div className="rounded-lg bg-card p-5">
        <table className="w-full text-left">
          <thead>
            <tr className="text-white">
              <th className="font-normal px-3 border-b border-gray-200">ID</th>
              <th className="font-normal px-3 border-b border-gray-200">Name</th>
              <th className="font-normal px-3 border-b border-gray-200 hidden md:table-cell">Type</th>
              <th className="font-normal px-3 border-b border-gray-200">State</th>
              <th className="font-normal px-3 border-b border-gray-200 hidden md:table-cell">Further Info</th>
              <tr className="flex border-b border-gray-200">
                <th className="grow font-normal px-3 pt-3 pb-3">Date</th>
                <th className="grow-0 mb-2"><AddE/></th>
              </tr>
            </tr>
          </thead>
          <tbody className="text-white">
            {rows}
          </tbody>
        </table>
        </div>
      </div>
  );
};