import React from 'react';
import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { BsCloudUpload } from 'react-icons/bs';
import { ImagetoBase64 } from '../utility/ImagetoBase64';
import customBuildBG from '../assets/customBuild.jpg'

const Customproduct = () => {
  const [data, setData] = useState({
    name: "",
    phoneNumber: "",
    image: "",

    description: ""
  })

  const handleOnChange = (e) => {
    const { name, value } = e.target

    setData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })

  }

  const uploadImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0])
    // console.log(data)

    setData((preve) => {
      return {
        ...preve,
        image: data
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()            //to prevent the default behaviour of loading the page
    console.log(data)              //checking what data came on submitting

    const { name, image, phoneNumber } = data //extracting the data 

    if (name && image && phoneNumber) { //checking in case all required fields have been submitted
      //go and post this data. 
      console.log("REACT_APP_SERVER_DOMAIN:", "https://vkweldingworksbackend.onrender.com");

      const fetchData = await fetch(`https://vkweldingworksbackend.onrender.com/customproduct`, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data) //to convert entered details in terms of JSON.
      })

      const fetchRes = await fetchData.json() //fetching the response sent from backend API. either success or fail

      console.log(fetchRes)    //showing response
      toast.success("Query sent successfully !!!")

      setData(() => {            //in case everything is fine, then add this data 
        //into state holder for usage at other places
        return {
          name: "",
          description: "",

          image: "",
          // price : "",
          phoneNumber: ""

        }
      })
    }
    else {
      toast.error("Enter required fields")
    }

  }

  return (
    <div >
      <div style={{
        backgroundImage: `url(${customBuildBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%',
        position: 'relative',
        borderRadius: '5px',
        overflow: 'hidden',
        
      }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as per your requirement
            backdropFilter: 'blur(5px)', // Add the blur effect to the overlay
            borderRadius: '5px',
            
            zIndex: 1, // Ensure the overlay is above the background image
          }}
        ></div>

        <div style={{ position: 'relative', zIndex: 2 }}>
          <h3 className=" pt-4 text-center text-3xl font-semibold mb-2 text-white">Couldn't find your product?</h3>
          <h6 className="text-center text-3xl font-bold mb-4 text-white">Want a custom build?</h6>
          <form className='m-auto  w-full max-w-md drop-shadow-2xl shadow-lg rounded-lg flex flex-col p-5 bg-transparent mb-10'onSubmit={handleSubmit}>
            <label className='font-semibold text-lg text-white' htmlFor='name'>Product name</label>
            <input type={"text"} placeholder='Enter Product name' name="name" style={{border:'2px solid black'}} className=' bg-slate-200 p-1 my-1  rounded-lg ' onChange={handleOnChange} value={data.name} />


            <label className='font-semibold text-lg text-white' htmlFor='image'>Upload image of your product
              <div className='h-40 w-full bg-slate-200 pt-4 rounded flex items-center justify-center cursor-pointer'  style={{border:'2px solid black'}} >
                {
                  data.image ? <img src={data.image} alt='' className="h-full" /> : <span className='text-5xl'><BsCloudUpload /></span>
                }


                <input type={"file"} accept="image/*" id="image" onChange={uploadImage} className="hidden" />
              </div>
            </label>



            <label className='font-semibold text-lg text-white' htmlFor='description'>Product Description</label>
            <textarea rows={2} placeholder='Tell us something about your product' value={data.description} style={{border:'2px solid black'}} className=' bg-slate-200 p-1 my-1  rounded-lg  resize-none' name='description' onChange={handleOnChange}></textarea>

            {/* <label className='font-semibold text-lg text-white' htmlFor='price' className=''>Price</label>
        <input type={"text"} placeholder='What price are you expecting?' style={{border:'2px solid black'}} className=' bg-slate-200 p-1 my-1  rounded-lg ' name='price' onChange={handleOnChange} value={data.price}/> */}

            <label className='font-semibold text-lg text-white' htmlFor='phoneNumber'>Mobile number</label>
            <input type={"number"} placeholder='We will contact you for measurement' name="phoneNumber" style={{border:'2px solid black'}} className=' bg-slate-200 p-1 my-1  rounded-lg ' onChange={handleOnChange} value={data.phoneNumber} />

            <button className="py-5 mt-4 bg-red-500 hover:bg-red-600  rounded-lg text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-800 rounded">SUBMIT</button>

          </form>
        </div>
        <Toaster />
      </div>
    </div>
  )
}

export default Customproduct;