'use client'

import { Checkbox } from "@/components/ui/checkbox"
// import { Calendar } from "@/components/ui/calendar"
import { useRouter } from "next/navigation"
import {useState, useRef} from 'react'
import { createWorker } from "tesseract.js/src"
import { CircleX } from "lucide-react"
import { useToast } from "@hooks/use-toast"
import { Progress } from "@/components/ui/progress"



function Create(
    {
        type,
        post,
        setPost,
        submitting,
        handleSubmitting,
        isChecked,
        setChecked
    }
){
    const { toast } = useToast()
    const fileInputRef = useRef(null)
    const [fileName, setFileName] = useState()

    const router = useRouter()

    const [image, setImage] = useState(null);
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    /*
    

    const handleFileChange = async (e) => {
        const file = e.target.files[0];

        if(!file) return

        

        const worker = await createWorker();

        try {
            setLoading(true);
            console.log('this loads')
            const worker = await createWorker();
            await worker.reinitialize("eng");
            console.log('pass')
            const { data } = await worker.recognize(file);
            console.log(data.text)
            console.log('pass')
            setFileName(file.name)
            setText(data.text);
            await worker.terminate()
        } catch (error) {
            console.error("OCR Error:", error);
        }
        
        setLoading(false)
      };
    */

/*     
  const extractText = async () => {
    setLoading(true);
    const worker = await createWorker({
      logger: (info) => {
        if (info.status === "recognizing text") {
          setProgress(Math.round(info.progress * 100));
        }
      },
    });

    try {
      
      await worker.reinitialize("eng");
      const { data } = await worker.recognize(image);
      console.log(data.text)
      console.log('pass')
      setText(data.text);
    } catch (error) {
      console.error("OCR Error:", error);
    } finally {
        await worker.terminate()
        setLoading(false);
    }
    
  };
*/

    const handleBrowseClick = () => {
        fileInputRef.current.click()
    }
    

    return(
        <>
        <form 
        className="flex w-full border border-gray-300 rounded-xl bg-white/[0.6] py-12"
        
        >
            {
            /*<div className="h-80 w-full bg-gradient-to-r from-gray-500 to-slate-900 flex-center rounded-xl py-24 px-8">
            <h1 className='text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl font-inter flex-center my-0 py-5 px-2 rounded-3xl'>
                    Create your Study Group!
                </h1>
            */
            }
            <div className="border-r-2 text-left px-8 w-1/2 max-lg:w-full">
                <div className="border-b-2 pb-5">
                <h1 className="font-inter text-2xl text-black font-bold ">
                    {type} your Information
                </h1>
                <p className="font-satoshi font-normal text-sm text-gray-800 tracking-wide mt-1">
                    Please provide neccessary details including your doctor's report for us to access your information
                </p>
                </div>
                <div className="mt-5 mr-8">

                    <div className="flex items-center">

                    <p className="font-satoshi font-bold text-sm text-black tracking-wide mt-1 pr-8">
                        Does your family have a history of Diabetes?
                    </p>
                    <Checkbox
                    checked = {post.familyHistory}
                    onCheckedChange= {(check) => {
                        setPost({...post, familyHistory: check})
                    }}
                    />
                    </div>
                    {/*
                    <div
                    className="mt-2 flex items-center"
                    >

                        <div className="border-r-[2px] border-zinc-400">

                        <p
                        className="font-satoshi font-semibold text-sm text-black tracking-wide mt-1 pr-8"
                        
                        >
                            Doctor's report
                        </p>
                        <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e)}
                        className="hidden"
                        ref={fileInputRef}
                        />
                        <button
                        className="outline_btn mt-4"
                        type="button"
                        onClick={() => handleBrowseClick()}
                        >
                            Browse
                        </button>

                        </div>
                        <div
                        className={`ml-4 ${fileName ? '' : 'hidden'}`}
                        >
                            <h1
                            className={`font-inter font-semibold text-sm text-black tracking-wide mt-1 pr-8`}
                            >
                                You have selected the file:
                            </h1>
                            <h1
                            className="font-bold text-lg text-black"
                            >
                                {fileName}
                            </h1>
                        </div>

                    </div>
                    */}
                    <div
                    className="mt-4"
                    >
                        <p
                        className="font-satoshi font-bold text-sm text-black tracking-wide mt-1 pr-8"
                        >
                           Age 
                        </p>
                        <input
                        placeholder="Please provide your age"
                        className="mt-2 text-sm font-medium font-inter border border-gray-300 px-2 rounded py-2 w-full outline-none focus:border-gray-900"
                        onChange={(e) => {
                            setPost({...post, age: e.target.value})
                        }}
                        />
                    </div>
                    <div
                    className="mt-4"
                    >
                        <p
                        className="font-satoshi font-bold text-sm text-black tracking-wide mt-1 pr-8"
                        >
                           BMI
                        </p>
                        <input
                        placeholder="Please provide your BMI"
                        onChange={(e) => {
                            setPost({...post, BMI: e.target.value})
                        }}
                        className="mt-2 text-sm font-medium font-inter border border-gray-300 px-2 rounded py-2 w-full outline-none focus:border-gray-900"
                        />
                    </div>
                    <div
                    className="mt-4"
                    >
                        <p
                        className="font-satoshi font-bold text-sm text-black tracking-wide mt-1 pr-8"
                        >
                           Insulin Levels
                        </p>
                        <input
                        placeholder="Please provide your insulin levels in µU/mL"
                        onChange={(e) => {
                            setPost({...post, insulinLevel: e.target.value})
                        }}
                        className="mt-2 text-sm font-medium font-inter border border-gray-300 px-2 rounded py-2 w-full outline-none focus:border-gray-900"
                        />
                    </div>
                    
                    

            </div>
    
            </div>
            <div className="w-1/2 px-8">
                    <div
                    className="mt-4 w-full"
                    >
                        <p
                        className="font-satoshi font-bold text-sm text-black tracking-wide mt-1 pr-8"
                        >
                           Blood Pressure
                        </p>
                        <input
                        placeholder="Please provide your blood pressure in mmHg"
                        onChange={(e) => {
                            setPost({...post, bloodPressure: e.target.value})
                        }}
                        className="mt-2 text-sm font-medium font-inter border border-gray-300 px-2 rounded py-2 w-full outline-none focus:border-gray-900"
                        />
                    </div>
                    <div
                    className="mt-4"
                    >
                        <p
                        className="font-satoshi font-bold text-sm text-black tracking-wide mt-1 pr-8"
                        >
                           Skin Thickness
                        </p>
                        <input
                        placeholder="Please provide your skin thickness in µm"
                        className="mt-2 text-sm font-medium font-inter border border-gray-300 px-2 rounded py-2 w-full outline-none focus:border-gray-900"
                        />
                    </div>
                    <div
                    className="mt-4"
                    >
                        <p
                        className="font-satoshi font-bold text-sm text-black tracking-wide mt-1 pr-8"
                        >
                           Diabetes Pedigree Function
                        </p>
                        <input
                        placeholder="Please provide your DPF value"
                        className="mt-2 text-sm font-medium font-inter border border-gray-300 px-2 rounded py-2 w-full outline-none focus:border-gray-900"
                        />
                    </div>
                    <div
                    className="mt-4"
                    >
                        <p
                        className="font-satoshi font-bold text-sm text-black tracking-wide mt-1 pr-8"
                        >
                           Number of Pregnancies
                        </p>
                        <input
                        onChange={(e) => {
                            setPost({...post, pregnancies: e.target.value})
                        }}
                        placeholder="Please provide the number of pregnancy you have had"
                        className="mt-2 text-sm font-medium font-inter border border-gray-300 px-2 rounded py-2 w-full outline-none focus:border-gray-900"
                        />
                        </div>
                        <div className="flex-between mt-8 -mb-4">
                        <button 
                        type="button"
                        className="rounded-lg bg-white py-1.5 px-5 text-black transition-all p-2 hover:bg-black hover:text-white text-center text-sm font-inter flex items-center justify-center font-medium"
                        onClick={() => router.push('/')}
                        >
                            Cancel
                        </button>
                        <button 
                        className="rounded-lg border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center font-medium"
                        disabled={submitting}
                        type="button"
                        >
                            {loading ? 'Submitting...': 'Submit'}
                        </button>
                    </div>

                </div>         
        </form>
        </>
    )
}

export default Create