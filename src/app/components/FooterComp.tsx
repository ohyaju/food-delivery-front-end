import React from 'react'

const FooterComp = () => {
    return (
        <div className=' bg-black h-[740px] w-full relative'>

            <div className='bg-[#EF4444] h-[92px] w-full absolute top-10'>
                <div className='flex'>
                    <div className=' text-white font-bold text-[31px] flex gap-3 place-self-center'>
                        <h1>Fresh fast delivered </h1>
                        <h1>Fresh fast delivered </h1>
                        <h1>Fresh fast delivered </h1>
                        <h1>Fresh fast delivered </h1>
                        <h1>Fresh fast delivered </h1>
                        <h1>Fresh fast delivered </h1>
                        <h1>Fresh fast delivered </h1>
                    </div>
                </div>
            </div>

            <div className='display flex justify-center'>
                <div className='display flex gap-60'>
                    <div className='mt-30 place-content-center'>
                        <img src="fulllogo.png" alt="" className='w-[91px] h-97px]' />
                        <p>Swift delivery</p>
                    </div>
                    <div>
                        <h1 className='text-[#71717A] mt-50 text-[20px]'>NOMNOM</h1>
                        <div className='text-white flex flex-col gap-5 mt-5 text-[18px]'>
                            <p>Home</p>
                            <p>Contact us</p>
                            <p>Delivery zone</p>
                        </div>

                    </div>
                    <div>
                        <h1 className='text-[#71717A] mt-50 text-[20px]'>MENU</h1>
                        <div className='text-white flex flex-col gap-5 mt-5 text-[18px]'>
                            <p>Appetizers</p>
                            <p>Salads</p>
                            <p>Pizzas</p>
                            <p>Main Dishes</p>
                            <p>Desserts</p>
                        </div>

                    </div>
                    <div className='text-white flex flex-col gap-5 mt-63 text-[18px]'>
                        <p>Side dish</p>
                        <p>Brunch</p>
                        <p>Desserts</p>
                        <p>Bevarages</p>
                        <p>Fish & Sea foods</p>
                    </div>
                    <div>
                        <h1 className='text-[#71717A] mt-50 text-[20px]'>FOLLOW US</h1>
                        <div className='flex gap-5 mt-5'>
                            <img src="https://s3-alpha-sig.figma.com/img/51ce/951f/1825dc63909ca7d3c4ac0e5fb0a372ee?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ra2EmUaLR8EDK6NS-Ml1sgsMtqezI5LDCMlQ1PTHAfOo6KDc9nyd4SpDG5CzM2XF0Bv2GJtXjsXs9F4WJue0Ymt6SdWAAZQ4OM53ZsZISdqJM0pOsmEaEh6gxA5UWbgdZbK8jXxBvW6yQZK-y1APogiaNhN0iRhPP1~X4f~8AiqSjXWlybnbc-lWFszYU29Jr2f4Rf71MJCUjQ061rAtEemFAvQeH9~v~fAhMDxG~~LOtmQPhEifK89cxHoYs-aLEhlIZo-N5-XZGkbIa~iumaCkbJxjBAoKGJaYJSQ7BH95jcRNSz1xnlmvWFLPAEMJke-guyN-v-KOsFwW6INASg__" alt=""
                                className='w-[28px] h-[28px]' />
                            <img src="https://s3-alpha-sig.figma.com/img/2234/625a/4a532e2cfcc2c4f1e8bc4352831adc84?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IQVpig4wHMdaNuPSYJXo7GuYX~jko2QW0~flPChfcDpGcmxwfRe~o5O35u0gLdrFMUKlRE33yeoI5gk73idCtsgvwnoRVmEjbzZQ9GI9Uf16~rlQP1EUgK0SPscDL4iCt8bRZnNnUo2rC4Io3CaP1MwW2UoK7ctNq-qm86qgbGO1INH6J8I8HMzo7Xfbq8CxWijUphW1Deu5rGsJcNaP7N8Rhlj9DepS6B~Etvz~swwaRAvk1KME1yqM~MyACbuy8SwMaDNqV5aSeJEWXUgXmOt5b4EB1mbTSFl90bVRpOIZvW7iCxwFeMfCA1c0HINtAbxPn1l-KlFiS84iYPrrTA__" alt=""
                                className='w-[28px] h-[28px]' />
                        </div>
                    </div>
                </div>

            </div>
            <div className='border-t border-[#71717A] mt-25'>
                <div className='text-[#71717A] flex flex-row gap-10 ml-20 mt-10 text-[15px] '>
                    <p>Copy right 2024 Nomnom LLC </p>
                    <p>Privacy policy</p>
                    <p>Terms and condition</p>
                    <p>Cookie policy</p>
                </div>
            </div>

        </div >
    )
}

export default FooterComp