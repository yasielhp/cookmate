import { Card } from './'

export const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map(recipe => <Card key={recipe._id} {...recipe} />)
  }
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <img src='/found.svg' alt='logo' className='w-24' />
      <h2 className='font-semibold mt-2 text-Green text-opacity-90 uppercase select-none'>{title}</h2>
    </div>
  )
}
