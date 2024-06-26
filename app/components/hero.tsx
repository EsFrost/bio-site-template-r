import Link from "next/link"
import Image from "next/image"

export default function Hero() {

    const imgUrl = "https://images.pexels.com/photos/21286370/pexels-photo-21286370/free-photo-of-foggy-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    return(
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                        Ac mattis <span className="dark:text-violet-600">senectus</span> erat pharetra
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
                        <br  className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque ligula sem
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <Link href="#" rel="noopener noreferrer"  className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Suspendisse</Link >
                        <Link href="#" rel="noopener noreferrer"  className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">Malesuada</Link >
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <Image
                        src={imgUrl}
                        alt="Photo of foggy mountains"
                        className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                        width={800}
                        height={1200}
                    />
                </div>
            </div>
        </section>
    )
}