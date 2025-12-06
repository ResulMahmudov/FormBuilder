import { EditOutlined, EyeOutlined, SaveOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='border-b border-[#ebecf0] flex justify-between items-center p-2 h-16 bg-white'>
      <div>
        <h1>FlowFormBuilder</h1>
      </div>
      <div className='flex  gap-4 items-center justify-center'>
        <div className='bg-[#f5f5f7] rounded-lg flex border items-center justify-center gap-4 w-[170px] h-[33px]'>
          <Link to="/">
            <div className='bg-white border w-[60px] h-[25px] rounded-[5px] flex items-center justify-center'>
              <button className='text-sm flex gap-2'><EditOutlined /> Edit</button>
            </div>
          </Link>
          <Link to="/preview">
            <div>
              <button className='text-sm flex gap-2'>
                <EyeOutlined /> Preview
              </button>
            </div>
          </Link>
        </div>

        <div className='flex items-center justify-center gap-6'>
          <div className='flex justify-center items-center  border border-[#ebecf0] bg-[#f5f5f7] rounded-lg w-[70px]  h-[33px] '>
            <button><SaveOutlined /> Save</button>
          </div>
          <div className=' rounded-lg w-[70px]  h-[33px] flex items-center justify-center bg-[#111827] text-white'>
            <button>Publish</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header