import Head from 'next/head'
import Card from '../components/home-page/Card'
import Section from '../components/home-page/Section'
import Welcome from '../components/home-page/Welcome'

export default function Home() {
  const repos = [
    {
      name: 'Bucket-Central',
      description: 'Project for storing commands and information on various topics.',
      url: '/'
    },
    {
      name: 'Ticketing-dev',
      description: 'Ticket system for bidding for entertainment tickets.',
      url: '/'
    },
    {
      name: 'Shopping-list-App',
      description: 'Express MVC app for managing my groceries.',
      url: '/'
    },
    {
      name: 'ReactProjects',
      description: 'React projects I have done while doing a Udemy course.',
      url: '/'
    },
    {
      name: 'ShaneBlogs',
      description: 'NextJs Web application that acts as a portfolio and a place where I can blog.',
      url: '/'
    },
    {
      name: 'GraphQL',
      description: 'Express Js with express-graphql.',
      url: '/'
    }
  ]
  const featuredBlogs = [
    {
      id: 1,
      title: 'Fundamentals of C#',
      image_path: '/',
      created_at: '2021-09-01 16:33:44',
      updated_at: '2021-09-01 16:33:44',
      version: 3,
      tags: ['C#'],
      summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      id: 2,
      title: 'Node Js and Express ',
      image_path: '/image',
      created_at: '2021-09-01 16:33:44',
      updated_at: '2021-09-01 16:33:44',
      version: 3,
      tags: ['NodeJs', 'Express'],
      summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      id: 3,
      title: 'Azure CI/CD',
      image_path: '/',
      created_at: '2021-09-01 16:33:44',
      updated_at: '2021-09-01 16:33:44',
      version: 3,
      tags: ['DevOps', 'Powershell', 'CI/CD'],
      summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }
  ]

  const renderProjectCards = () => {
    return repos.map((project, index) => {
      return <Card key={index} title={project.name} description={project.description} linkTitle='View Code' />
    })
  }

  const renderFeaturedBlogs = () => {
    return featuredBlogs.map((value, index) => {
      return (
        <article key={index} className='p-2 font-mono text-center cursor-pointer hover:text-white'>
          <div>
            <h1 className='text-2xl text-blue-200 cursor-pointer underline pb-2'>{value.title}</h1>
            <p>{value.summary}</p>
          </div>
        </article>
      )
    })
  }

  return (
    <>
      <Head>
        <title>ShaneBlogs | Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='md:max-w-5xl lg:mx-auto mt-4 px-4  antialiased'>
        <Welcome />
        <section>
          <h2 className='mb-8 text-2xl md:text-4xl font-bold font-mono tracking-tighter leading-tight text-blue-400'>
            Featured Posts
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32'></div>
        </section>
        <Section title='GitHub Projects' layout='grid grid-cols-1 pb-4 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:mt-10'>
          {repos && renderProjectCards()}
        </Section>
      </main>
    </>
  )
}
