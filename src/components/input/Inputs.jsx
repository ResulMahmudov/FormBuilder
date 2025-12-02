
import Inputitems from './Inputitems'

const Inputs = () => {
  return (
    <div className='flex justify-center items-start gap-8'>
      <div className='flex flex-col gap-2'>
        <Inputitems type="T" title="Text input" description="Add text input" />
        <Inputitems type="A" title="Text Area" description="Add text area" />
        <Inputitems type="A" title="Text Area" description="Add text area" />
        <Inputitems type="A" title="Text Area" description="Add text area" />
      </div>
      <div className='flex flex-col gap-2'>
        <Inputitems type="A" title="Text Area" description="Add text area" />
        <Inputitems type="T" title="Text input" description="Add text input" />
        <Inputitems type="T" title="Text input" description="Add text input" />
      </div>
    </div>
  )
}

export default Inputs