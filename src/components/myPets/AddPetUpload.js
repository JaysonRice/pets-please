import React, { useState, useContext } from 'react'
import { Button } from 'reactstrap'
import { PetPicContext } from '../profiles/PetPictureProvider'

export const CloudinaryUpload = ({ pet, toggleAdd }) => {
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)

  const { addPetPic } = useContext(PetPicContext)

  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'PetsPleaseScaled')
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
    
      addPetPic({
        url: file.secure_url,
        likes: 0,
        petId: pet.id,
        timestamp: Date.now()
      }).then(toggleAdd)

    setLoading(false)
  }

  return (
    <div className="App">
      <input
        type="file"
        name="file"
        placeholder="Upload an image"
        onChange={uploadImage}
      />
      {loading ? (
        <h4>Loading...</h4>
      ) : (
          <img src={image} style={{ width: '300px' }} />
        )}
    </div>

  )
}

export default CloudinaryUpload

