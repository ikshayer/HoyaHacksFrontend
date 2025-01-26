import { connectToDB } from "@utils/database"
import User from "@models/profileSchema"

export const POST = async (req) => {

    const {
        age, 
        bloodPressure, 
        insulinLevel, 
        familyHistory, 
        bloodGlucose, 
        pregnancy, 
        BMI, 
        diabetesPedigreeFunction,
        diabetesVersion } = await req.json()

    try{
        
        await connectToDB()

        const user = await User.create({
            age: age,
            bloodPressure: bloodPressure,
            insulinLevel: insulinLevel,
            familyHistory: familyHistory,
            bloodGlucose: bloodGlucose,
            pregnancy: pregnancy,
            BMI: BMI,
            diabetesPedigreeFunction: diabetesPedigreeFunction,
            diabetesVersion: diabetesVersion
        })
        await User.save()
        return new Response("Successfully added the user's data", {status: 200})
    }
    catch(err){
        return new Response("Error in uploading user's data", {status: 500})
    }

}