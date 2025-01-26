import { Checkbox } from "./ui/checkbox"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
  } from "@/components/ui/command"
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

function Prediction({
    type,
    isReportCorrect,
    setReportCorect,
    setNewType,
    handleSubmit
}){
    return (
        <>
        <div
        className="w-3/4 border border-gray-300 rounded-xl bg-white/[0.6]"
        >
            <div className="px-8 py-4">
                <h1 className="text-2xl font-bold ">
                    Your Diagnosis Report
                </h1>
            </div>
            <div
            className="mt-12 mx-12 pb-12 font-bold text-4xl flex-center border-b border-zinc-400"
            >
                {type === 0 ? ('You do not have diabetes') : (`You have Type ${type} Diabetes`)}
            </div>
            <div
            className="text-xl font-bold mx-12 mt-8"
            >
                You can help improve our diagnosis by uploading your data...
            </div>

            <div
            className="flex-start mt-2 mx-12 gap-4"
            >
                <p className="text-sm">
                    Was the diagnosis from our website different from your doctor's?
                </p>
                <Checkbox
                checked = {isReportCorrect}
                onCheckedChange= {(check) => {
                    setReportCorect(check)
                }}
                />
            </div>

            <form
            className="w-full"
            onSubmit={handleSubmit}
            >
            {isReportCorrect ? (
                <div
                className="mx-12 my-4 border border-zinc-300 px-8 py-4 rounded-xl"
                >
                <p className="font-inter text-sm mb-4">
                    Please specify what was the actual type
                </p>
                <RadioGroup defaultValue={type.toString()} onValueChange={(value) => setNewType(value)}>
                    <div className="flex items-center gap-2">
                    <RadioGroupItem value='0'/>
                    <h1 className="text-sm font-semibold ">
                        No Diabetes
                    </h1>
                    </div>
                    <div className="flex items-center gap-2">
                    <RadioGroupItem value='1'/>
                    <h1 className="text-sm font-semibold ">
                        Diabetes Type 1
                    </h1>
                    </div>
                    <div className="flex items-center gap-2">
                    <RadioGroupItem value='2'/>
                    <h1 className="text-sm font-semibold ">
                        Diabetes Type 2
                    </h1>
                    </div>
                </RadioGroup>
                </div>
            ) : 
               null 
            }
            
            <div className="flex-between mx-12 my-8">
                <button
                className="outline_btn"
                >
                    Ignore
                </button>
                <button
                className="black_btn"
                type='submit'
                onClick={() => handleSubmit()}
                >
                    Submit
                </button>
            </div>
            </form>

        </div>
        </>
    ) 
}
export default Prediction