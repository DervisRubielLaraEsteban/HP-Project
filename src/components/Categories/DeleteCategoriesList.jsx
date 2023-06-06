import React from 'react'

const DeleteCategoriesList = ({setCategories}) => {
    const clearList = async () => {
        const {isConfirmed} = await Swal.fire({
            title: '¿Estás seguro de borrarlo?',
            text: "No podrás revertirlo ni con un giratiempo",
            icon: 'Warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borralo!'
        })
    
        if(isConfirmed){
            setCategories([]);
        }
    }
  return (
    <div>
        <button
            className='btn btn-danger'
            type='button'
            onClick={clearList}
        >
            <i className="bi bi-trash"></i>
        </button>
    </div>
  )
  
}
export default DeleteCategoriesList