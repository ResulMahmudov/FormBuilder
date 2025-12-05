
import { CalendarOutlined, CheckOutlined, CheckSquareOutlined, MenuOutlined, NumberOutlined } from '@ant-design/icons'
import Inputitems from './Inputitems'


const Inputs = ({ setOpen }) => {

  return (
    <div className='flex justify-center items-start gap-8'>
      <div className='flex flex-col gap-2'>
        <Inputitems input="text" setOpen={setOpen} type="T" title="Text input" description="Add text input" />
        <Inputitems input="number" setOpen={setOpen} type={<NumberOutlined />} title="Number" description="Add number" />
        <Inputitems input="checkbox" setOpen={setOpen} type={<CheckSquareOutlined />} title="Checkbox" description="Add checkbox" />
        <Inputitems input="date" setOpen={setOpen} type={<CalendarOutlined />} title="Calendar" description="Add date picker" />
      </div>
      <div className='flex flex-col gap-2'>
        <Inputitems input="textarea" setOpen={setOpen} type="T" title="Text area" description="Add text area" />
        <Inputitems input="password" setOpen={setOpen} type={<CheckOutlined />} title="password" description="Add password" />
        <Inputitems input="radio" setOpen={setOpen} type={<MenuOutlined />} title="Radio Group" description="Add radio group" />
      </div>
    </div>
  )
}

export default Inputs