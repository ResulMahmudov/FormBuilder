import { SettingOutlined } from "@ant-design/icons"

const Setting = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <button className="p-3 rounded-lg border border-gray-100 bg-gray-50">
        <SettingOutlined className="w-5 h-5 opacity-50 flex items-center justify-center" />
      </button>

      <p>Select an element to edit</p>
    </div>
  )
}

export default Setting