import Link from "next/link"

const Header = ({ pagetitle }) => {
  return (
    <header className="h-16 px-10 mb-8 flex flex-row items-center justify-between bg-green-800 text-white">
      <h1 className="text-2xl">{pagetitle}</h1>
      <nav className="text-lg flex-row items-center justify-around">
        <Link href="/">
          <a className="py-2 basis-6 mx-4 text-center w-24 transition-all hover:border-b-4">
            Journal
          </a>
        </Link>
        <Link href="/add_entry">
          <a className="py-2 basis-6 mx-4 text-center w-24 transition-all hover:border-b-4">
            Ajouter une donnée
          </a>
        </Link>
      </nav>
    </header>
  )

  /*Link permet de rediriger vers un fichier*/
}

export default Header
