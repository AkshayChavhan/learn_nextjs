import { useRouter } from 'next/router'

const Slug = () => {
  const router = useRouter()
  const { slug } = router.query
  console.log(router.query)

  return <p>Slug: {slug}</p>
}

export default Slug;