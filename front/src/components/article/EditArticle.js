import React from 'react'

const EditArticle = () => {
  return (
    <div>
      <label for="chk" aria-hidden="true">Add Article</label>
					<input type="text" name="name" placeholder="Name" required="" />
					<input type="text" name="title" placeholder="Title" required="" />
                    <input type="text" name=" description" placeholder="Description" required="" />
					<button>UPDATE</button><button onClick={"http://localhost:5000/delete" }>DELETE</button>
    </div>
  )
}

export default EditArticle
