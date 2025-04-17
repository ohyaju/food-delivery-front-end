import React from 'react'
import FoodData from "@/app/components/FoodData";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export function CardComp() {
    return (
        <div>
            <div className="flex flex-col">
                {FoodData.map((data) => (
                    <div key={data.id} className="flex flex-col gap-4 ">
                        <h2 className="text-white text-lg font-bold mt-5 bg-amber-200">{data.ItemsName}</h2>

                        {data.foodItems.map((item) => (
                            <div className='w-[300px] h-[300px] bg-green-300'>
                                <div>
                                    <Dialog key={item.id}>
                                        <div className="flex flex-row items-center  bg-amber-600 mt-4">
                                            <DialogTrigger asChild>
                                                <Button className="text-[#EF4444] rounded-full bg-white">+</Button>
                                            </DialogTrigger>
                                            <div className="text-[#EF4444] text-2xl">{item.name}</div>

                                            <div className='text-green-500'>
                                                {item.price}
                                            </div>
                                            <div>{item.ingredients}</div>

                                        </div>

                                        <DialogContent className='flex w-full'>
                                            <div>
                                                <img
                                                    className="w-[377px] h-[264px] object-cover rounded-lg"
                                                    src="https://s3-alpha-sig.figma.com/img/34c3/688e/73a7fec1f66f9edc2b2a97c609da743f?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YBtZL4H4jr1LKgFa2g-3XmBDHhV7Wvu5tKUKiKBzscvjixU6FTcjmyKXAlPa92Sngrk6KjiE86WOyU~Ugss9TTY8N1-f1GF4K8QBX9s90dnC5DpAEp01ztZnsf2G0lbjUIPzfA2U9qR8NeuZ4LxMCI0hsUs3C6eDBv9~p2tZn2iX-ks2M1JaseNcqfyG6ONiERN5nprBVzIxgpbnf1PZM-65kmA8liAanegi8jO8NYURVKVmkDMB0ZcD1Coe9a9ghfM9bavjXlZQmb9XiEBb~ENpjd7VpDKvvxa~u681Fpqxly8pa4BV9RjnLjroBS-L5WEsqt0U-SLbW-v4SxN3iA__"
                                                    alt="Food"
                                                />
                                            </div>

                                            <div>
                                                <DialogHeader>
                                                    <DialogTitle className="text-[#EF4444] text-2xl">{item.name}</DialogTitle>
                                                    <DialogDescription>
                                                        <div className='text-indigo-300'>
                                                            {item.ingredients}
                                                        </div>
                                                    </DialogDescription>
                                                </DialogHeader>
                                                <div className="mt-4">
                                                    <h2 className="text-lg font-medium">Total price</h2>
                                                    <h1 className="font-semibold">${item.price}</h1>
                                                </div>

                                                <div className="flex gap-3 mt-4 items-center">
                                                    <Button className="bg-white rounded-full border border-gray-400 text-black">-</Button>
                                                    <div>1</div>
                                                    <Button className="bg-white rounded-full border border-gray-400 text-black">+</Button>
                                                </div>

                                                <DialogFooter className="mt-4">
                                                    <Button type="submit" className="rounded-full h-[44px] w-full">Add to cart</Button>
                                                </DialogFooter>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </div>



                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardComp
