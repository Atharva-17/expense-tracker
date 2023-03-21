import React from 'react'
import { useStateContext } from "../contexts/ContextProvider";
const UserPage = () => {

    const { loginUser } = useStateContext();

    return (
            <div class="relative z-10" role="dialog" aria-modal="true">
                <div class="fixed inset-0 z-10 overflow-y-auto bg-black">
                    <div class="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                    
                        <div class="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                            <div class="relative rounded-md flex w-full items-center overflow-hidden bg-zinc-900 px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">

                                <div class="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
                                    <div class="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg sm:col-span-4 lg:col-span-5">
                                    <img src="https://xp.io/storage/2FbrF06z.png" alt="user" class="object-cover object-center" />
                                    </div>
                                    <div class="sm:col-span-8 lg:col-span-7">
                                    <h2 class="text-2xl font-bold text-white sm:pr-12">Your Account Details</h2>

                                    <section aria-labelledby="information-heading" class="mt-2">
                                    </section>
                                    
                                    <section aria-labelledby="options-heading" class="mt-10">

                                        <form>

                                        <div>
                                            <h4 class="text-xl font-medium text-white">Name</h4>
                                            <p className='text-white'>{loginUser.name}</p>
                                        </div>

                                        <div class="mt-10">
                                            <h4 class="text-xl font-medium text-white">Email</h4>
                                            <p className='text-white'>{loginUser.email}</p>
                                        </div>

                                        </form>
                                    </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default UserPage