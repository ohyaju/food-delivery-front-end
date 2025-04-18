import React from 'react'

const AddFoodComp = () => {
    return (
        <div className='w-full h-full flex'>  
            <div className='flex flex-col w-[205px] h-full'>
                <div className='mt-20'>
                    <img src="nomlogoblack.png" alt="" />
                </div>
                <div className='mt-10 flex flex-col gap-10'>
                    <div className='flex gap-5'>
                        <img src='foodmenu.png' />
                        <button>Food Menu</button>
                    </div>
                    <div className='flex gap-5'>
                        <img src='orders.png' />

                        <button>Orders</button>
                    </div>
                    <div className='flex gap-5'>
                        <img src='settings.png' />

                        <button>Settings</button>
                    </div>

                </div>
            </div>
            <div className='bg-gray-200 w-[1171px] h-full'>
                    <div>Dishes category</div>
                    <div>add new dish </div>
                </div>

        </div>
    )
}

export default AddFoodComp