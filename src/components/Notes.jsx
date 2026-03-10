import React, { useState } from "react";

const Notes = () => {
  const [task, setTask] = useState([]);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, detail });
    setTask(copyTask);
    console.log(task);
    setTitle("");
    setDetail("");
  };

  const deleteHandler = (idx) => {
    let copyTask = task.filter((item,i)=>{
      return i !== idx;
    });
    setTask(copyTask);
  };





  return (
    <div className="bg-black h-screen text-white flex justify-between p-10">
      <div className="w-1/2">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col gap-10"
        >
          <h1 className="text-5xl font-bold">Add Notes</h1>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the Title"
            className="border-2 p-5 flex items-center justify-center outline-none"
          />
          <textarea
            placeholder="Write down the note"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            className="border-2 h-50 outline-none p-2"
          ></textarea>
          <button className="cursor-pointer active:scale-95 border-2 bg-white text-2xl font-bold text-black rounded-2xl p-2">
            Add Note
          </button>
        </form>
      </div>
      <div className="gap-10 w-1/2 ml-10 overflow-auto ">
        <h1 className="text-5xl font-bold flex items-center justify-center mb-10">
          Your Notes
        </h1>
        <div className="flex gap-5 flex-wrap">
          {task.map((items, idx) => (
            <div
              key={idx}
              className="h-62 w-42 bg-cover bg-[url('https://pngimg.com/uploads/sticky_note/sticky_note_PNG18928.png')] text-black flex flex-col justify-between rounded-2xl"
            >
              <div>
                <h2 className="m-5 text-2xl font-bold border-b-2 py-2">{items.title}</h2>
                <p className="m-5 font-black font-bold">{items.detail}</p>
              </div>
              <div>
                <button onClick={()=>{
                  deleteHandler(idx)
                }} className="bg-red-500 rounded-2xl cursor-pointer active:scale-90 text-white p-2 mx-12 my-3">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notes;
