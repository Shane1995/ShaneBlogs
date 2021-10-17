import Content from '../../components/Content'

export default function index({ results }) {
  return (
    <div>
      <Content contents={[...results.blogPosts]} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const category = context.query.tag === undefined ? 'fetchNewest' : context.query.tag

  const results = {
    blogPosts: [
      {
        id: 1,
        title: 'Fundamentals of C#',
        image_path: '/',
        created_at: '2021-09-01 16:33:44',
        updated_at: '2021-09-01 16:33:44',
        version: 3,
        tags: ['C#'],
        summary:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release o Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
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
        summary:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
      },
      {
        id: 4,
        title: 'C# Web API',
        image_path: '/image',
        created_at: '2021-09-01 16:33:44',
        updated_at: '2021-09-01 16:33:44',
        version: 3,
        tags: ['API', 'Web API', 'Asp.net core', 'core'],
        summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      },
      {
        id: 5,
        title: 'Caching with Redis',
        image_path: '/image',
        created_at: '2021-09-01 16:33:44',
        updated_at: '2021-09-01 16:33:44',
        version: 3,
        tags: ['Caching', 'Redis', 'Asp.net core', 'core'],
        summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      }
    ]
  }

  return {
    props: {
      results
    }
  }
}
