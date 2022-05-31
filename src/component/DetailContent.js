import Icon from "./Icon";
import IconButton from "./IconButton";
import "../styles/Content.scss";
import Image from "./Image";
import { useState } from "react";

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

const location = [
  'Warehouse 1',
  'Warehouse 2',
  'Warehouse 3',
  'Warehouse 4',
  'Warehouse 5',
].map((i, index) => {
  return {
    id: index,
    name: i,
    addr: "Address " + String(index),
  }
})

function DetailContent({ onSidebarHide }) {
  const [toggle, setToggle] = useState(1);
  return (
    <div className="flex w-full">
        <div className="w-full h-screen hidden sm:block sm:w-20 xl:w-60 flex-shrink-0">
          .
        </div>
        <div className=" h-screen flex-grow overflow-x-hidden overflow-auto flex flex-wrap content-start p-2">
          <div className="w-full sm:flex p-2 items-end">
            <div className="sm:flex-grow flex justify-between">
              <div className="">
                <div className="flex items-center">
                  <div className="text-3xl font-bold text-white">Hello Suong</div>
                  <div className="flex items-center p-2 bg-card ml-2 rounded-xl">
                    <Icon path="res-react-dash-premium-star" />
  
                    <div className="ml-2 font-bold text-premium-yellow">
                      PREMIUM
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon
                    path="res-react-dash-date-indicator"
                    className="w-3 h-3"
                  />
                  <div className="ml-2">May 4</div>
                </div>
              </div>
              <IconButton
                icon="https://assets.codepen.io/3685267/res-react-dash-sidebar-open.svg"
                className="block sm:hidden"
                onClick={onSidebarHide}
              />
            </div>
            <div className="w-full sm:w-56 mt-4 sm:mt-0 relative">
              <Icon
                path="res-react-dash-search"
                className="w-5 h-5 search-icon left-3 absolute"
              />
              <form action="#" method="POST">
                <input
                  type="text"
                  name="company_website"
                  id="company_website"
                  className="pl-12 py-2 pr-2 block w-full rounded-lg border-white-300 bg-card"
                  placeholder="search"
                />
              </form>
            </div>
          </div>
          <div class="w-full border-gray-200 dark:border-gray-800 border-b overflow-y-auto lg:block hidden p-5">
            <div class="text-xs text-gray-400 tracking-wider">WAREHOUSES</div>
            <div class="flex flex-row space-x-4 mt-3">
              {location.map(({id, name, addr}) => (
              <button class={toggle === id+1 ? "rounded-lg bg-card p-3 w-full flex flex-col rounded-md shadow-lg relative ring-2 ring-blue-500 focus:outline-none" : "rounded-lg bg-card p-3 w-full flex flex-col rounded-md shadow"} onClick={() => setToggle(id+1)}>
                <div class="flex xl:flex-row flex-col items-center font-medium text-white-900 pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
                <IconButton icon="https://svgshare.com/i/gj6.svg" className="w-8 h-8 mr-5" />
                  {name}
                </div>
                <div class="flex items-center w-full">
                  <div class="text-xs py-1 px-2 leading-none bg-yellow-100 text-yellow-600 rounded-md">Address</div>
                  <div class="ml-auto text-xs text-gray-400">{addr}</div>
                </div>
              </button>
              ))}
              <div className="h-23">
              <AddWH/>
              </div>
            </div>
          </div>
          <div className="content-tabs">
            <div className={toggle === 1 ? "content active-content" : "content"}>
              <DetailLocation/>
            </div>
    
            <div
              className={toggle === 2 ? "content active-content" : "content"}
            >
              <DetailLocation/>
            </div>

            <div
              className={toggle === 3 ? "content active-content" : "content"}
            >
              <DetailLocation/>
            </div>

            <div
              className={toggle === 4 ? "content active-content" : "content"}
            >
              <DetailLocation/>
            </div>

            <div
              className={toggle === 5 ? "content active-content" : "content"}
            >
              <DetailLocation/>
            </div>
          </div>
    </div>
    </div>
  )
}

