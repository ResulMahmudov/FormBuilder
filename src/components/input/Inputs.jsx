
import { CalendarOutlined, CheckOutlined, CheckSquareOutlined, MenuOutlined, NumberOutlined } from '@ant-design/icons'
import Inputitems from './Inputitems'

const Inputs = () => {
  return (
    <div className='flex justify-center items-start gap-8'>
      <div className='flex flex-col gap-2'>
        <Inputitems type="T" title="Text input" description="Add text input" />
        <Inputitems type={<NumberOutlined />} title="Number" description="Add number" />
        <Inputitems type={<CheckSquareOutlined />} title="Checkbox" description="Add checkbox" />
        <Inputitems type={<CalendarOutlined />} title="Calendar" description="Add date picker" />
      </div>
      <div className='flex flex-col gap-2'>
        <Inputitems type="T" title="Text area" description="Add text area" />
        <Inputitems type={<CheckOutlined />} title="Dropdown" description="Add dropdown" />
        <Inputitems type={<MenuOutlined />} title="Radio Group" description="Add radio group" />
      </div>
    </div>
  )
}

export default Inputs