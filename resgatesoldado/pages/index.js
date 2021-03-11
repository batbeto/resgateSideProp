import Link from 'next/link'

export default function Principal(){
  return (
    <Link href="/movies">
      <a>
        Clique aqui para os filmes!
      </a>
    </Link>
  )
}