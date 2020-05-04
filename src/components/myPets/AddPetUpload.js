import React, { useState } from 'react'
import { Button } from 'reactstrap'

export const CloudinaryUpload = () =>{
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)

  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'PetsPlease')
    setLoading(true)
    const res = await fetch(
      '	https://api.cloudinary.com/v1_1/dawhgtkqk/image/upload',
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json()

    setImage(file.secure_url)
    setLoading(false)
  }

  return (
    <div className="App">
      <h5>Upload Main Picture</h5>
      <input
        type="file"
        name="file"
        placeholder="Upload an image"
        onChange={uploadImage}
      />
      { loading ? (
        <h4>Loading...</h4>
      ) : (
        <img src={image} style={{ width: '300px' }} />
      )}
    </div>
    
  )
}

export default CloudinaryUpload

