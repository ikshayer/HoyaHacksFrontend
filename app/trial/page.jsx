'use client'

import Create from "@components/Create"
// import { useSession } from "next-auth/react"
import Prediction from "@components/Prediction"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useToast } from "@hooks/use-toast"
function CreateSession(){

    // const {data: session} = useSession()
    const {toast} = useToast()
    const [isReportCorrect, setReportCorrect] = useState(false)
    const [hasSubmittedReport, setSubmittedReport] = useState(false)
    const [submittedData, setSubmittedData] = useState(false)
    const [analysedType, setAnalysedType] = useState(0)
    const router = useRouter()

    const [isChecked, setChecked] = useState(false)
    const [post, setPost] = useState({
        age: '',
        bloodPressure: '',
        insulinLevel: '',
        BMI: '',
        diabetesPedigreeFunction: '',
        bloodGlucose: '',
        familyHistory: false,
        pregnancies: '',       
    })
    const [isSubmitting, setSubmitting] = useState(false)
    const [newType, setNewType] = useState(0)

    const handleFormSubmitting = async(e) => {
        e.preventDefault();

        setSubmitting(true)
        try{
            const response = await fetch('https://localhost:5000/predict', {
                method: 'GET',
                body: JSON.stringify({
                    age: post.age,
                    bloodPressure: post.bloodPressure,
                    insulinLevel: post.insulinLevel,
                    BMI: post.BMI,
                    diabetesPedigreeFunction: post.diabetesPedigreeFunction,
                    bloodGlucose: post.bloodGlucose,
                    familyHistory: post.familyHistory,
                    pregnancies: post.pregnancies
                })
                
            })
            if(response.ok){
                const data = await response.json()
                setAnalysedType(data)
                setSubmittedReport(true)
            }
        }
        catch(err){
            console.log(err)

        }
        finally{
            setSubmitting(false)
        }
    }

    const handleDataSubmission = () => {
        const submitData = async () => {
            setSubmitting(true)
            try{
                const response = await fetch('/api/uploadData', {
                    method: 'POST',
                    body: JSON.stringify({
                        age: post.age,
                        bloodPressure: post.bloodPressure,
                        insulinLevel: post.insulinLevel,
                        BMI: post.BMI,
                        diabetesPedigreeFunction: post.diabetesPedigreeFunction,
                        bloodGlucose: post.bloodGlucose,
                        familyHistory: post.familyHistory,
                        pregnancies: post.pregnancies,
                        diabetesVersion: newType
                    })
                   
                })
                if(response.ok){
                    toast({
                        variant: 'success',
                        title: 'Thank you for you contribution',
                        description: "You have successfully posted your information to our database"
                    })
                    setSubmittedData(true)
                }
            }
            catch(err){
                toast({
                    variant: 'destructive',
                    title: 'Oops, something went wrong',
                    description: "We could not post your data to our database..."
                })
            }
            finally{
                setSubmitting(false)
            }
        }
        submitData()
    }
    

    /*
    const handleSubmitting = async(e) =>{
        e.preventDefault();

        const zoomLinkRegex = /^https:\/\/(zoom\.us|us05web\.zoom\.us)\/(j|wc)\/\d{9,11}(?:\?pwd=[a-zA-Z0-9]+)?\.\d$/
        if((!post.location && !post.zoomLink) || !post.date || !post.time || !post.description || post.tags.length === 0 ){
            toast({
                variant: 'destructive',
                title: "Incomplete Form!",
                description: "Please fill up all the options."
            })
        }
        else if(!post.location && !zoomLinkRegex.test(post.zoomLink)){
            toast({
                variant: 'destructive',
                title: "Invalid Zoom Link!",
                description: "Please enter a valid Zoom Link."
            })
        }
        else if(post.time && (Number(post.time.slice(0, 2)) < 10 || Number(post.time.slice(0, 2)) > 20)){
            toast({
                variant: 'destructive',
                title: "Invalid Time!",
                description: "Please enter a valid time between 10:00 to 20:00."
            })
        }
        else if(post.time && (Number(post.time.slice(3, 5)) % 15 !== 0)){
            toast({
                variant: 'destructive',
                title: "Invalid Time!",
                description: "Please enter a time with 15 minutes interval."
            })
        }
        else{
            setSubmitting(true);
            
            try{
                const response = await fetch('/api/session/new', {
                    method: "POST",
                    body: JSON.stringify({
                        userId: session.user.id,
                        location: (isChecked ? null: post.location),
                        zoomLink: (isChecked ? post.zoomLink : null),
                        date: post.date,
                        time: post.time,
                        description: post.description,
                        tags: post.tags
                    })
                })

                if(response.ok){
                    router.push('/')
                }
            }
            catch(error){
                console.log(error)
            } finally {
                setSubmitting(false)
            }
        }
    }
    */

    return(
        <>
        {!hasSubmittedReport ? (
        <Create
        type='Fill'
        post={post}
        setPost={setPost}
        submitting = {isSubmitting}
        handleSubmitting={handleFormSubmitting}
        isChecked={isChecked}
        setChecked={setChecked}
        />
        
        ) : (
        
        <Prediction
        type={analysedType}
        isReportCorrect={isReportCorrect}
        setReportCorect={setReportCorrect}
        setNewType={setNewType}
        handleSubmit={handleDataSubmission}
        />
        )
        
        }
        </>
    )
}

export default CreateSession