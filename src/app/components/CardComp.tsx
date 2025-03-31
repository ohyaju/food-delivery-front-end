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
        <div className='bg-gray-600'>
            <Card className='w-[380px] h-[350px]'>

                <CardContent>
                    <img src="https://s3-alpha-sig.figma.com/img/4ff5/1a14/c041fc57196ebf52f07e524b5e4cc98c?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZbvwG82M8ui~d-pMpFWVfwArEW2aT1Luzh1bMlzkXIHzXtftS9x4oM6So1RO5Z86vBDKZBVvggY2vmSwJbLVoiL8znNqsfpf6VXO9SmrGzBR5UR85wIfbnYXzxesWe4iNdjBAhUuar9s~Q1V1ENTKp6JT0o7GipCmknFf9t5deMRf5E5o22C-4yI2-LBsVFFP1YR0C1NrFDGI7G1CE~CVnKG~mubtA-KHRKMw3EIRd4bvS7n99SRJXSoH9xQ3nJ5PqV7YaMo2V~oXNmJAbHyZUubreHI6Q06W3dc9noyrVROTCrk64RP9Ra6Ug99mwkAki-sICEd3iFIzVgp0OCM4g__" alt=""
                        className='w-[360px] h-[210px] flex place-self-center' />
                </CardContent>
                <div className='flex justify-around'>
                    <CardTitle> {FoodData.map((data) => (
                        <div key={data.id}>{data.ItemsName}
                            {data.foodItems.map((items) => (
                                <div key={items.id}>
                                    {items.name}
                                </div>
                                

                            ))}
                        </div>
                    ))}
                    </CardTitle>
                    <CardDescription className='font-bold text-black'>$12.99</CardDescription>
                </div>
                <CardHeader>
                </CardHeader> *
                <CardFooter className='mb-5'>
                    <p>Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.</p>

                </CardFooter>
            </Card>

        </div>
    )
}

export default CardComp
