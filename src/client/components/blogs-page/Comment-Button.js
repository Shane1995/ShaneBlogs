import { useState } from 'react'

function CommentButton({ Icon, name, SelectedIcon }) {
  const [isSelected, setIsSelected] = useState(false)

  const onClickHandler = () => {
    setIsSelected(!isSelected)
  }

  return (
    <div
      className={`flex flex-row cursor-pointer text-sm rounded hover:text-white hover:font-bold active:text-red-500 hover:bg-[#06202A] p-2 `}
      onClick={onClickHandler}>
      {isSelected ? (
        <SelectedIcon className='md:h-4 md:pr-2 h-4 pr-1 text-red-500 ' />
      ) : (
        <Icon className='md:h-4 md:pr-2 h-4 pr-1 text-red-500 ' />
      )}

      <span>{name}</span>
    </div>
  )
}

export default CommentButton
