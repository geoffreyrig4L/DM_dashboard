const Header = ({ pagetitle }) => {
  return (
    <header className="h-16 px-10 mb-8 flex flex-row items-center justify-between bg-slate-900 text-white">
      <h1 className="text-4xl font-bold">{pagetitle}</h1>
        <nav className="text-lg flex flex-row items-center justify-between">
        <Link href="/">
            <a className="py-2 text-center w-24 transition-all hover:bg-slate-500 hover:font-bold">
            Journal
            </a>
        </Link>
        <Link href="/add_entry"> 
            <a className="py-2 text-center w-24 transition-all hover:bg-slate-500 hover:font-bold">
            Ajouter une donnée
            </a>
        </Link>
        </nav>
    </header>
  )

  /*Link permet de rediriger vers un fichier*/
}

export default Header
