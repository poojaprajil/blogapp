import React from 'react'

const AddArticle = () => {
  return (
    <div>
      <form action="http://localhost:5000/add" method="post"> 
					<label for="chk" aria-hidden="true">Add Article</label>
					<input type="text" name="name" placeholder="Name" required="" />
					<input type="text" name="title" placeholder="Title" required="" />
                    <input type="text" name=" description" placeholder="Description" required="" />
					<button>ADD</button>
				</form>
    </div>
  )
}

export default AddArticle
