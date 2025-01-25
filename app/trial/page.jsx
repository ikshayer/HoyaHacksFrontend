'use client'

import Create from "@components/Create"
// import { useSession } from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useToast } from "@hooks/use-toast"
function CreateSession(){

    // const {data: session} = useSession()
    const {toast} = useToast()

    const router = useRouter()

    const [isChecked, setChecked] = useState(false)
    const [post, setPost] = useState({
        age: '',
        gender: '',
        insulinLevel: '',
        cPeptide: '',
        HOMA: '',
        bloodGlucose: '',
        familyHistory: false,
        physicalActivity: '',
        bmi: ''        
    })
    const [isSubmitting, setSubmitting] = useState(false)

    const handleSubmitting = async(e) => {
        
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
        <Create
        type='Fill'
        post={post}
        setPost={setPost}
        submitting = {isSubmitting}
        handleSubmitting={handleSubmitting}
        isChecked={isChecked}
        setChecked={setChecked}
        />
    )
}

export default CreateSession