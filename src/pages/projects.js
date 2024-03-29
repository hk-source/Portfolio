import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
const projects = () => {
  return (
    <>
    <Head>
        <title>HasanKamran | Projects Page</title>
        <meta name='description' content='about you' />
        </Head>
        <main className='w-full mb-16 flex flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text="Imagination Trumps Knowledge!" />

                <div className='grid grid-cols-12 gap-24'>
                    <div className='col-span-12'>
                        Featured Project
                    </div>
                    <div className='col-span-6'>
                        Project-1
                    </div>
                    <div className='col-span-6'>
                        Project-2
                    </div>

                    <div className='col-span-12'>
                        Featured Project
                    </div>
                    <div className='col-span-6'>
                        Project-3
                    </div>
                    <div className='col-span-6'>
                        Project-4
                    </div>
                </div>



            </Layout>
        </main>
    </>
  )
}

export default projects