export default DetailContent;

function AddWH() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="lg:w-16 flex-shrink-0 h-full flex justify-center pt-4"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-plus-circle-fill hover:fill-[#4895ef] animate-bounce rounded-full" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
        </svg>
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-full max-w-md">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <div className="flex">
                  <h3 class="grow mb-4 text-xl font-medium text-gray-900 dark:text-white">Add a Warehouse</h3>
                  <button
                    className="grow-0 w-6 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent h-6 w-6 text-2xl block">
                      x
                    </span>
                  </button>
                  </div>
                  <form class="space-y-6" action="#">
                      <div>
                          <label for="houseName" class="block mb-2 text-sm font-medium text-gray-900">Name</label>
                          <input type="houseName" name="houseName" id="houseName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Warehouse 1" required/>
                      </div>
                      <div>
                          <label for="addr" class="block mb-2 text-sm font-medium text-gray-900">Address</label>
                          <input type="addr" name="addr" id="addr" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                      </div>
                      <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

function DetailLocation() {
  const [data, setData] = useState(detailData);
  const handleDelete = (index,e) => {
      setData(data.filter((v, i) => i !== index));
  }
  const rows = data.map((item, index) => {
    return (
        <tr key={index}>
          <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
            <div class="flex items-center">{item.id}</div>
          </td>
          <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
            <div class="flex items-center">
              {item.name}
            </div>
          </td>
          <td class="sm:p-3 py-2 px-1 border-b border-gray-200 md:table-cell hidden">
            <div class="flex items-center">
              {item.type === "Light" ? <Image path={`https://svgshare.com/i/hj5.svg`} className="w-4 h-4 mr-2.5"/> : item.type === "Cooler" ? <Image path={`https://svgshare.com/i/hoA.svg`} className="w-4 h-4 mr-2.5"/>: <Image path={`https://svgshare.com/i/hnH.svg`} className="w-4 h-4 mr-2.5"/>}
              {item.type}
            </div>
          </td>
          {item.state ? <td class="sm:p-3 py-2 px-1 border-b border-gray-200 text-green-600">On</td> : <td class="sm:p-3 py-2 px-1 border-b border-gray-200 text-red-600">Off</td>}
          <td class="sm:p-3 py-2 px-1 border-b border-gray-200 md:table-cell hidden">
            <div class="flex items-center">
              {item.fInfo}
            </div>
          </td>
          <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
            <div class="flex items-center">
              <div class="sm:flex hidden flex-col">
                {item.date}
                <div class="text-gray-400 text-xs">{item.time}</div>
              </div>
              {/* <button class="w-4 h-4 inline-flex items-center justify-center text-gray-400 ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
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
              <button class="w-4 h-4 inline-flex items-center justify-center text-gray-400 ml-10" onClick={e => handleDelete(index,e)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
              </button>
            </div>
          </td>
        </tr>
  )})
  return (
    <div className="w-full p-2">
        <div className="rounded-lg bg-card p-5">
        <table class="w-full text-left">
          <thead>
            <tr class="text-white">
              <th class="font-normal px-3 border-b border-gray-200">ID</th>
              <th class="font-normal px-3 border-b border-gray-200">Name</th>
              <th class="font-normal px-3 border-b border-gray-200 hidden md:table-cell">Type</th>
              <th class="font-normal px-3 border-b border-gray-200">State</th>
              <th class="font-normal px-3 border-b border-gray-200 hidden md:table-cell">Further Info</th>
              <tr class="flex border-b border-gray-200">
                <th className="grow font-normal px-3 pt-3 pb-3">Date</th>
                <th className="grow-0 mb-2"><AddE/></th>
              </tr>
            </tr>
          </thead>
          <tbody class="text-white">
            {rows}
          </tbody>
        </table>
        </div>
      </div>
  );
};

function AddE() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="w-full flex-shrink-0 text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add an Equipment
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-full max-w-md">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <div className="flex">
                  <h3 class="grow mb-4 text-xl font-medium text-gray-900 dark:text-white">Add a Warehouse</h3>
                  <button
                    className="grow-0 w-6 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent h-6 w-6 text-2xl block">
                      x
                    </span>
                  </button>
                  </div>
                  <form class="space-y-6" action="#">
                      <div>
                          <label for="EName" class="block mb-2 text-sm font-medium text-gray-900">Name</label>
                          <input type="EName" name="EName" id="EName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Equip 1" required/>
                      </div>
                      <div>
                        <label for="typ" class="block mb-2 text-sm font-medium text-gray-900">Type</label>
                        <div class="relative">
                          <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="typ">
                            <option>Light</option>
                            <option>Cooler</option>
                            <option>Door</option>
                          </select>
                          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label for="state" class="block mb-2 text-sm font-medium text-gray-900">State</label>
                        <div class="relative">
                          <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="state">
                            <option>On</option>
                            <option>Off</option>
                          </select>
                          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                          </div>
                        </div>
                      </div>
                      <div>
                          <label for="loca" class="block mb-2 text-sm font-medium text-gray-900">Location At</label>
                          <div class="relative">
                            <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="loca">
                              <option>Warehouse 1</option>
                              <option>Warehouse 2</option>
                              <option>Warehouse 3</option>
                              <option>Warehouse 4</option>
                              <option>Warehouse 5</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                          </div>
                        </div>
                      <div>
                          <label for="furInfo" class="block mb-2 text-sm font-medium text-gray-900">Further Info</label>
                          <input type="furInfo" name="furInfo" id="furInfo" placeholder="20" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                      </div>
                      <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

function EditE({id, name, type, state, location, fInfo}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
    <button class="w-4 h-4 inline-flex items-center justify-center text-gray-400 ml-auto"
    type="button"
    onClick={() => setShowModal(true)}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
      </svg>
    </button>
    {showModal ? (
      <>
        <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-full max-w-md">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <div className="flex">
                <h3 class="grow mb-4 text-xl font-medium text-gray-900 dark:text-white">Add a Warehouse</h3>
                <button
                  className="grow-0 w-6 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold"
                  onClick={() => setShowModal(false)}
                >
                  <span className="bg-transparent h-6 w-6 text-2xl block">
                    x
                  </span>
                </button>
                </div>
                <form class="space-y-6" action="#">
                    <div>
                        <label for="EName" class="block mb-2 text-sm font-medium text-gray-900">Name</label>
                        <input type="EName" name="EName" id="EName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder={name}/>
                    </div>
                    <div>
                      <label for="typ" class="block mb-2 text-sm font-medium text-gray-900">Type</label>
                      <div class="relative">
                        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="typ">
                          <option selected>{type}</option>
                          <option>Light</option>
                          <option>Cooler</option>
                          <option>Door</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label for="state" class="block mb-2 text-sm font-medium text-gray-900">State</label>
                      <div class="relative">
                        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="state">
                          <option selected>{state ? "On" : "Off"}</option>
                          <option>On</option>
                          <option>Off</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                      </div>
                    </div>
                    <div>
                        <label for="loca" class="block mb-2 text-sm font-medium text-gray-900">Location At</label>
                        <div class="relative">
                          <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="loca">
                            <option selected>{location}</option>
                            <option>Warehouse 1</option>
                            <option>Warehouse 2</option>
                            <option>Warehouse 3</option>
                            <option>Warehouse 4</option>
                            <option>Warehouse 5</option>
                          </select>
                          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                          </div>
                        </div>
                      </div>
                    <div>
                        <label for="furInfo" class="block mb-2 text-sm font-medium text-gray-900">Further Info</label>
                        <input type="furInfo" name="furInfo" id="furInfo" placeholder={fInfo} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"/>
                    </div>
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    ) : null}
    </>
  )
}