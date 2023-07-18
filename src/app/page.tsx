import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex w-full h-full">
      <div className='w-1/3 p-10'>
        <div>
          <button>
            Search For places
          </button>
          <div>loc</div>
        </div>
      </div>
      <div className='w-full'>
        Details
      </div>
    </main>
  )
}
