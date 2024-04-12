"use client";

import { useState } from "react";
import toast,{Toaster} from "react-hot-toast";

const Contact = () => {

    const [form,setForm]=useState({
        name:"",
        email:"",
        message:""
    });

    const handleSubmit=()=>{
        console.log(form);
        if(form){
            toast.success("Message Delivered");
        }
        setForm({
            name:"",
            email:"",
            message:""
        })
    }

  return (
    <>
        <Toaster />
      <div className="p-4 ">
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="text-3xl font-semibold  uppercase">Contact</div>
          <div className="border-t-4 rounded-full border-amber-700 w-10 " />
          <div className="font-medium text-slate-500">
            You can contact me by submitting the form below.
          </div>
        </div>
        <form
            onSubmit={(e)=>e.preventDefault()}
            className="border border-slate-50 rounded-md shadow-lg p-8"
        >
            <div className="flex flex-col gap-1 py-2">
                <label htmlFor="name" className="text-slate-600 font-medium">Name</label>
                <input 
                    id="name"
                    placeholder="Enter your name"
                    className=" p-2 bg-slate-200 rounded-md  focus:outline-none placeholder:text-slate-500 placeholder:italic "
                    value={form.name}
                    onChange={(e)=>setForm({...form,name:e.target.value})}
                    required
                />
            </div>
            <div className="flex flex-col gap-1 py-2">
                <label htmlFor="email" className="text-slate-600 font-medium">Email</label>
                <input 
                    id="email"
                    type="email"
                    placeholder="Enter your email id"
                    className=" p-2 bg-slate-200 rounded-md focus:outline-none placeholder:text-slate-500 placeholder:italic "
                    value={form.email}
                    onChange={(e)=>setForm({...form,email:e.target.value})}
                    required
                />
            </div>
            <div className="flex flex-col gap-1 py-2">
                <label htmlFor="message" className="text-slate-600 font-medium">Message</label>
                <textarea 
                    id="message"
                    type="text"
                    rows="8"
                    placeholder="Enter your message"
                    className=" p-2 bg-slate-200 rounded-md focus:outline-none placeholder:text-slate-500 placeholder:italic "
                    value={form.message}
                    onChange={(e)=>setForm({...form,message:e.target.value})}
                    required
                />
            </div>
            <div className="flex justify-end py-2">
                <button onClick={()=>handleSubmit()} className=" border border-black shadow-md hover:border-slate-50 hover:bg-amber-700 hover:text-white  font-semibold px-8 py-2 rounded-md uppercase">Submit</button>
            </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
