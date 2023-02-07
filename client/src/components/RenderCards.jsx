import { Card } from './'
import found from '../assets/found.svg'

export const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map(post => <Card key={post._id} {...post} />)
  }
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <img src={found} alt='logo' className='w-24' />
      <h2 className='font-semibold mt-2 text-Green text-opacity-90 uppercase select-none'>{title}</h2>
    </div>
  )
}
