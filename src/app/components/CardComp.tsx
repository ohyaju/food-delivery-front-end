import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import FoodData from "@/app/components/FoodData";
const CardComp = () => {
    return (
        <div className="bg-gray-600">
            {FoodData.map((data) => (
                <div key={data.id} className='flex justify-center gap-5'>
                    <h2 className="text-white text-lg font-bold mt-[20px] ">{data.ItemsName}</h2>
                    {data.foodItems.map((item) => (
                        <div key={item.id} className="text-gray-900 flex flex-row mt-[40px]">
                            <Card className="w-[380px] h-[350px]">

                                <CardContent>
                                    <img
                                        src="https://s3-alpha-sig.figma.com/img/82cf/2d72/ae8de008994526b031c3fb1879ecf751?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EpejOztiAJrdi~qyxR8la4qf9pbg6ZIYDp8RSpkSt85t8yNkvhZOSfi2lYltRNBaWXZyYxxlP6tPFA9GZ8jEy1MuyYC7fMQSYOSfAc3xeK2thc5-IBRwTwkxzix18z2U8y-ZU~esUclPkrOENdVtUW9jG48x2-ZgtIuGW4kTc~5hpVcEKWPje2GEHMu0EDxXsR2vllh3oVCZWWKmIRrXxMF1hNZXg0zzdv8ty87~ccSXjAvNekjG0WgoYS4QWhyqf3sF08-bTm-K0NvdLtCFO59FFfIu6CTYXEDLtvxV6fIJVl15Lf4~YlNpSTwahhdT5m0kadNZMjuW58sG3g91GQ__"
                                        alt="Food Image"
                                        className="w-[360px] h-[210px] flex place-self-center"
                                    />
                                </CardContent>


                             
        
                                    <div className='ml-5'>
                                        <CardTitle className=" font-semibold">
                                            {item.name}
                                        </CardTitle>

                                        <CardDescription className="font-bold text-black">
                                            {item.price}
                                        </CardDescription>
                                    </div>

                                    <CardFooter className="">
                                        <div className="text-gray-700 text-sm mb-[30px]">
                                            {item.ingredients}
                                        </div>
                                    </CardFooter>
                              
                              
                            </Card>
                        </div>
                    ))}







                </div>
            ))}
        </div>
    )
}

export default CardComp;
