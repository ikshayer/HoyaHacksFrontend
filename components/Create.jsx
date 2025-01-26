'use client'

import { useRouter } from "next/navigation"
import {useRef} from 'react'

function Create(
    {
        type,
        post,
        setPost,
        submitting,
        handleSubmitting,
        fileName,
        handleFileChange
    }
){
    const fileInputRef = useRef(null)
    
    const router = useRouter()


    const handleBrowseClick = () => {
        fileInputRef.current.click()
    }
    

    return(
        <>
        <form 
        className="flex w-full border border-gray-300 rounded-xl bg-white/[0.6] py-12"
        onSubmit={handleSubmitting}
        >
    
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

            </div>
    
            </div>
            <div className="w-1/2 px-8">
                    
                    <div
                    className="mt-4"
                    >
                        <p
                        className="font-satoshi font-bold text-sm text-black tracking-wide mt-1 pr-8"
                        >
                           Skin Thickness
                        </p>
                        <input
                        onChange={(e) => {
                            setPost({...post, skinThickness: e.target.value})
                        }}
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
                        onChange={(e) => {
                            setPost({...post, diabetesPedigreeFunction: e.target.value})
                        }}
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

                    <div
                    className="mt-4"
                    >
                        <p
                        className="font-satoshi font-bold text-sm text-black tracking-wide mt-1 pr-8"
                        >
                           Blood Glucose Level
                        </p>
                        <input
                        onChange={(e) => {
                            setPost({...post, bloodGlucose: e.target.value})
                        }}
                        placeholder="Please provide your DPF value"
                        className="mt-2 text-sm font-medium font-inter border border-gray-300 px-2 rounded py-2 w-full outline-none focus:border-gray-900"
                        />
                    </div>

                    <div
                    className="mt-4"
                    >
                        <p className="font-satoshi font-bold text-sm text-black tracking-wide mt-1 pr-8">
                            Doctor's Report's Image
                        </p>
                        <input
                        type='file'
                        ref={fileInputRef}
                        className="hidden"
                        onChange={handleFileChange}
                        />
                        <div className="gap-2 border border-zinc-400 mt-2 rounded-xl px-4 py-2 flex items-center">
                            <button
                            onClick={() => handleBrowseClick()}
                            className="px-4 py-1 black_btn_borderless rounded-xl border-[2px] border-black"
                            type="button"
                            >
                                Browse
                            </button>
                            <h1 className="font-inter font-semibold text-sm text-gray-400">
                                {fileName ? `You have selected ${fileName}` : 'No file selected...'}
                            </h1>
                        </div>
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
                        onClick={() => handleSubmitting()}
                        >
                            {submitting ? 'Submitting...': 'Submit'}
                        </button>
                    </div>

                </div>         
        </form>
        </>
    )
}

export default Create